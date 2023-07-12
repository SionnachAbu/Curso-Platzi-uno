/***** Examinando el dom */


//console.dir(document);

//console.log(document.title);
/*document.title='Prueba';
console.log(document.title);
console.log(document.head);
console.log(document.body);
//console.log(document.all);
console.log(document.all[10]);
console.log(document.forms[0]);
console.log(document.images);
console.log(document.links);
*/


//getElementById()
//console.log(document.getElementById('header-title'));
/*var headerTitle=document.getElementById('header-title');
var header=document.getElementById('main-header');
//console.log (header);
headerTitle.textContent = 'Hola mundo';
headerTitle.innerText = 'Hola mundo';
headerTitle.innerHTML='<h3>Prueba</h3>';*/

//getElementsByClassName

/*var items= document.getElementsByClassName('list-group-item');
console.log(items[3]);
items[0].textContent='Prueba';*/

//getElementsByTagName

/*var items = document.getElementsByTagName('li');
items[2].textContent='Prueba 2';*/


//querySelector
/*var header= document.querySelector('main-header');


var input = document.querySelector('input');
input.value='Hota slsls';

var submit=document.querySelector('input[type="submit"]');
submit.value ="Mongo";


var item=document.querySelector('.list-group-item');*/


//querySelectorAll

/*var items =document.querySelectorAll('.list-group-item');


var titulos = document.querySelectorAll('.title');
console.log (titulos);
titulos[0].textContent="Pololo";

var impar= document.querySelectorAll('li:nth-child(odd)');*/

//ParentNode

/*var itemList= document.querySelector('#items');
console.log (itemList.parentNode);
var main = itemList.parentNode;
console.log(main.parentNode.parentNode);*/

//parentElemnt

/*var itemList= document.querySelector('#items');
console.log (itemList.parentElement);
var main = itemList.parentElement;
console.log(main.parentElement.parentElement);*/

//childNotes
//console.log (itemList.childNodes);


//children
//console.log (itemList.children);
//fistChild,firstElementChild
//console.log (itemList.firstElementChild);
//itemList.firstElementChild.textContent = 'Pololo'
//lastChild.lastElementChild
//console.log (itemList.lastElementChild);

//previusSibling
//console.log (itemList.previousSibling);

//previusElementSibling
//console.log (itemList.previousElementSibling);
//nextSibling

//nextElementSibling
//console.log (itemList.nextElementSibling);


//createElement
//tagName

/*var nuevoDiv = document.createElement('div');
console.log (nuevoDiv);
nuevoDiv.className ="hola";
nuevoDiv.id ="div-hola";
nuevoDiv.setAttribute('title','Quebolonqui');
console.log (nuevoDiv);


//creatTextNode

var nuevoNodotext = document.createTextNode('Hola Mundo');
nuevoDiv.appendChild(nuevoNodotext);
console.log (nuevoDiv);

var nuevoMongo = document.createTextNode('  Alalal');
nuevoDiv.appendChild(nuevoMongo);

var contenedor = document.querySelector('.container');
console.log (contenedor);
var h1 = document.querySelector('h1');
console.log (h1);

contenedor.insertBefore(nuevoDiv,h1);*/

//Agregar eventos

//document.getElementById('boton').addEventListener('click',function(){
//    console.log ('click 2');
//});
// document.getElementById('boton').addEventListener('click',hacerClick);


// function hacerClick(){
//      //   console.log("Ud hizo cklick");
//      document.getElementById('header-title').textContent='Texto Pedorro';
// }

/// Agregar un elemnto a la lista
var form= document.getElementById('formAgregar');
var lista= document.getElementById('items');

form.addEventListener( 'submit',agregarItem);

function agregarItem(e){
    e.preventDefault();
    //var newItem= document.getElementById('item').value
    var newItem= document.getElementById('item').value;
    console.log(newItem);
    
    /*var li=document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(newItem));

    console.log(li);*/
}

