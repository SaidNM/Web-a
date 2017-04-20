var btn =document.getElementById("enviar");
var valor =[];

if(document.cookie!=""){
rellenar();
}

btn.addEventListener("click",function(event){
	event.preventDefault();
	var aux = document.getElementById("nombre").value;
	valor.push(aux);
	aux = document.getElementById("apellido").value;
	valor.push(aux);
	aux=document.getElementById("direccion").value;
	valor.push(aux);
	aux=document.getElementById("cp").value;
	valor.push(aux);
	aux=document.getElementById("ciudad").value;
	valor.push(aux);
	aux=document.getElementById("telefono").value;
	valor.push(aux);
	aux=document.getElementById("es");
	var op=aux.selectedIndex;
	valor.push(aux.options[op].value);

	for (i=1;i<=3;i++){
		aux=document.getElementById("rdEscuela"+i).checked;
		if(aux){
		valor.push("rdEscuela"+i);
		}
		else{
			valor.push("rdEscuela")
		}
	}

	for (i=1;i<=3;i++){
		aux=document.getElementById("area"+i).checked;
		if(aux){
		valor.push("area"+i);
		}
		else{
			valor.push("area")
		}
	}

	for(i=1;i<=4;i++){
		aux = document.getElementById("id"+i).value;
		valor.push(aux);
	}

	for(j=1;j<=4;j++){
		aux=document.getElementById("areas"+j);
		op=aux.selectedIndex;
		valor.push(aux.options[op].value);
	}
	aux=document.getElementById("mul");
	var op=aux.selectedIndex;
	valor.push(aux.options[op].value);

	aux = document.getElementById("comentarios").value;
	valor.push(aux);

	document.cookie = valor;

});
function rellenar(){
	var elemento=(document.cookie).split(",");
	var aux = document.getElementById("nombre").value=elemento[0];
	aux = document.getElementById("apellido").value=elemento[1];
	aux=document.getElementById("direccion").value=elemento[2];
	aux=document.getElementById("cp").value=elemento[3];
	aux=document.getElementById("ciudad").value=elemento[4];
	aux=document.getElementById("telefono").value=elemento[5];
	aux=document.getElementById("es").value=elemento[6];
	for (i=1;i<=3;i++){
		for(j=7;j<=9;j++){
		if(("rdEscuela"+i)==elemento[j]){
			aux=document.getElementById(elemento[j]).checked=true;
			break;
		}
		else{
			aux=document.getElementById("rdEscuela"+i).checked=false;
		}
		}
	}
	for (z=1;z<=3;z++){
		for(k=10;k<=12;k++){
		if(("area"+z)==elemento[k]){
			aux=document.getElementById("area"+z).checked=true;
			break;
		}
		else{
			aux=document.getElementById("area"+z).checked=false;
		}
		}
	}
		var pos=13;
		for(i=1;i<=4;i++){	
		aux = document.getElementById("id"+i).value=elemento[pos];
		pos=pos+1;
	}	
		for(i=1;i<=4;i++){
		aux=document.getElementById("areas"+i).value=elemento[pos];
		pos=pos+1;
	}
		aux=document.getElementById("mul").value=elemento[pos];
		aux=document.getElementById("comentarios").value=elemento[pos+1];
};