// Refactor Challenge #1 
if (1 + 1 === 2) {
    console.log('It is true that 1+1 equals 2.');
} else {
    console.log('It is false that 1+1 equals 2.');
}
// Uncomment the below line (line 8) and hit the Run button. You should then see the console log "It is true that 1+1 equals 2." line twice.
console.log(1 + 1 === 2 ? 'It is true that 1+1 equals 2.' : 'It is false that 1+1 equals 2.');


// Refactor Challenge #2 - you're on your own for this one buddy!
if (0) {
    console.log('0 evaluates as true.');
} else {
    console.log('0 evaluates as false.');
}
// Write your revision of the above code using the ternary operator here. Keep the above code - the expected result is that you will see "0 evaluates as false" in the console twice. 
(0) ? console.log('0 evaluates as true.') : console.log('0 evaluates as false.');

// Refactor Challenge #3
const hungry = true;
if (hungry) {
    console.log('Go eat something.');
} else {
    console.log('Keep coding!');
}
// Write your revision of the above code using the ternary operator here. Keep the above code - the expected result is that you will see "Go eat something!" in the console twice. 
(hungry) ? console.log('Go eat something.') : console.log('Keep coding!');
// Refactor Challenge #4! The code you need to refactor is inside the function. For this one, go ahead and replace the contents of this function, rewritten using the ternary operator. You should be able to accomplish this in a single line. 
const isEven = (dice) => {
    return (dice % 2) ? false : true;
}
console.log(isEven(2));
// This is just code to supplement Refactor Challenge #4; you do not need to do anything with it.
const MAX = 6;
const dice = Math.floor(Math.random() * MAX + 1);
console.log(`You need to roll an odd number to win:\n
    You roll the dice... It tumbles and comes to a stop, showing ${dice} ${(dice > 1) ? 'pips' : 'pip'}! -- ${isEven(dice) ? 'Better luck next time!' : 'You win!'}`);