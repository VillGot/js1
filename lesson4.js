const object = {} 
let number = Math.round(Math.random() * 1000 )
let rank = 1
let digits = 0
function countDigits(n) {
    for(var i = 0; n > 1; i++) {
       n /= 10;
    }
    digits = i;
 }
countDigits(number);
 for(let j = 1; j <= digits; j++){
    let numeral = Math.floor(number / rank % 10)
    rank = String(rank)
    object[rank] = numeral
    rank = Number(rank)
    rank *= 10
 }
 console.log(number);
 console.log(object);