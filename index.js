const readline = require('readline-sync');
const ARITHMETIC_MODE = 1;
const VOWEL_COUNTING_MODE = 2
const LETTER_COUNTING_MODE = 3

function printWelcomeMessage (){
    console.log(`Welcome to the calculator!
    ============================`)
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

function performOneArithmeticCalculation(){
    const Operator = getOperatorInput()
    const Size = getNumberInput(`How many numbers do you want to ${Operator} ?`);
    const Numbers = generateNumbersArray(Size);
    
    console.log(computeTheAnswer(Numbers,Operator));
}

function generateVowelCountObject(Str){
    var Counts  = {A: 0, E: 0, I: 0, O: 0, U: 0}
    for (let Letter of Str) {
        const upperLetter = Letter.toUpperCase();
        if (Counts.hasOwnProperty(upperLetter)) {
            Counts[upperLetter]++;
        }
    }
    return Counts
}

function performOneVowelCountingCalculation(){
    const Str = getStringInput('Please enter your string of text: ')
    const Counts = generateVowelCountObject(Str)
    printTheLetterCount(Counts)
}

function generateLetterCountObject(Str){
    var Counts = new Object()
    Str = Str.toUpperCase().split(' ').join('').split('')
    for (let i =0;i < Str.length;i++){
        Counts[Str[i]] = 0
    }
    for (let j = 0; j < Str.length; j++) {
        Counts[Str[j]]+=1;
    }
    return Counts
}

function printTheLetterCount(Counts){
    for (const letter in Counts){
        console.log(`${letter}: ${Counts[letter]}`)
    }
}

function performOneLetterCountingCalculation(){
    const Str = getStringInput('Please enter your string of text: ')
    const Counts = generateLetterCountObject(Str)
    printTheLetterCount(Counts)
}

printWelcomeMessage()
while (true) {
    const calculationMode = getCalculationMode ();
    if (calculationMode === ARITHMETIC_MODE){
        performOneArithmeticCalculation()
    }else if (calculationMode === VOWEL_COUNTING_MODE){
        performOneVowelCountingCalculation();
    }else if (calculationMode === LETTER_COUNTING_MODE){
        performOneLetterCountingCalculation ();
    }
}
