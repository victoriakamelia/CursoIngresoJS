function mostrar()
{
    var planeta;
    var msg;

    planeta=prompt("Ingrese el nombre de un planeta.");
    
     switch(planeta)
     {
         case "mercurio":
         case "venus":
         msg="Acá hace más calor";
         break;

         case "tierra":
         msg="Acá vivimos";
         break;

         case "marte":
         case "jupiter":
         case "saturno":
         case "urano":
         case "neptuno":
         case "pluton":
         msg="Acá hace más frío.";
         break;
         
         default
         msg="El planeta ingresado no existe. Pr favor intente nuevamente";

     }
     document.getElementById("FormIngreso")=msg;



}
