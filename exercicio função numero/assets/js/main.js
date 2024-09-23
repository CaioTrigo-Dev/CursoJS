// escreva  uma função que recebe 2 numeros e retorne o maiores deles 

function random (min, max){
    let numberone = Math.random() * (max - min) + min;
    let numbertwo = Math.random() * (max - min) + min;
    let resultadoone = Math.floor(numberone);
    let resultadotwo = Math.floor(numbertwo);


    if (resultadoone > resultadotwo){
        return console.log(`${resultadoone}(numeroone) é maior que o ${resultadotwo}!`);
    }
    return console.log(`${resultadotwo}(numerotwo) é maior que o ${resultadoone}!`);
}


function max (min, max){
    return min > max ? min : max;
}

console.log(max(2, 40));


function checknumber(numberone, numbertwo){
}