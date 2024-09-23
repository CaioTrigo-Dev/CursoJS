function criarCalculadora(){
    return{
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        
        inicia(){
            this.cliquebotoes();
            this.pressionarEnter();
        },

        pressionarEnter(){
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13){
                    this.realizarconta();
                }
            })
        },

        realizarconta(){
            let conta = this.display.value;

            try {
                conta = eval(conta);
                if(!conta){
                    alert('Conta Inválida!');
                    return;
                }
                this.display.value = String(conta);
            }catch(e){
                alert('Conta Inválida');
            }
        },


        clearDisplay(){
            this.display.value = '';
        },

        apagarum(){
            this.display.value = this.display.value.slice(0, -1);
        },
        
        cliquebotoes(){
            document.addEventListener('click', e => {
                const el = e.target;  

                if(el.classList.contains('btn-num')){ 
                    this.btnParaDisplay(el.innerText);
                }
                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }
                if(el.classList.contains('btn-del')){
                    this.apagarum();
                }
                if(el.classList.contains('btn-eq')){
                    this.realizarconta();
                }
            }); 
        },

        btnParaDisplay(valor){
            this.display.value += valor;
        },
    };
}

const calculadora = criarCalculadora();
calculadora.inicia();
