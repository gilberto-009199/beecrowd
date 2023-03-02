//const input = require('fs').readFileSync('stdin', 'utf-8')
const input = require('fs').readFileSync('/dev/stdin', 'utf-8')

const valores = input.split(' ')

const A = parseFloat(valores[0])
const B = parseFloat(valores[1])

// Usando um pouco de matematica para dar um toque
const MAIOR = (A + B + Math.abs(A-B))/2;
const MENOR = A + B - MAIOR;



const isMultiplos = MAIOR % MENOR == 0;

isMultiplos ? console.log("Sao Multiplos") : console.log("Nao sao Multiplos");

