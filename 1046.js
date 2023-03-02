//const input = require('fs').readFileSync('stdin', 'utf-8')
const input = require('fs').readFileSync('/dev/stdin', 'utf-8')

const valores = input.split(' ')

const inicio = parseFloat(valores[0])
const fim = parseFloat(valores[1])

let horas = 0;
let i = inicio;

if ( inicio == fim )return console.log("O JOGO DUROU 24 HORA(S)");

while (i != fim ){

	horas += 1;
	i++;

	if( i == 24) i = 0;
}

console.log("O JOGO DUROU "+ horas +" HORA(S)")

