const userInput = require('./userInput'); 
function generateLetterCountObject(Str) {
    var Counts = new Object();
    Str = Str.toUpperCase().split(' ').join('').split('');
    for (let i = 0; i < Str.length; i++) {
        Counts[Str[i]] = 0;
    }
    for (let j = 0; j < Str.length; j++) {
        Counts[Str[j]] += 1;
    }
    return Counts;
}

function printTheLetterCount(Counts) {
    for (const letter in Counts) {
        console.log(`${letter}: ${Counts[letter]}`);
    }
}
exports.printTheLetterCount = printTheLetterCount;

function performOneLetterCountingCalculation() {
    const Str = userInput.getStringInput('Please enter your string of text: ');
    const Counts = generateLetterCountObject(Str);
    printTheLetterCount(Counts);
}
exports.performOneLetterCountingCalculation = performOneLetterCountingCalculation;
