/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;
var cont;
var secreto;
function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 
		//alert(numeroSecreto );
  secreto=Math.floor(Math.random()*(101-1)+1);
  console.log(secreto);
  cont=0;
}

function verificar()
{
  var numero;
  numero=document.getElementById("numero").value;
  cont=cont+1;

  if (numero == secreto){
    document.getElementById("intentos").value=("Usted ha ganado. Y solo le tomo: "+cont+(" intentos"));
  }else if (numero>secreto){
    document.getElementById("intentos").value=("Usted se ha pasado.");

  }else{
    document.getElementById("intentos").value=("A usted le falta");
  }
	
}