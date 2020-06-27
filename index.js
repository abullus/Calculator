const userInput = require('./userInput'); 
const arithmetic = require('./arithmetic'); 
const vowelCounting = require('./vowelCounting'); 
const letterCounting = require('./letterCounting'); 
const ARITHMETIC_MODE = 1;
const VOWEL_COUNTING_MODE = 2
const LETTER_COUNTING_MODE = 3

function printWelcomeMessage (){
    console.log(`Welcome to the calculator!
    ============================`)
} 

printWelcomeMessage()
while (true) {
    const calculationMode = userInput.getCalculationMode();
    if (calculationMode === ARITHMETIC_MODE){
        arithmetic.performOneArithmeticCalculation()
    }else if (calculationMode === VOWEL_COUNTING_MODE){
        vowelCounting.performOneVowelCountingCalculation();
    }else if (calculationMode === LETTER_COUNTING_MODE){
        letterCounting.performOneLetterCountingCalculation ();
    }
}
