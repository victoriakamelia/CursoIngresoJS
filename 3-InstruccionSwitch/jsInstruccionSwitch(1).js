function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño)
{
    case "Enero":
    alert("Que empieces bien el año");
    break;
    case "Marzo":
    alert("Buen comienzo de clases.");
    break;
    case "Julio":
    alert("Se vienen las vacaciones.");
    break;
    case "Diciembre":
    alert("Felices fiestas.");
    break;
    default:
    alert("OTRO MES");
    break;


}



}//FIN DE LA FUNCIÓN