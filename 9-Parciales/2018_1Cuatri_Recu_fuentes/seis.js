function mostrar()
{
    var nota;
    nota=prompt("Ingrese la nota: ");
    nota=parseInt(nota);

    while(nota<0 || nota>10 || isNaN(nota))
    {
        nota=prompt("La nota ingresada no es correcta, intente nuevamente:");
        nota=parseInt(nota);
    }

    switch(nota)
    {
        case "0":
        case "1":
        case "2":
        case "3":

        alert("La próxima se puede.");
        break;

        case "4":
        case "5":
        case "6":

        alert("Raspando.");
        break;

            case "7":
            case "8":
            case "9":
            case "10": 
        if(nota>7 && nota<11)
        {
            
            alert("Aprobó, muy bien.");
        } else
        {
            alert("Aprobó");
        }
        break;

        
    }

}
