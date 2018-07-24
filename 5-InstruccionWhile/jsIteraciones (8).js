function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero=0;
	var respuesta='si';

	numero=prompt("Ingrese un número positivo o negativo");
	numero=parseInt(numero);
	
	while(respuesta == "si"){
		contador++;
		
		if(numero >= 0){
			positivo+=numero;
		} else {
			negativo*=numero;
		}
		respuesta=prompt(¿Desea continuar?);




	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN