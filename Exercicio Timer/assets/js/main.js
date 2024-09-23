const relogio = document.querySelector('.timer');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
const voltar = document.querySelector('.voltar');
relogio.id = 'background-timer';

function getFromSecunds(segundos){
    const timer = new Date(segundos * 1000);
    return timer.toLocaleTimeString('pt-PT', {
        hour12: false,
        timeZone: 'UTC'
    })
}
let segundos = 0;
let timer;

function startrelogio(){
    timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = getFromSecunds(segundos);
    },1000)
}


function stoprelogio(timer){
    clearInterval(timer);
}


function timercolorred(){
    document.getElementById('background-timer').style.color = 'red';
}

function timercolorpadrao(){
    document.getElementById('background-timer').style.color = 'black';
}



iniciar.addEventListener('click', function(evento){
    stoprelogio(timer);
    startrelogio();
})
voltar.addEventListener('click', function(evento){
    startrelogio();
    timercolorpadrao();
})
pausar.addEventListener('click', function(evento){
    stoprelogio(timer);
    timercolorred();
})
zerar.addEventListener('click', function(evento){
    stoprelogio(timer);
    relogio.innerHTML = '00:00:00';
    segundos = 0;
})
