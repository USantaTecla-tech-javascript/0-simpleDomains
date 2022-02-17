const { Console } = require("./console");

const console = new Console();
const length = console.readNumber(`¿De cuántas palabras quieres el discurso: `);
// https://www.cosasdearquitectos.com/2012/03/tabla-para-arquitectos-de-discursos-automaticos/
const WORDINESS = [
  [`La textura`, `El tratamiento`, `La materialidad`],
  [`epitelial`, `modal`, `pertinente`],
  [`del edificio`, `del entorno`, `de la imagen`],
  [`manifiesta`, `expresa`, `exhibe`],
  [`un espacio`, `un volumen`, `un aspecto`],
  [`palpablemente`, `perentoriamente`, `inequivocamente`],
  [`complej`, `profund`, `plástic`],
];
const sentences = length / WORDINESS.length;
let speech = ``;
for (let i = 0; i < sentences; i++) {
  let gender;
  for (let j = 0; j < WORDINESS.length; j++) {
    const random = Math.floor(Math.random() * WORDINESS[j].length);
    const words = WORDINESS[j][random];
    if (j=== 4){
      gender = words[2] === `a` ? `a` : `o`;
    }
    speech += ` ${words}`;
  }
  speech += `${gender}\n`;
}
console.writeln(speech);
