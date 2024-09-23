const hora = new Date('2024-09-14');
const diadasemana = hora.getDay();
let nomedasemana = '';


switch (diadasemana){
case 0:
    nomedasemana = 'Domingo';
    break;
case 1:
    nomedasemana = 'Segunda';
    break;
case 2:
    nomedasemana = 'Terça';
    break;
case 3:
    nomedasemana = 'Quarta';
    break;
case 4:
    nomedasemana = 'Quinta';
    break;
case 5:
    nomedasemana = 'Sexta';
    break;
case 6:
    nomedasemana = 'Sábado';
    break;
default:
    nomedasemana = '';
}
console.log(nomedasemana);