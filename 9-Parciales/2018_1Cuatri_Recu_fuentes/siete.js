function mostrar()
{
    var nota;
    var edad;
    var sexo;
    var cont=0;
    var acumNota=0;
    var promedioNota;


    while(cont<5)
    {
    nota=prompt("Ingrese la nota:");
    nota=parseInt(nota);

    while(nota<0 || nota>10)
    {
        nota=prompt("Los datos ingresados no son correctos, intente nuevamente:");
        nota=parseInt(nota);
    }

    edad=prompt("Ingrese su edad:");
    edad=parseInt(edad);

    sexo=prompt("Ingrese su sexo:");

    while(sexo != "f" && sexo!= "m")
    {
        sexo=prompt("Ingrese su sexo (f para femenino, m para masculino):");
    }

    cont++;
    }

    acumNota=acumNota+nota;
    promedioNota=acumNota/cont;







    document.write("El promedio de notas es:"+promedioNota);
    



    



}
