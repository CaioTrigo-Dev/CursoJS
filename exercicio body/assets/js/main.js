const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosbody = getComputedStyle(document.body);
const background = estilosbody.backgroundColor;

for (let i of ps){
    const allp = i;
    console.log(allp);
    allp.classList.add('paragrafosP');
    allp.style.backgroundColor = background;
    allp.style.color = '#fff';
    allp.style.borderRadius = '8px';
    allp.style.textAlign = 'Center';
}