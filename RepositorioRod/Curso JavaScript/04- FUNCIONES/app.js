/*

function bienvenido (){
    return "hola binevenido aca";
}
var mensaje = bienvenido();
console.log (mensaje);
*/

/*
//paretes de una funcion
//entradas(argumento), codigo, salida(return)

function cuadradoNumero(num){
    var resultado=num*num;
    return resultado;
}
var num=3;
var valor= cuadradoNumero(num);
console.log (valor);
console.log (cuadradoNumero(5));

function convierte(fanen){
    //var celsius=(fanen-32) * 5/9;
    //return celsius;
    return (fanen-32) * 5/9;
    
}

var temperatura1 = convierte(32);
var temperatura2 = convierte(68); 
console.log (temperatura1);
console.log (temperatura2);
*/


/***************
 * cuanto falta para jubilarse 
 * 
 
function faltaJubilacion(anioNacio,nombre){
    var edad = 2022 - anioNacio
    var yearjubilacion= 65- edad;
   console.log ( "A " + nombre + ' le faltan ' + yearjubilacion + ' años para jubilarse');
}
faltaJubilacion (1959,'Pablo');
*/


/****
 * funciones como expresiones
 
*/


/*
var prueba = function(nombre){
    ///console.log ("Prueba");
    return 'Hola ' + nombre;
}
//prueba();
console.log (prueba("Marcelo"));

//argumentos nulos
var a;
a=null;
var valorNulo = function(a){
     return a;
}
console.log (valorNulo(a));
*/

//argumentos por default

var sumar = function(a=5,b=3,c=3)
{
    return a+ b+c;
}
console.log (sumar(33,33,23));


// pantailla de cadenas o template string se engloba entre tildes y la referencia a 
// la variable va con $ adelante y encerrada con llaves

var nombre='Pablo';
console.log (`El nombre es: ${nombre}`);

var a=5, b=10;
console.log ("la suma es: " + (a+b));
//es lo mismo que lo de arriba
console.log (`la suma es: ${a+b}`);


//ejercicio 4

function calculaPorcentaje(nombre,positivas,negativas)
{
    var porcentajePositivo = ((positivas/100)*100);
    var porcentajeNegativo = ((negativas/100)*100);
    var score='';
    if (porcentajePositivo>90) score ='A'
    else if ((porcentajePositivo >=70 ) && (porcentajePositivo<=90) )
        {score = 'B'} 
    else if  ((porcentajePositivo >45 ) && (porcentajePositivo<69) )
    { score = 'C'}
    else
    { 
        score = 'D'
    }  
    return `${nombre} tiene el score ${score}, Positivas= ${porcentajePositivo}%, Negativas=${porcentajeNegativo}%`
}


var resultado =calculaPorcentaje("Pablo",50,50);
console.log (resultado);











