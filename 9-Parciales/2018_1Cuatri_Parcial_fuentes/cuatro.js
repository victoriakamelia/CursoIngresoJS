function mostrar()
{
    var numUno;
    var numDos;
    var resultado;

    numUno=prompt("Ingrese un número:");
    numDos=prompt("Ingrese nuevamente un número: ");
    numUno=parseInt(numUno);
    numDos=parseInt(numDos);

    if(numUno == numDos)
    {
        alert(numUno+"+"+numDos);
    }else if(numUno > numDos)
     {
         resueltado=numUno-numDos;
         alert("El resultado de la resta es: "+resultado);
     }else if(numUno < numDos)
      {
          resultado=numUno+numDos;
          alert("El resultado de la suma es de: "+resultado);
      }else( resultado > 10)
       {
           resultado=numUno+numDos;
           alert("La suma es "+resultado+" y superó el 10.");
       }


}
