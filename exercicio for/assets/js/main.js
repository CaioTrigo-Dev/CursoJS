const elementos = [
//    0            1
    {tag: 'h1', texto: 'Formulário', clas: 'cabecalho'}, 
    {tag: 'input', texto: '', clas: 'entrada'}, 
    {tag: 'button', texto: 'submit', clas: 'button-entrada'}, 
    {tag: 'footer', texto: 'contato - +351 912 618 854', clas: 'rodape'} 
]

const container = document.querySelector('.container');
const div = document.createElement('div');
div.classList.add('containerdiv')
div.style.display = 'Flex-box';
div.style.justifyContent = 'center';


for(let i = 0; i < elementos.length; i++){
    const { tag, texto, clas } = elementos[i];
    const Criatag = document.createElement(tag);
    Criatag.innerHTML = texto;
    Criatag.classList.add(clas);
    div.appendChild(Criatag);
}
container.appendChild(div);