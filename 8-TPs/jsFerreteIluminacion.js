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
    var precioDescuento;
    var msg;
    var marca;
    
    cantidadLamparitas=document.getElementById("Cantidad").value;
    marca=document.getElementById("Marca").value;
    cantidadLamparitas=parseInt(cantidadLamparitas);
    precio=35;
    msg="El descuento de su compra es: ";
   
    if (cantidadLamparitas >= 6){
        precioDescuento=(cantidadLamparitas*precio)*0.5;
        alert(msg+precioDescuento);
    }

    if (marca=="ArgentinaLuz" && cantidadLamparitas == 5){
        precioDescuento=(cantidadLamparitas*precio)*0.4;
        alert(msg+precioDescuento);
    }else
    { if (marca!="ArgentinaLuz" && cantidadLamparitas == 5)
     {
            precioDescuento=(cantidadLamparitas*precio)*0.3;
            alert(msg+precioDescuento);
     }
    }

    if (cantidadLamparitas==4 && (marca=="FelipeLamparas" || marca=="ArgentinaLuz"))
    {
        precioDescuento=(cantidadLamparitas*precio)*25/100;
        alert(msg+precioDescuento);
    }else
    { if (cantidadLamparitas==4 && (marca!="FelipeLamparas" || marca!="ArgentinaLuz"))
     {
        precioDescuento=(cantidadLamparitas*precio)*20/100;
        alert(msg+precioDescuento);
     }

    }
    
 	
}
