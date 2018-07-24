function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero=0;

	while(respuesta == "si"){
		contador++;
		numero=prompt("Ingrese un número:");
		numero=parseInt(numero);
		acumulador=acumulador+numero;
		respuesta=prompt("¿Desea continuar?");
		
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN