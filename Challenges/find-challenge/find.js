const drinkOrders = [
    { id: 0, customerName: 'Zachary', drinkName: 'Dirty Martini' },
    { id: 1, customerName: 'Juan', drinkName: 'Zombie' },
    { id: 2, customerName: 'Kayla', drinkName: 'Mojito' },
    { id: 3, customerName: 'Zachary', drinkName: 'Mojito' }
]

// All challenges will use the drinkOrders array.

// Challenge 1 
// Use the find() method to retrieve the first object with the customerName of 'Juan' and console.log() it.
console.log(drinkOrders.find((order) => order.customerName === 'Juan'));


// Challenge 2  
// Use the find() method to retrieve the first object with the drinkName of 'Mojito' and console.log() it.
// Write your code below this line.
console.log(drinkOrders.find((order) => order.drinkName === 'Mojito'));


// Challenge 3 
// Use the find() method to retrieve the object with the id of 3 from the drinkOrders array, then console.log only the name of the customer who ordered it, rather than the entire object. Hint: Use find() to get the object, then dot notation to access the id.
// Write your code below this line.
console.log(drinkOrders.find((order) => order.id === 3));


// Bonus Challenge
// Use the filter() method to create a new array containing only the objects with the customerName of 'Zachary'. Then, use the find() method on this new array to retrieve the id of the object with the drinkName of 'Mojito', and console.log() that id.
// Write your code below this line.
const CustomerNameZachary = drinkOrders.filter((drinkOrder) => drinkOrder.customerName === 'Zachary');
const ObjectWithMojito = CustomerNameZachary.find((zachary) => zachary.drinkName === 'Mojito');
console.log(ObjectWithMojito.id);
