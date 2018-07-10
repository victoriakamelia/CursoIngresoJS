function mostrar()
{ var precio;
  var precioDescuento;
  var descuento;
  var descuentoDinero;
  var iva;
  var precioFinal;
  precio=prompt("Ingrese el precio:");
  descuento=prompt("Ingrese el descuento:");
  precio=parseInt(precio);
  descuento=parseInt(descuento);

  descuentoDinero=(precio*descuento)/100;

  precioDescuento=precio-descuentoDinero;

  iva=(precioDescuento*21)/100;

  alert("El descuento en dinero es: "+descuentoDinero+", el precio con el descuento es: "+precioDescuento+" y el iva es:"+iva);
  precioFinal=precio-descuento+iva;
  document.getElementById("elPrecioFinal").value=precioFinal;
  
}
