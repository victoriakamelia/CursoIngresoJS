function mostrar()
{

var sexo = prompt("ingrese f ó m .");
while(sexo != "f" && sexo != "m"){
    sexo=prompt("Datos ingresados no son correctos.");
}



document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN