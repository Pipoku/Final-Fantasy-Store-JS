import item from "../item/item.js"

export default class itemList {
    quantity;

    constructor(){
      this.items = []
    }

    newItem(nam,pri,siz,quan){
      let p = new item(nam,pri,siz)
      
      this.items.push({"item":p,"quantity":quan})
      
      return 1;
    }

    get allItems(){
      return this.items
    }

    get numberOfItems(){
        return this.items.reduce((x,items) => x + items.quantity, 0);    
    }

    get totalPrice(){
        return parseFloat(this.items.reduce((total, { item, quantity }) => {
            return total + item.price * quantity;
          }, 0))
    }

    isItemExists(name) {
        return this.items.some(item => item.item.name === name);
    }

    incrementItemQuantity(name, quantity) {
        const existingItem = this.items.find(item => item.item.name === name);
        existingItem.quantity += quantity;
        console.log(`Quantity of item '${name}' incremented by ${quantity}.`);
    }

    decrementItemQuantity(name,quantity) {

        if(this.items.find(item => item.item.name === name)){

            const existingItem = this.items.find(item => item.item.name === name);
            let flag = existingItem.quantity

            if((flag -= quantity)>=0){
                existingItem.quantity -= quantity
                console.log(`Quantity of item '${name}' incremented by ${quantity}.`);
            }else console.log(`Quantity of item '${name} can't decrement that much`)
        } else alert("Item is not in the cart!!!")

    }

    resetQuantities() {
        this.items.forEach(item => {
          item.quantity = 0;
        });
        console.log("Thanks for you buying!");
    }

    getItemsAsString() {
        const itemStrings = this.items.map(item => {
          return `Name: ${item.item.name}\nPrice: $${item.item.price}\nQuantity: ${item.quantity}\nTotal: ${item.item.price*item.quantity}\n`;
        });
    
        return itemStrings.join("\n");
    }

    sortItemsByName() {
        this.items.sort((a, b) => {
          const nameA = a.item.name.toLowerCase();
          const nameB = b.item.name.toLowerCase();
    
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
    }

    getItemsAsHtml(){
        const bodyTabla = document.getElementById('items')
        bodyTabla.innerHTML = ``;
        bodyTabla.innerHTML += `<tr>
        <td><h3>Name</h3></td>
        <td><h3>Price</h3></td>
        <td><h3>Quantity</h3></td>
     </tr>`;
        this.sortItemsByName()
        this.items.forEach(item => {
            const { name, price } = item.item;
            const quantity = item.quantity;
            bodyTabla.innerHTML += `<tr>
                        <td>${name}</td>
                        <td>$${price}</td>
                        <td>${quantity}</td>
                     </tr>`;
          });
        
          return bodyTabla;
    }
}
