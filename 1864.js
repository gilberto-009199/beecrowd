//const input = require('fs').readFileSync('stdin', 'utf-8');
const input = require('fs').readFileSync('/dev/stdin', 'utf-8');
var line = input.split('\n');

var index = parseInt(line.shift());
var frase = "LIFE IS NOT A PROBLEM TO BE SOLVED";
console.log(frase.substring(0, index));