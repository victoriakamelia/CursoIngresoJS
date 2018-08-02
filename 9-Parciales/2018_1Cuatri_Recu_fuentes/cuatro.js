function mostrar()
{
    var numUno;
    var numDos;
    var division;
    var suma

    numUno=prompt("Ingrese un número:");
    numUno=parseInt(numUno);

    numDos=prompt("Ingrese otra vez un número:");
    numDos=parseInt(numDos);

    if(numUno == numDos)
    {
        alert(numUno+"+"+numDos);
    }else if(numUno>numDos)
    {
        division=numUno/numDos;
        alert("El resultado de la division es de:"+division);

    }else if(numUno<numDos)
    {
        suma=numUno+numDos;
        alert("El resultado de la suma es de:"+suma);
    }else if(numUno<numDos && suma<50);
    {
        alert("El resultado de la suma es de: "+suma+" y además es mayor a 50")
    }

}
