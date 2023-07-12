/*************** 
 * Sentecnia if else
*/
/****
var nombre='Pablo';
var edad=10;
var estadoCivil='soltero';
if (estadoCivil === 'casado'){
    //si es verdadera
    console.log (nombre + " esta casado"  );
} else {
    console.log (nombre + " esta soltero");
}

if (edad<12) {console.log ("es un niño")}
else if ((edad >9 ) && (edad<11) )
    {console.log ("es mayor")} 
else { console.log ("es algo")}  */   

/*************
 * Sentencia for
 

var nombre= "Pablo";
var edad=11 ;

edad >= 18 ? console.log (nombre + " es mayor de edad" ): console.log (nombre + " no es mayor de edad");


for (var i=0; i<=19; i+=2)
{console.log ("i=" + i)};
*/

/*******
 * Sentencia while
 * 
 

var i=10;
while (i>=1) {{
console.log (i);
i--;

}};
*/

/****
 * do while
 

var i=12;
do {
    console.log (i);
    i++;
}while (i<=10);
*/

/******
 * valores verdaderos y falsos
 * 
 */
//valores falso ;undefined, null,0,''
//valores verdaderos: NOT valores falses
/*
var edad;
edad='10';
if (edad){
    console.log ("variable esta definida")

}else{
    console.log ("variable no esta definida")
}

if (edad===10){
    console.log ("variable con cohersion")
}
else{
    console.log ("variable sin cohersion")
}
*/

var promedioPablo = (14+19+16)/3;
var promedioMaria = (12+16+10)/3;
console.log("Promediro de Maria es " + promedioMaria )
console.log("Promediro de Pablo es " + promedioPablo )

if (promedioMaria>promedioPablo ) {
    console.log("el promediro de Maria es " + promedioMaria + " y es el mayor")
}
else {
    console.log("el promediro de Pablo es " + promedioPablo + " y es el mayor")
} 
if (promedioMaria>=13 ) {
    console.log(" Maria esta aprobada " )
}
else {
    console.log(" Maria esta reprobada " )
}
if (promedioPablo>=13 ) {
    console.log(" Pablo esta aprobada " )
}
else{
    console.log(" Pablo esta reprobado " )
}
