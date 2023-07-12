/*variables abajo
Leecion de definicion variables
*/
/*
var primerNombre='Marcelo';
console.log(primerNombre);
var edad=34;
var sueldo=1800.99;
console.log(edad);
var tieneTrabajo=true;
console.log(tienetrabajo);
var puestoDeTrabajo;
console.log(puestoDeTrabajo);

tienetrabajo=null;
console.log(tieneTrabajo);
var cajas;
//Conversion de tipos
var primerNombre, edad,sexo,esSoltero;
primerNombre='Grover';
edad=32;
sexo='M';
esSoltero=false;
console.log("El nomnre es:"+ primerNombre+ "y su edad es:" + edad + " y su estadi es soltero" + esSoltero);
console.log(edad+349);
edad="Veinte";
console.log(edad);*/

/*********
 * Operadores - Matematicos (+,-,* y /)
 */
var edadMia;
var edadPablo,diferenciaEdad,sumaEdades,yearActual,yearMia,yearPablo;
edadMia=34;
edadPablo=45;
yearActual=2019;
diferenciaEdad= edadPablo - edadMia;
sumaEdades=edadMia+edadPablo;
yearMia=yearActual-edadMia;
yearPablo=yearActual-edadPablo
console.log(diferenciaEdad + " " + sumaEdades);
console.log("Año nac.mio " + yearMia + "   Año nac Pablo "+ yearPablo)
/**Operadores logicos

var mayorMia = edadMia == edadPablo;
console.log(mayorMia);

//Operador typeof

console.log(typeof edadMia);
console.log(typeof "WWW");*/



// Operadores Unarios aritmeticos

// ++ Incremento
// -- Decremento

var edadCarmen = 18;
var edadMaria=14;
//++edadCarmen;
console.log(++edadCarmen);
console.log(--edadCarmen);

/*********** 
// Operadoreds de Asignacion

//= 

var a=5;
var b=18;
a= a + b;
a += b; // esto es igual a la linea de arriba
a -=b;
a *= b;
a /=b;
var c;
c = a % b; // devuelveel residuo de una division se llama modulo o resto
a %=b;

*/

//ejerciio

var pesoLuis =72 ;
var alturaLuis =1.72;

var pesoCarlos = 89;
var alturaCarlos = 1.75;

var masaCorporalLuis = pesoLuis / alturaLuis **2;
var masaCorporalCarlos = pesoCarlos / alturaCarlos **2;
console.log(masaCorporalCarlos);
console.log(masaCorporalLuis);
var mayorMasa = masaCorporalCarlos > masaCorporalLuis;
console.log(mayorMasa);


