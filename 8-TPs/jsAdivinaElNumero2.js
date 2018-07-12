/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;
var secreto;
var numero;
var cont;
function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	secreto=Math.floor(Math.random()*(101-1)+1);
	console.log(secreto);
	cont=0;
	

}

function verificar()
{
	var numero;
	numero=document.getElementById("numero").value;
	cont=cont+1;
	if (secreto == numero && cont==1){
		document.getElementById("intentos").value="Usted es un psíquico.";

	
}else if (secreto == numero && cont==2){
	document.getElementById("intentos").value="Excelente percepción.";
}else if (secreto == numero && cont==3){
	document.getElementById("intentos").value="Esto es suerte.";
}else if (secreto == numero && cont==4){
	document.getElementById("intentos").value="Excelente técnica.";
}else if (secreto == numero && cont==5){
	document.getElementById("intentos").value="Usted está en la media";
}else if (secreto== numero && cont >= 6){
	document.getElementById("intentos").value="Afortunado en el amor";
}

}