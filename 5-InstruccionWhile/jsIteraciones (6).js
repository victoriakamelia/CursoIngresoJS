function mostrar()
{

	var contador=0;
	var suma=0
	var promedio;
	var numero;
	
	while (contador < 5){
		contador++;
		numero=prompt("Ingrese un nùmero");
		numero=parseInt(numero);
		suma=suma+numero;
		promedio=suma/contador;



	}


document.getElementById('suma').value=suma;
document.getElementById('promedio').value=suma/5;

}//FIN DE LA FUNCIÓN