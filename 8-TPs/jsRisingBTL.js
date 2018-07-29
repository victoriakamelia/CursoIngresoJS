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
 var legajo;
 var nacionalidad;

 edad=prompt("Ingrese su edad.");
 edad=parseInt(edad);
  while(edad < 18 || edad > 90 )
  {
      edad=prompt("El número ingresado no es correcto, por favor, ingrese un número mayor 18 y menor a 90.");
      break;
  }

  sexo=prompt("Ingrese su sexo.");

  while(sexo != "F" || sexo != "M")
  {
      sexo=prompt("La letra ingresada no es correcta, indique F para femenino o M para masculino");
      break;
  }

  estadoCivil=prompt("Indique su estado civil: 1, para soltero/a, 2 para casado/a, 3 para divorciado/a, 4 para viudo/a.");
  estadoCivil=parseInt(estadoCivil);
  while(estadoCivil != "1" || estadoCivil != "2" || estadoCivil != "3" || estadoCivil != "4")
  {
    estadoCivil=prompt("Los datos ingresados no son correctos. Por favor, indique su estado civil: 1, para soltero/a, 2 para casado/a, 3 para divorciado/a, 4 para viudo/a.");
    break;
  }
 
  sueldo=prompt("Indique su sueldo bruto, no menor a $8.000");
  sueldo=parseInt(sueldo);
  while(sueldo < "8000")
  {
      sueldo=prompt("El valor ingresado no es correcto, por favor indique su sueldo bruto, no menor a $8.000");
      break;
  }

  legajo=prompt("Ingrese el número de su legajo (numérico de cuatro cifras, sin ceros a la izquierda).")
  legajo=parseInt(legajo);
  while(legajo < "1000" || legajo > "9999")
  {
    legajo=prompt("Los datos ingresados no son válidos, por favor ingrese el número de su legajo (numérico de cuatro cifras, sin ceros a la izquierda).")
    break;
  }

  nacionalidad=prompt("Ingrese su nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.");
  while(nacionalidad != "A" || nacionalidad != "E" || nacionalidad != "N")
  {
    nacionalidad=prompt("Los datos ingresados no son correctos. Por favor ingrese su nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.");
    break;
  }

  document.getElementById("Edad").value=edad;
  document.getElementById("Sexo").value=sexo;
  document.getElementById("EstadoCivil").value=estadoCivil;
  document.getElementById("Sueldo").value=sueldo;
  document.getElementById("Legajo").value=legajo;
  document.getElementById("Nacionalidad").value=nacionalidad;

}