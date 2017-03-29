var cadena1 = document.getElementById("cadena");
var numero1 = document.getElementById("numero");

function palindromo(cadena){
  var is_pal = true;
  pila = []
  for(var i=0; i < cadena.length; i++){
    pila.push(cadena[i]);
  }
  for(var i=0; i < cadena.length; i++){
    if(cadena[i] != pila.pop()){
      is_pal = false;
      break;
    }
  }
  return is_pal
}

function vocales(cadena){
	var sin_vocales="";
	cadena=cadena.toLowerCase()
	for(var i =0;i<cadena.length;i++){
		if(cadena[i]=="a" || cadena[i]=="e" || cadena[i]=="i" || cadena[i]=="o" || cadena[i]=="u"){
			continue;
		}
		else{
			sin_vocales+=cadena[i]
		}

	}
	return sin_vocales;
}
function contar(cadena){
	var mensaje="";
	var a=0;
	var e=0;
	var i=0;
	var o=0;
	var u=0
	cadena=cadena.toLowerCase();
	for(var c=0;c<cadena.length;c++){
		if(cadena[c]=="a"){
			a++;
		}
		else if(cadena[c]=="e"){
			e++;
		}
		else if(cadena[c]=="i"){
			i++;
		}
		else if(cadena[c]=="o"){
			o++;
		}
		else if(cadena[c]=="u"){
			u++;
		}
		else{
			continue;
		}
		}
	mensaje="a: "+ a +" e: "+e+" i: "+i+" o: "+o+" u: "+u;
	return mensaje;
	}

	function contar_numeros(numero){
  	numeros = [0,0,0,0,0,0,0,0,0,0];
  	var mensaje="";
  	for(var i = 0; i < numero; i++){
    	var aux = numero[i]
    	numeros[aux]++;
  	}
   mensaje= "*0: "+numeros[0] + " *1: "+numeros[1] +" *2: "+numeros[2]
  +" *3: "+numeros[3] + " *4: "+numeros[4]+" *5: "+numeros[5] + " *6: "+numeros[6] +" *7: "+numeros[7]
  +" *8: "+numeros[8] + " *9: "+numeros[9];
  return mensaje;
}
	function factorial(numero){
		var fac=1;
		for(var i=numero; i>0;i--, numero--){
			fac=fac*numero;
		}
		return fac;
	}
cadena1.addEventListener("click", function(){
  cadena = prompt("Ingresa una cadena","Cadenita");
  document.write("<p>"+cadena.toUpperCase()+"</p>");
  document.write("<p>"+cadena.toLowerCase()+"</p>");
  var pal = palindromo(cadena)
  if(pal){document.write("<p>Es un palindromo</p>");}
  else{document.write("<p>No es un palindromo</p>");}
  var vocal=vocales(cadena);
  document.write("<p>"+vocal+"</p>");
  var cont = contar(cadena);
  document.write("<p>"+cont+"</p>");

});

numero1.addEventListener("click", function(){
  numero = prompt("Numero","101");
   var cap = palindromo(numero)
  if(cap){document.write("<p>Es capicua</p>");}
  else{document.write("<p>No es capicua</p>");}
	var conta=contar_numeros(numero);
	document.write("<p>"+conta+"</p>");
	var facto=factorial(numero); 
	document.write("<p>"+facto+"</p>"); 
})