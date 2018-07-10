function mostrar()
{
//tomo la edad  
var edad;
var civil;
civil=document.getElementById("estadoCivil").value;
edad=document.getElementById("edad").value;
if (edad > 17 && civil == "Soltero"){
    alert("Usted es mayor de edad y es soltero.");
}

	


}//FIN DE LA FUNCIÓN