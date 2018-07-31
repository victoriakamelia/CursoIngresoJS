function mostrar()
{
    var cont=1;
    var nombre;
    var sexo;
    var edad;
    var contF=0;
    var contM=0;
    var contMayor=0;
    var contMenor=0;
    var contHmay=0;
    var edadMin=101;
    var edadMax=0;
    var acumF=0;
    var acumM=0;
    var acumTotal=0;
    var promedioF;
    var promedioM;
    var promedioT;

   while(cont <= 4)
   {

    nombre=prompt("Ingrese su nombre:");

    sexo=prompt("Ingrese su sexo: F, para femenino, M para masculino.");
    sexo=sexo.toUpperCase();

    while(sexo != "F" && sexo != "M")
    {
        sexo=prompt("Ingrese su sexo: F, para femenino, M para masculino.");

       
    }

    edad=prompt("Ingrese su edad:");
    edad=parseInt(edad);
    while(edad < 0 && edad > 100 && isNaN(edad))
    {
        edad=prompt("La información ingresada no es válida.Ingrese su edad:");
        
    }

    switch (sexo)
    {
        case "F":
        contF++;
        acumF=acumF+edad;
        break;
        case "M":
        contM++;
        acumM=acumF+edad;
        break;
    }
    

if(edad >= 18)
 {
     contMayor++;

 }else if(edad < 18)
  {
      contMenor++;
  }

if(sexo == "M" && edad >= 18)
   {
     contHmay++;
   }

if(edad < edadMin)
{
    edadMin=edad;

}else if(edad > edadMax)
{
    edadMax=edad;
}



   cont++;
}

promedioF=acumF/contF;
promedioM=acumM/contM;
promedioT=(acumF+acumM)/(contM+contF);

   document.write(
   "La cantidad de mujeres es "+contF+"<br>"+
   "La cantidad de hombres es "+contM+"<br>"+
   "La cantidad de mayores de edad es "+contMayor+"<br>"+
   "La cantidad de menores de edad es "+contMenor+"<br>"+
   "La cantidad de hombres mayores de edad es "+contHmay+"<br>"+
   "La edad mas baja es "+edadMin+"<br>"+
   "La edad mas alta es "+edadMax+"<br>"+
   "El promedio de la edad de mujeres es "+promedioF+"<br>"+
   "El promedio de la edad de hombres es "+promedioM+"<br>"+
   "El promedio de la edad de todos es "+promedioT);
}



