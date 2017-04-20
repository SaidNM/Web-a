var agrega1=document.getElementById("Agregar1");
var agrega5=document.getElementById("AgregarV");
var elimina1=document.getElementById("Eliminar1");
var elimina5=document.getElementById("EliminarV");
var tabla=document.getElementById("fact");
var numero=0;

function calcular_factorial(factorial){
	var resul=1;
	for(var i=factorial;i>0;i--){
		resul=resul*i;	
	}
	return resul;
}

agrega1.addEventListener("click", function(){
	numero++;
	var txtNumero=document.createTextNode(numero);
	var txtFact=document.createTextNode(calcular_factorial(numero));
	var fila=document.createElement("tr");
	var colNum=document.createElement("td");
	var colFact=document.createElement("td");
	var fil=tabla.appendChild(fila); 
	fil.appendChild(colNum);
	fil.appendChild(colFact);
	colNum.appendChild(txtNumero);
	colFact.appendChild(txtFact);

});
agrega5.addEventListener("click",function(){
for(var i=0;i<5;i++){
	numero++;
	var txtNumero=document.createTextNode(numero);
	var txtFact=document.createTextNode(calcular_factorial(numero));
	var fila=document.createElement("tr");
	var colNum=document.createElement("td");
	var colFact=document.createElement("td");
	var fil=tabla.appendChild(fila); 
	fil.appendChild(colNum);
	fil.appendChild(colFact);
	colNum.appendChild(txtNumero);
	colFact.appendChild(txtFact);
	}
});

elimina1.addEventListener("click",function(){
	var ultimo=tabla.lastChild;
	tabla.removeChild(ultimo);
	numero--;
});

elimina5.addEventListener("click",function(){
	for(var i=numero;i>0;i--){
	var ultimo=tabla.lastChild;
	tabla.removeChild(ultimo);
	numero--;
	}
});