
function mostrar()
{
    var ancho;
    var largo;
    var perimetro;
    var ingreso;
    var ingresoDos;

    ingreso=prompt("Ingrese el ancho");
    ingresoDos=prompt("Ingrese el largo");
    ingreso=parseInt(ingreso);
    ingresoDos=parseInt(ingresoDos);

    ancho=ingreso;
    largo=ingresoDos;
    perimetro=(ancho*2)+(largo*2);

    alert("El perímetro del rectángulo es: "+perimetro);



}
