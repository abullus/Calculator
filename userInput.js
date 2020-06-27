const readline = require('readline-sync');

function getStringInput(prompt) {
    console.log(prompt);
    return readline.prompt();
}
exports.getStringInput = getStringInput;

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
exports.getNumberInput = getNumberInput

function getCalculationMode (){
    let Input 
    do {
        Input = getNumberInput(`Which calculator mode would you like?
1) Arithmetic
2) Vowel Counting
3) Letter Counting`)
    } while (Input != 2 && Input != 1 && Input != 3)
    return Input
}
exports.getCalculationMode = getCalculationMode

function getOperatorInput (){
    let Input
    do {
        Input = getStringInput("Please enter one of +,-,*,/: ")
    } while (Input != "+" && Input != "-" && Input != "*" && Input != "/");
    return Input;
}
exports.getOperatorInput = getOperatorInput;