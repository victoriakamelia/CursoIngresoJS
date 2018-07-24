function mostrar()
{
	var respuesta='si';
	var max;
	var min;
	var num;
	var bandera;
	bandera=true;
	
	while(respuesta!='no')
	{
		num=prompt("Ingrese número");
		num=parseInt(num);
		if (bandera){
			bandera=false;
			max=num;
			min=num;
		
		}
		if (num > max){
			max=num;
		}
		if (num < min){
			min=num;
		}
	respuesta=prompt("¿Desea continuar?");
	}
document.getElementById("maximo").value=max;
document.getElementById("minimo").value=min;


}//FIN DE LA FUNCIÓN