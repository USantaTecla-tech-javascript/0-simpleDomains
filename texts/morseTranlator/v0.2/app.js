const { Console } = require("./console");

const console = new Console();
function MorseGenerator(sentence) {
    this.sentence = sentence;
    this.letters = [" ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    this.morseLetters = ["/ ", ".- ", "-... ", "-.-. ", "-.. ", ". ", "..-. ", "--. ", ".... ", ".. ", ".--- ", "-.- ", ".-.. ", "-- ", "-. ", "--- ", ".--. ", "--.- ", ".-. ", "... ", "- ", "..- ", "...- ", ".-- ", "-..- ", "-.-- ", "--.. "];

    this.toString = function () {
        return '' + this.sentence;
    };

    this.toMorse = function () {
        let message = "";
        for (var i = 0; i < letters.length; i++) {
            let char = sentence[i];
            if ('A' < char && char <= 'Z'){
                char -= 'A' - 'a';
            } else if (char < 'a' || 'z' < char) {
                char = ' ';
            }
            for (var j = 0; j < morseLetters.length; j++) {
                if (char == letters[j]) {
                    message += morseLetters[j];
                }
            }
        }
        return message;
    }
}

let morsification = new MorseGenerator('hello world');
let msg = 'La frase ' + morsification.toString() + ' se traduce a ' + morsification.toMorse();
console.writeln(msg);
