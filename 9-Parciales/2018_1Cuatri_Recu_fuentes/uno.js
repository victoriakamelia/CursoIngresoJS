
function mostrar()
{
    var altura;
    var base;
    var superficie;
    var perimetro;
    altura=prompt("Ingrese la altura del triàngulo");
    base=prompt("ingrese la base del triàngulo");
    altura=parseInt(altura);
    base=parseInt(base);
    superficie=(base*altura)/2;
    perimetro=base*3;
    alert("La superficie es "+superficie+" y su perìmetro es "+perimetro);


}
