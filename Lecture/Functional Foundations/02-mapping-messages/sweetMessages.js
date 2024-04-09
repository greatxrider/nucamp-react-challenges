const messages = [
    'how are you doing',
    'what are you up to',
    'would you like to get a bite later'
];

// const sweetMessages = [
//     'how are you doing, sweetie?',
//     'what are you up to, sweetie?',
//     'would you like to get a bite later, sweetie?',
// ];

//Imperative

const sweetMessages1 = [];

for (let i = 0; i < messages.length; i++) {
    const newMessage = `${messages[i]}, sweetie?`;
    sweetMessages1.push(newMessage);
}

console.log('Imperative', sweetMessages1);

//Declarative
const sweetMessages2 = messages.map((message) => `${message}, sweetie?`);

console.log('Declarative', sweetMessages2);

//equivalent code for the .map method

const array = ['this', 'is', 'pseudo-code'];

const map = (cb) => {
    const newArr = [];

    for (let i = 0; i < array.length; i++) {
        newArr[i] = cb(array[i], i, array);
    }

    return newArr;
};

const newArray = map((element) => element.toUpperCase());

console.log(newArray);
