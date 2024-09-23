function main() {
    const form = document.querySelector('.form');
    
    
    
    
    function getFormData(event) {
        event.preventDefault();
        const inputpeso = document.querySelector('#peso');
        const inputaltura = document.querySelector('#altura');
        const peso = Number(inputpeso.value);
        const altura = Number(inputaltura.value / 100);
        const imc = peso / (altura * altura);
        

        


        function mensagemCerta (msg){
            const resultado = document.querySelector('.resultado');
            resultado.innerHTML = `<p class= 'ResultadoCerto'>${msg}</p>`;
        }



        
        function mensagemErrada(msg){
            const resultado = document.querySelector('.resultado');
            resultado.innerHTML = `<p class= 'Resultadonegativo'>${msg}</p>`;
        }
        
        




        calculadora(imc);
        function calculadora(imc) {
            if (peso <= 1 || altura <= 1){
                return mensagemErrada(`Não foi possivel calcular`);
            }
            else if (imc < 18.4) {
                return mensagemCerta(`Seu IMC é ${imc.toFixed(2)} (abaixo do Peso)`);
            }
            else if (imc >= 18.5 && imc <= 24.9) {
                return mensagemCerta(`Seu IMC é ${imc.toFixed(2)} (Peso normal)`);
            }
            else if (imc >= 25 && imc <= 29.9) {
                return mensagemCerta(`Seu IMC é ${imc.toFixed(2)} (Sobrepeso)`);
            }
            else if (imc >= 30 && imc <= 34.9) {
                return mensagemCerta(`Seu IMC é ${imc.toFixed(2)} (Obesidade grau I)`);
            }
            else if (imc >= 35 && imc <= 39.9) {
                return mensagemCerta(`Seu IMC é ${imc.toFixed(2)} (Obesidade grau II)`);
            }
            else if (imc >= 40) {
                return mensagemCerta(`Seu IMC é ${imc.toFixed(2)} (Obesidade grau III)`);
            }
            else
                return mensagemErrada('Apenas Números!')
        }
    }


    form.addEventListener("submit", getFormData);
}
