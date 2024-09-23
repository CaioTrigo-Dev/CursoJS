let numb = Number(prompt("Digite um número: "));


function verificador(numb)
{
    if (numb <= 0 ){
        return "Negativo"
        }
    else if (numb > 1) {
        return "positivo"
    }
    else{
        return "NaN"
    }
}
let numbverf = verificador(numb);




    document.body.innerHTML += `Seu Número é ${numb}<br />`;
    document.body.innerHTML += `Sua Raiz Quadrada é ${(numb ** (1/2))} <br />`;
    document.body.innerHTML += `${numb} é inteiro: ${(Number.isInteger(numb))}<br />`;
    document.body.innerHTML += `É NaN: ${Number.isNaN(numb)}<br />`;
    document.body.innerHTML += `Arredondando para cima: ${Math.ceil(numb)}<br />`;
    document.body.innerHTML += `Arredondando para baixo: ${Math.floor(numb)}<br />`;
    document.body.innerHTML += `Com duas casas decimais: ${numb.toFixed(2)}<br />`;
    document.body.innerHTML += `Esse numero é positivo ou negativo: ${numbverf}<br />`;