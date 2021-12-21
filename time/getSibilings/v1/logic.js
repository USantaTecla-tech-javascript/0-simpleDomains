let age = +prompt("Dame tu edad: ");
const beforeAge = age - 1;
const before = beforeAge < 0 ? "" : "El año pasado tenías " + beforeAge + " año(s))";
const and = before === "" ? "E" : " y e"
const afterAge = age + 1;
const after = "l año que viene tendrás " + afterAge + " año(s)";
alert(before + and + after);
