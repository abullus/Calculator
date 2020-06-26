const readline = require('readline-sync');

function printWelcomeMessage (){
    console.log('Welcome to the calculator!');
    console.log("============================")
}

function getANumber (){
    while (true){
        Input = readline.prompt();
        if (isNaN(Input)){
            console.log("Please enter a number: ")
        } else{
            return parseFloat(Input)
        }
    }
}

function getInputs(){
    let Numbers = []
    console.log('Please enter the operator: ');
    const Operator = readline.prompt();
    
    console.log('How many numbers do you want to '+Operator+' ?')
    const Size = getANumber();
    
    for (let i = 0; i < Size; i++) {
        console.log('Please enter number '+(i+1));
        Numbers[i] = getANumber();
    }
    return {
        Operator, Size, Numbers
    }
}

function performOneCalculation(){
    let {Operator, Size, Numbers} = getInputs()
    let Output  = Numbers[0]
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
                console.log("Sorry, I don't understand ${Operator}.")
        }
    }    
    console.log(Output);
}

printWelcomeMessage()
while (true) {
    performOneCalculation()
}
