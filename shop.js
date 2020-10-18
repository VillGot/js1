
 const pricesThings = [];

 function countBasketPrice () {
     let result = pricesThings.reduce(function(sum, current){
         return sum + current;
     })
     console.log(result);
 }

 class product {
     'inBasket' = false
     constructor(price){
        this.price = price
     }
     pushInBasket(){
        this['inBasket'] = true
     }
 }

const thing1 = new product(15)
const thing2 = new product(200)
const thing3 = new product(4)
const thing4 = new product(58)

thing1.pushInBasket()
thing2.pushInBasket()

if(thing1['inBasket'] === true){
    pricesThings.push(thing1.price);
}

if(thing2['inBasket'] === true){
    pricesThings.push(thing2.price);
}

if(thing3['inBasket'] === true){
    pricesThings.push(thing3.price);
}

if(thing4['inBasket'] === true){
    pricesThings.push(thing4.price);
}//В будующем это станет методом и все будет в цикле
countBasketPrice()