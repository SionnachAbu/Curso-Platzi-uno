/****
 * Arreglos en Javascript
 */
/*var nombre=['Pablo','Carlos','Ana','Teresa'];
var vegetales = new Array('Tomate','Lechuga','Zanahoria');

console.log (nombre[2]);
console.log (vegetales[1]);

nombre[1]="Joe";
console.log (nombre[1]);

console.log (nombre.length);*/


/*****
 * Operacion con Arreglos
 */
/*var frutas =['peras','Manzana','uva','sandia'];

console.log (frutas);*/

/*for (i=0;i<=frutas.length-1;i++){
    console.log (frutas[i]);
}*/
/*frutas.forEach (function(elementoa,indices,array){
    console.log (elementoa,indices);
});*/

/*frutas.push('naranja');
console.log (frutas);
frutas.unshift ('fresa');
console.log (frutas);
frutas.pop();
console.log (frutas);
frutas.shift ();
console.log (frutas);
var pos = frutas.indexOf('uva');
console.log (pos);
frutas.splice (1,2);
console.log (frutas);*/

/*****
 * areeglos con elemento de dif tipos
 */

/*var persona=['Pablo','Vazquez',34,'099039393',1.90];
console.log (persona);*/



/*****
 * Objetos literales
 */

/*
var persona = {
    nombre: 'Pablo',
    apelldo: 'Vasquez',
    gustos:['futbol','peliculas','ingles'],
    trabajo: 'instructor',
    esCasado: true
};
console.log (persona.apelldo,persona.nombre);
console.log (persona['trabajo']);
persona.esCasado = false;
console.log (persona.esCasado);
*/

/******
 * objetos con sintaxis objet
 */

/*
var persona2= new Object()
persona2.nombre='Ana';
persona2.apellido ='Pinedo';
persona2['trabajo'] = 'Webdeveloper';

console.log (persona2);
*/
//Objetos y metodos

var persona = {
    //Propiedades
    nombre: 'Pablo',
    apelldo: 'Vasquez',
    gustos:['futbol','peliculas','ingles'],
    trabajo: 'instructor',
    esCasado: true,
    yearNacimiento: 1985,
    //Metodos
    calcularEdad: function(){
        this.edad= 2022 - this.yearNacimiento;        

    }
};

persona.calcularEdad();
console.log(persona);
