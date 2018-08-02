function mostrar()
{
    var diaSemana;
    diaSemana=prompt("Ingrese un día de la semana:");

    switch(diaSemana)
    {
        case "lunes":
        case "martes":
        case "miercoles":
        case "jueves":
        case "viernes":
        alert("A trabajar");
        break;

        case "sabado":
        case "domingo":
        alert("Buen finde.");
        break;

        default:
        alert("El día ingresado no es correcto");
    }

}
