const products = [{ id: 1, name: "Widget", price: 50, quantity: 120 },
{ id: 2, name: "Gadget", price: 30, quantity: 80 },
{ id: 3, name: "Doohickey", price: 100, quantity: 200 },
{ id: 4, name: "Thingamajig", price: 75, quantity: 90 }];


// Updating the price by applying a 10% discount to products with a quantity greater than 100.
const updatedProds = products.map(item => { 
    if(item.quantity > 100){
        return {...item, price: item.price - item.price * 0.1};
     }
    return item;
});


// Creating a new array containing only the products that received the discount (i.e. where the discounted price is less than the original price).
const newProdArray= products.filter(item => item.quantity>100);
console.log(newProdArray)

// Log a message for each discounted product showing the product name and its new price.
updatedProds.forEach(item =>
    console.log(`${item.name} is now priced at ${item.price}`)
);