
function main (){
    const form = document.querySelector('.form');
    const listContainer = document.querySelector('.listContainer');

    const pessoas = [];
    function getFormData (event){
        // const form = document.querySelector('.form');
        event.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        })
        listContainer.innerHTML += `<ul><li>${pessoas[0].nome}</li></ul>`
        listContainer.innerHTML += `<ul><li>${pessoas[0].sobrenome}</li></ul>`
        listContainer.innerHTML += `<ul><li>${pessoas[0].peso}</li></ul>`
        listContainer.innerHTML += `<ul><li>${pessoas[0].altura}</li></ul>`
    }
    form.addEventListener("submit", getFormData);
}

main();
