
const priceThings = [];
function countBasketPrice () {
    let result = priceThings.reduce(function(sum, current){
        return sum + current;
    })
    console.log(result);
}