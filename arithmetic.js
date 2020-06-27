const userInput = require('./userInput'); 

function generateNumbersArray(Size) {
    let Numbers = [];
    for (let i = 0; i < Size; i++) {
        Numbers[i] = userInput.getNumberInput('Please enter number ' + (i + 1));
    }
    return Numbers;
}

function computeTheAnswer(Numbers, Operator) {
    let Output
    switch (Operator) {
        case '+':
            Output = Numbers.reduce(function(accumulator,current) {return accumulator + current});
            break;
        case '-':
            Output = Numbers.reduce(function(accumulator,current) {return accumulator - current});
            break;
        case '*':
            Output = Numbers.reduce(function(accumulator,current) {return accumulator * current});
            break;
        case '/':
            Output = Numbers.reduce(function(accumulator,current) {return accumulator / current});
            break;
        default:
            console.log("Sorry, I don't understand.");
    }
    return Output;
}

function performOneArithmeticCalculation() {
    const Operator = userInput.getOperatorInput();
    const Size = userInput.getNumberInput(`How many numbers do you want to ${Operator} ?`);
    const Numbers = generateNumbersArray(Size);

    console.log(computeTheAnswer(Numbers, Operator));
}
exports.performOneArithmeticCalculation = performOneArithmeticCalculation;
