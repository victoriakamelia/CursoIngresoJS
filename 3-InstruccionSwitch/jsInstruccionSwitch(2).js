function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño)
{
    
    case "Marzo":
    case "Abril":
    case "Mayo":
    case "Junio":
    alert("Falta poco para el invierno.");
    break;
    case "Julio":
    case "Agosto":
    alert("Abrigate que hace frío.");
    break;
    default:
    alert("Ya pasó el invierno, ahora calor");
 
 
 
    
    

}


}//FIN DE LA FUNCIÓN