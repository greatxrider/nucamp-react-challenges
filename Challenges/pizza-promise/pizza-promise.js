// the promise
const pizzaPromise = new Promise(
    (resolve, reject) => {
        setTimeout(() => {
            const pizzaDeliverySuccessfully = true;
            if (pizzaDeliverySuccessfully) {
                const pizza = {
                    size: 'large',
                    toppings: ['pepperoni', 'pineapples']
                };
                resolve(pizza);
            } else {
                const reason = new Error('Sorry, your pizza delivery driver ran out of gas!');
                reject(reason);
            }
        }, 2000);
    }
);

const orderPizza = () => {
    console.log('You order a pizza');
    pizzaPromise
        .then(pizza => console.log(`Your ${pizza.size} pizza has been delivered.`))
        .catch(error => console.log(error.message));
}

orderPizza();

console.log("You start a movie to watch.");
