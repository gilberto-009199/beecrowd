const input = require('fs').readFileSync('stdin', 'utf-8')
//const input = require('fs').readFileSync('/dev/stdin', 'utf-8')

let input_array = input.split('\n');

let X = parseInt(input_array[0]);
let Y = parseInt(input_array[1]);

const MAIOR = (X + Y + Math.abs( X - Y ))/2;
const MENOR = X + Y - MAIOR;

for (let i = MENOR + 1; i < MAIOR; i++) {
	let resto = i % 5;
	if (resto == 2 || resto == 3) {
		console.log(i)
	}
}

