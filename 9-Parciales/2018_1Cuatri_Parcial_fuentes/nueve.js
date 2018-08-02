function mostrar()
{
    var marca;
    var peso;
    var temperatura;


    marca=prompt("Ingrese la marca del producto:");
    
    peso=prompt("Ingrese el peso del producto:");
    peso=parseInt(peso);
    
    while(peso <= 0 || peso >= 1000 || isNaN(peso))
    {
         peso=prompt("Los datos ingresados no son correctos.Ingrese el peso del producto (entre 1 y 1000):");
         peso=parseInt(peso);
    }

   // temperatura=

}
