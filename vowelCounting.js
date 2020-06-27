const userInput = require('./userInput'); 
const letterCounting = require('./letterCounting'); 

function generateVowelCountObject(Str) {
    var Counts = { A: 0, E: 0, I: 0, O: 0, U: 0 };
    for (let Letter of Str) {
        const upperLetter = Letter.toUpperCase();
        if (Counts.hasOwnProperty(upperLetter)) {
            Counts[upperLetter]++;
        }
    }
    return Counts;
}
function performOneVowelCountingCalculation() {
    const Str = userInput.getStringInput('Please enter your string of text: ');
    const Counts = generateVowelCountObject(Str);
    letterCounting.printTheLetterCount(Counts);
}
exports.performOneVowelCountingCalculation = performOneVowelCountingCalculation;
