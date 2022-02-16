const { Console } = require("./console");

const console = new Console();
const sentence = console.readString("Dime algo: ");
console.writeln(`La frase "${sentence}"
se traduce a "${toMorse(sentence)}"`);

function toMorse(sentence) {
    const LETTERS = [" ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"
        , "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const MORSE = ["/ ", ".- ", "-... ", "-.-. ", "-.. ", ". ", "..-. ", "--. ", ".... "
        , ".. ", ".--- ", "-.- ", ".-.. ", "-- ", "-. ", "--- ", ".--. ", "--.- ", ".-. "
        , "... ", "- ", "..- ", "...- ", ".-- ", "-..- ", "-.-- ", "--.. "];
    let message = "";
    for (let i = 0; i < LETTERS.length; i++) {
        let char = sentence[i];
        if ('A' < char && char <= 'Z') {
            char -= 'A' - 'a';
        } else if (char < 'a' || 'z' < char) {
            char = ' ';
        }
        for (let j = 0; j < MORSE.length; j++) {
            if (char == LETTERS[j]) {
                message += MORSE[j];
            }
        }
    }
    return message;
}
