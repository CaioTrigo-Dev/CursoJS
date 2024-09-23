const header = document.querySelector('.cabecalho');
const calendar = new Date();
const numberoftheday = calendar.getDate();
const day = calendar.getDay();
const month = calendar.getMonth();
const year = calendar.getFullYear();
const hours = calendar.getHours();
const Minutes = calendar.getMinutes();
const resultweekday = getweekday(day);
const resultmonth = getmonth(month);

console.log(month);
header.innerHTML = `${resultweekday}, ${numberoftheday} de ${resultmonth} de ${year} ${hours}:${Minutes}`;

function getmonth(number){
    let month = '';
    switch (number) {
        case 0:
            return month = 'Janeiro';
        case 1:
            return month = 'Fevereiro';
        case 2:
            return month = 'Março';
        case 3:
            return month = 'Abril';
        case 4:
            return month = 'Maio';
        case 5:
            return month = 'Junho';
        case 6:
            return month = 'Julho';
        case 7:
            return month = 'Agosto';
        case 8:
            return month = 'Setembro';
        case 9:
            return month = 'Outubro';
        case 10:
            return month = 'Novembro';
        case 11:
            return month = 'Dezembro';
    default:
        return month = 'Esse mês não existe';
    }
}








function getweekday(number) {
    let weekday = '';
    switch (number) {
        case 0:
            return weekday = 'Domingo';
        case 1:
            return weekday = 'Segunda-Feira';
        case 2:
            return weekday = 'Terça-Feira';
        case 3:
            return weekday = 'Quarta-Feira';
        case 4:
            return weekday = 'Quinta-Feira';
        case 5:
            return weekday = 'Sexta-Feira';
        case 6:
            return weekday = 'Sábado';
        default:
            return weekday = 'Não existe essa semana!';
    }
}

// header.innerHTML = `${resultweekday}, ${numberoftheday} de ${resultmonth} de ${year} ${hours}`;