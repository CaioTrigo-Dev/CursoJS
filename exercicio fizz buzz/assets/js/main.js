
function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}




function checknumb(numb) {
    if (typeof numb !== 'string') {
        const div3 = numb % 3;
        const div5 = numb % 5;
        if (div3 === 0 && div5 === 0) {
            return `${numb} FizzBuzz`;
        }
        else if (div5 === 0) {
            return `${numb} Buzz`;
        }
        else if (div3 === 0) {
            return `${numb} Fizz`;
        } else
            return `${numb}`;
    }
    else
        return `${numb} não é número!`;

}
let numb = getRandomInt(0, 100);
let letra = 'caio';
console.log(checknumb(numb));
// console.log(typeof(letra));
// console.log(typeof(numb));