function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var random;
	random=Math.floor(Math.random()*(10)+1);
	random=parseInt(random);
	
	if (random >= 9) {
		alert("Excelente");
	}else {
		if (random < 4){
			alert("Vamos, la pròxima se puede.");
		}else {
			alert("Aprobò");
		}

	}

}//FIN DE LA FUNCIÓN