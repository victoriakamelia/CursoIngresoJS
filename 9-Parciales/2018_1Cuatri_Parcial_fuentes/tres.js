function mostrar()
{
    var precio;
    var descuento;
    var precioDescuento;
    var precioFinal;
    

    precio=prompt("Ingrese el precio: ");
    descuento=prompt("Ingrese el descuento a aplicar:");
    precio=parseInt(precio);
    descuento=parseInt(descuento);

    precioDescuento=(descuento*precio)/100;
    precioFinal=precio-precioDescuento;
    alert("Precio final con descuento: "+precioFinal);
}
