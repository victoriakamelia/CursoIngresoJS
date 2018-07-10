function mostrar()
{
//tomo la edad  
var edad;
var civil;
document.getElementById("estadoCivil").value=civil;
edad=document.getElementById("edad").value;
if (edad < 18 && civil !="Soltero"){
    alert("Usted es muy pequeño para no estar soltero");
}
	


}//FIN DE LA FUNCIÓN