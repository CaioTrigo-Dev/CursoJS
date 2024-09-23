const form = document.querySelector('.form');
const button = document.querySelector('.enviar');
const input = document.querySelector('.input');
const tarefas = document.querySelector('.tarefas');

input.addEventListener('keypress', function(e){
    if(e.charCode == 13){
        if (!input.value) return;
        criartarefas(input.value);
        limpainput();
    }
})


function limpainput(){
    input.value = '';
    input.focus();
}
function buttonapagar(item, item2){
    const lista = item2;
    const apagar = item;
    apagar.addEventListener('click', function(){
        tarefas.removeChild(lista);
        lista.removeChild(apagar);
        salvartarefa();
    })
}

function criartarefas(texto){
    const li = document.createElement('li');
    const apagar = document.createElement('button');
    tarefas.appendChild(li);
    li.innerHTML += texto;
    li.appendChild(apagar);
    apagar.innerHTML = 'apagar';
    buttonapagar(apagar, li);
    salvartarefa();
}

function salvartarefa(){
    const liTarefas = tarefas.querySelectorAll('li');
    listaDeTarefas = [];

    for(let tarefas of liTarefas){
        let tarefasTexto = tarefas.innerText;
        tarefasTexto = tarefasTexto.replace('apagar', '').trim();
        listaDeTarefas.push(tarefasTexto);
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function adicionartarefassalvas(){
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for(let tarefa of listaDeTarefas){
        const tarefassalv = tarefa.replace('apagar', '').trim();
        criartarefas(tarefassalv);
    }
}
adicionartarefassalvas();



button.addEventListener('click', function(){
    if (!input.value) return;
    criartarefas(input.value);
    limpainput();
})








