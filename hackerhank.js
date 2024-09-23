vowelsAndConsonants('javascriptloops');
// /*
//  * Complete the vowelsAndConsonants function.     a, e, i, o, and u
//  * Print your output using 'console.log()'.    
//  */
function vowelsAndConsonants(s) {
    const receber = s.length;
    let vocaisencontradas = '';
    let consoantesencontradas = '';
    for (let i = 0; i < receber; i++){
        const consoantesevocais = s[i];
    if (consoantesevocais === 'a'){
        console.log('a');
        vocaisencontradas += consoantesevocais;
    }
    if (consoantesevocais === 'e'){
        console.log('e');
        vocaisencontradas += consoantesevocais;
    }
    if (consoantesevocais === 'i'){
        console.log('i');
        vocaisencontradas += consoantesevocais;
    }
    if (consoantesevocais === 'o'){
        console.log('o');
        vocaisencontradas += consoantesevocais;
    }
    if (consoantesevocais === 'u'){
        console.log('u');
        vocaisencontradas += consoantesevocais;
    }
    else
        consoantesencontradas += consoantesevocais;   
    }
    tirarvocais('javascriptloops');
}


function tirarvocais(text){
    const texto = text.length;
    const textocomvocal = text;
    let textosemvocal = '';
    for(let i = 0; i < texto; i++){
        const textoseparado = text[i];
        if (textoseparado === 'a'){
            textosemvocal += textocomvocal.replace("a", '');
        }
        if (textoseparado === 'e'){
            textosemvocal += textocomvocal.replace("e", '');
        }
        if (textoseparado === 'i'){
            textosemvocal += textocomvocal.replace("i", '');
        }
        if (textoseparado === 'o'){
            textosemvocal += textocomvocal.replace("o", '');
        }
        if (textoseparado === 'u'){
            textosemvocal += textocomvocal.replace("u", '');
        }
    }
    console.log(textosemvocal);
}

