//se a largura for menor que altura
//o modo sera retrato. fora isso é modo paisagem
function main() {
    const section = document.querySelector('.container');
    const tagimg = document.querySelector('.imagemcristiano');
    const styleimg = window.getComputedStyle(tagimg);
    const widthimg = styleimg.width;
    const heightimg = styleimg.height;
    const p = document.createElement('p');
    const ePaisagem = (largura, altura) => largura > altura;
    section.appendChild(p);
    p.innerHTML = ePaisagem(widthimg, heightimg);

    console.log(ePaisagem());
}
main();