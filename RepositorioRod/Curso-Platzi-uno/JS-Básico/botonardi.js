const h1 = document.querySelector('h1');
const valor1 = document.querySelector('#valor1');
const valor2 = document.querySelector('#valor2');
const btnCalculo = document.querySelector('#btnCalculo');
const tipoOp = document.querySelector('#tipoOp');
const resultado = document.querySelector('#resultado');

form.addEventListener('submit',queHago);

function queHago(event){
    const algo  = valor1.value + valor2.value; 
    //console.log("Ahi va" + valorfinal);
    event.preventDefault();
    
    resultado.innerText = algo;
}
/*if (tipoOp.value= "+"){
    valorfinal  = Number(valor1.value) + parseInt(valor2.value);  
    resultado.innerText= "Da esto" +valorfinal
} else if (tipoOp.value= "-"){
    resultado.value = Number(valor1.value) - parseInt(valor2.value);
} else if(tipoOp.value= "*"){
    resultado.value = Number(valor1.value) * parseInt(valor2.value);
} else if(tipoOp.value= "/"){
    resultado.value = Number(valor1.value) / parseInt(valor2.value);
} else resultado.value = "Operador Desconocido";*/