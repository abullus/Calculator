const readline = require('readline-sync');

function printWelcomeMessage (){
    console.log('Welcome to the calculator!');
    console.log("============================")
}

function getStringInput (prompt){
     console.log(prompt);
     return readline.prompt();
}

function getNumberInput (prompt){
    while (true){
        let Input = getStringInput(prompt)
        if (isNaN(Input)){
            console.log("Please enter a number: ")
        } else{
            return parseFloat(Input)
        }
    }
}

function getOperatorInput (){
    let Input
    do {
        Input = getStringInput("Please enter one of +,-,*,/: ")
    } while (Input != "+" && Input != "-" && Input != "*" && Input != "/");
    return Input;
}

function generateNumbersArray(Size){
    let Numbers = []
    for (let i = 0; i < Size; i++) {
        Numbers[i] = getNumberInput('Please enter number '+(i+1));
    }
    return Numbers
}

function computeTheAnswer (Numbers, Operator){
    let Output  = Numbers[0]
    for (let j = 1; j < Numbers.length; j++){
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
                console.log("Sorry, I don't understand.")
        }
    }
    return Output
}

function performOneCalculation(){
    const Operator = getOperatorInput()
    const Size = getNumberInput('How many numbers do you want to '+Operator+' ?');
    const Numbers = generateNumbersArray(Size);
    
    console.log(computeTheAnswer(Numbers,Operator));
}

printWelcomeMessage()
while (true) {
    performOneCalculation()
}
