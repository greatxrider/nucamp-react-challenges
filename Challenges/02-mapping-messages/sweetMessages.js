const messages = [
    'how are you doing',
    'what are you up to',
    'would you like to get a bite later'
];

// const sweetMessage = `${messages[0]}, sweetie?`;

const sweetMessages = [];

for (let i = 0; i < messages.length; i++) {
    const newMessage = `${messages[i]}, sweetie?`
    sweetMessages.push(newMessage);
}

console.log(sweetMessages);