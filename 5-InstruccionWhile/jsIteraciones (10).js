function mostrar()
{

	var contP=0
	var contN=0
	var acuP=0
	var acuN=0
	var contC=0
	var contNp=0
	var promedioN;
	var posimenosnega;
	var respuesta="si";
	var num;

	while (respuesta != "no")
	{
		num=prompt("Ingrese un número");
		num=parseInt(num);
		if(num < 0)
		{
			acuN=anuN+1;
		} else if(num>0)
		{
			acuP=acuP+1;
		} else if(num>0)
		{
			contP++;
		} else if(num<0)
		{
			contN++;
		} else if(num == 0)
		{
			contC++;
		}else if(num%2 == 0)
		{
			contNp++;
		}
		promedioN=acuN/co0ntN
		
	}


}//FIN DE LA FUNCIÓN