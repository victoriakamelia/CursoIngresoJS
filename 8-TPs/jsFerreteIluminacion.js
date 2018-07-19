/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var cantidadLamparitas;
    var precio;
    var descuento;
    var precioConDescuento;
    var marca;
    
    cantidadLamparitas=document.getElementById("Cantidad").value;
    marca=document.getElementById("Marca").value;
    cantidadLamparitas=parseInt(cantidadLamparitas);
    precio=35;
   
   //aaaaaaaaaaaaaaaaa//
    if (cantidadLamparitas >= 6)
    {
        descuento=(cantidadLamparitas*precio)*50/100;
        precioConDescuento=(cantidadLamparitas*precio)-descuento;
        document.getElementById("precioDescuento").value="Total a pagar con descuento: "+precioConDescuento;
        
        //bbbbbbbbbbbbbbbbb//
     }else if (marca=="ArgentinaLuz" && cantidadLamparitas == 5)
     {
        descuento=(cantidadLamparitas*precio)*40/100;
        precioConDescuento=(cantidadLamparitas*precio)-descuento;
        document.getElementById("precioDescuento").value="Total a pagar con descuento: "+precioConDescuento;
        
     }else if (marca !="ArgentinaLuz" && cantidadLamparitas == 5)
    {
        descuento=(cantidadLamparitas*precio)*30/100;
        precioConDescuento=(cantidadLamparitas*precio)-descuento;
        document.getElementById("precioDescuento").value="Total a pagar con descuento: "+precioConDescuento;
        
            //cccccccccccccccccccccc//
     }else if (cantidadLamparitas==4 && (marca=="FelipeLamparas" || marca=="ArgentinaLuz"))
    {
        descuento=(cantidadLamparitas*precio)*25/100;
        precioConDescuento=(cantidadLamparitas*precio)-descuento;
        document.getElementById("precioDescuento").value="Total a pagar con descuento: "+precioConDescuento;
        
     }else if (cantidadLamparitas==4 && (marca!="FelipeLamparas" || marca!="ArgentinaLuz"))
    {
        descuento=(cantidadLamparitas*precio)*20/100;
        precioConDescuento=(cantidadLamparitas*precio)-descuento;
        document.getElementById("precioDescuento").value="Total a pagar con descuento: "+precioConDescuento;
        
        //dddddddd//
     }else if (cantidadLamparitas == 3 && marca == "ArgentinaLuz")
    
    { descuento=(cantidadLamparitas*precio)*15/100;
        precioConDescuento=(cantidadLamparitas*precio)-descuento;
        document.getElementById("precioDescuento").value="Total a pagar con descuento: "+precioConDescuento;
        
     }else if (cantidadLamparitas == 3 && marca == "FelipeLamparas")
    
     { descuento=(cantidadLamparitas*precio)*10/100;
        precioConDescuento=(cantidadLamparitas*precio)-descuento;
        document.getElementById("precioDescuento").value="Total a pagar con descuento: "+precioConDescuento;
        
     }else if (cantidadLamparitas == 3 && (marca != "ArgentinaLuz" || marca != "FelipeLamparas" ))
    
     {
        descuento=(cantidadLamparitas*precio)*5/100;
        precioConDescuento=(cantidadLamparitas*precio)-descuento;
        document.getElementById("precioDescuento").value="Total a pagar con descuento: "+precioConDescuento;
        
     }
    
   
}

