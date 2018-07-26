/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
    var edad;
    var sexo;
    var estadoCivil;
    var sueldo;
    var numLeg;
    var nacionalidad;
    
    edad=parseInt(edad);
    estadoCivil=parseInt(estadoCivil);
    sueldo=parseInt(sueldo);
    numLeg=parseInt(numLeg);
    

    while(edad < "18" || edad > "90")
    {
    edad=prompt("Ingrese su edad (entre 18 y 90 años, inclusive).");
    }
    document.getElementById("Edad").value=edad;
    
    while(sexo != "F" || sexo != "M")
    {
    sexo=prompt("Ingrese su sexo (F para femenino, M para masculino).");
    }
    document.getElementById("Sexo").value=sexo;
    
    
    
    while(estadoCivil != "1" && estadoCivil != "2" && estadoCivil != "3" && estadoCivil != "4" )
    {
    estadoCivil=prompt("Ingrese su estado civil (1-soltero/a, 2-casado/a, 3- divorciado/a, 4- viudo/a");
    }
    document.getElementById("EstadoCivil").value=estadoCivil;
    
    while(sueldo < 8000)
    {
    sueldo=prompt("Sueldo bruto (no menor a $8.000).");
    }
    document.getElementById("Sueldo").value=sueldo;

    while(numLeg < "1000" || numLeg >9999)
    {
    numLeg=prompt("Número de legajo, numérico de 4 cifras, sin ceros a la izquierda");
    }
    document.getElementById("Legajo").value=numLeg;
    
    while(nacionalidad !="A" || nacionalidad !="E" || nacionalidad != "N" )
    {
    nacionalidad=prompt("Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.a");
    }
    document.getElementById("Nacionalidad").value=nacionalidad;


    

   
 
}
