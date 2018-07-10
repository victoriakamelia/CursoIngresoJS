function mostrar()
{
//tomo la edad  
var edad;
edad=document.getElementById("edad").value;

if (edad > 17)
{
    msg="Usted es adulto.";
} else{
    if(edad < 13) {
    msg="Usted es niño.";
    } else {
        msg="Usted es adolescente."
    }
    
    
}
alert(msg)



}//FIN DE LA FUNCIÓN