const { Console } = require("./console");

const console = new Console();
const LETTERS = [" ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"
    , "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const MORSE = ["/ ", ".- ", "-... ", "-.-. ", "-.. ", ". ", "..-. ", "--. ", ".... "
    , ".. ", ".--- ", "-.- ", ".-.. ", "-- ", "-. ", "--- ", ".--. ", "--.- ", ".-. "
    , "... ", "- ", "..- ", "...- ", ".-- ", "-..- ", "-.-- ", "--.. "];
const sentence = console.readString("Dime algo: ");
let message = "";
for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];
    if ('A' <= char && char <= 'Z'){
        char = toLowerCase(sentence[i]);
    } else if (char < 'a' || 'z' < char) {
        char = ' ';
    }
    for (let j = 0; j < MORSE.length; j++) {
        if (char == LETTERS[j]) {
            message += MORSE[j];
        }
    }
}
console.writeln(`La frase "${sentence}"
se traduce a "${message}"`);
