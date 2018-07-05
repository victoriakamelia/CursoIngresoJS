/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var sueldo;
    var resultado;
    var aumento;
    sueldo=document.getElementById("sueldo").value;
    sueldo=parseInt(sueldo);
    resultado=parseInt(resultado);
    resultado=sueldo*0.1;
    aumento=sueldo+resultado;
    document.getElementById("resultado").value=aumento
    
	
	
}
