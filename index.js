const readline = require('readline-sync');
console.log('Welcome to the calculator!');
var Output

var Numbers = []

console.log('Please enter the operator: ');
const Operator = readline.prompt();

console.log('How many numbers do you want to '+Operator+'?')
const Size = parseInt(readline.prompt())

for (let i = 0; i < Size; i++) {
    console.log('Please enter number '+(i+1));
    Numbers[i] = parseFloat(readline.prompt());
}

Output  = Numbers[0]
for (let j = 1; j < Size; j++){
    switch (Operator) {
        case '+':
            Output += Numbers[j];
            break;
        case '-':
            Output -= Numbers[j];
            break;
        case '*':
            Output *= Numbers[j];
            break;
        case '/':
            Output /= Numbers[j];
            break;
        default:
            console,log("Sorry, I don't understand ${Operator}.")
    }
}


console.log(Output);