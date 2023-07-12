const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(input.value)

console.log({
    h1,
    p,
    parrafito,
    pid,
    input
});


h1.setAttribute('class','Salida de hoy');
console.log(h1.getAttribute('class'));
console.log(h1.classList.remove('de'));
console.log(h1.classList.contains('Salida'));
const img = document.createElement('img');
img.setAttribute('src','https://www.infobae.com/new-resizer/VTmmgcMqmA_kdY_o3eGLruU-pro=/992x661/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/4JTLBDUDMZFVJOTRTNWD2DSQMM.jpg');
console.log('img');
pid.innerHTML= "";
pid.replaceWith(img);




