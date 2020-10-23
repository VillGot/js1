class Cart {
    _cart = []
  
    constructor (...items) {
      console.log(items)
      console.log(...items)
      this._cart.push(...items)
    }
  
    addItem (item) {
      this._cart.push(item)
      this.render()
    }
  
    calcTotalPrice () {
      return this._cart.reduce((result, curItem) => {
        return result + curItem.price
      }, 0)
    }

    render(){
      let el = document.createElement('div')
      el.innerHTML = this._name
      const cart = document.querySelector('.basket')
      cart.appendChild(el);
    }
}
  
  class Item {
    _name = ''
    _price = 0
    _id = ''
  
    get price () {
      return this._price
    }
  
    set name (n) {
      this._name = n
    }
  
    constructor (name, price, id) {
      this._name = name
      this._price = price
      this._id = id
      this.render()
    }
}
let basket = document.createElement('div')
basket.classList.add('basket')
const body = document.querySelector('body')
body.appendChild(basket)
const CartInstance =  new Cart(new Item('Computer', 1000, 1), new Item('TV', 300, 2))
let totalPrice = CartInstance.calcTotalPrice()
console.log(totalPrice)
CartInstance.addItem(new Item('Apple', 5, 3))
CartInstance.addItem(new Item('1', 532, 4))
CartInstance.addItem(new Item('2', 511, 5))
 
totalPrice = CartInstance.calcTotalPrice()
console.log(totalPrice)



