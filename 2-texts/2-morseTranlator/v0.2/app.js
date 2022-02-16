const { Console } = require("./console");

const console = new Console();

function MorseGenerator(sentence) {
    this.sentence = sentence;
    this.LETTERS = [" ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"
        , "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    this.MORSE = ["/ ", ".- ", "-... ", "-.-. ", "-.. ", ". ", "..-. ", "--. ", ".... "
        , ".. ", ".--- ", "-.- ", ".-.. ", "-- ", "-. ", "--- ", ".--. ", "--.- ", ".-. "
        , "... ", "- ", "..- ", "...- ", ".-- ", "-..- ", "-.-- ", "--.. "];

    this.toString = function () {
        return this.sentence;
    };

    this.toMorse = function () {
        let msg = ``;
        for (let i = 0; i < this.LETTERS.length; i++) {
            let char = this.sentence[i];
            if ('A' < char && char <= 'Z') {
                char -= 'A' - 'a';
            } else if (char < 'a' || 'z' < char) {
                char = ' ';
            }
            for (let j = 0; j < this.MORSE.length; j++) {
                if (char == this.LETTERS[j]) {
                    msg += this.MORSE[j];
                }
            }
        }
        return msg;
    }
}

const sentence = console.readString("Dime algo: ");
const morseGenerator = new MorseGenerator(sentence);
console.writeln(`La frase "${sentence}"
se traduce a "${morseGenerator.toMorse(sentence)}"`);
