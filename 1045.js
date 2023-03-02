//const input = require('fs').readFileSync('stdin', 'utf-8')
const input = require('fs').readFileSync('/dev/stdin', 'utf-8');

const valores = input.split(' ');

let A = parseFloat(valores[0]);
let B = parseFloat(valores[1]);
let C = parseFloat(valores[2]);

// pegando a hipotenusa
const MAIOR = (A + B + Math.abs(A-B))/2;
maior = ( A + B + Math.abs(A-B))/2;
maior = ( maior + C + Math.abs(maior-C))/2;

if( B == maior ){
	B = A;
	A = maior;
}else if( C == maior){
	C = A;
	A = maior;
}

saida = "";


if ( A >= B + C )saida = "NAO FORMA TRIANGULO";
else {
	saida +=  A**2 == B**2 + C**2 ?"TRIANGULO RETANGULO":"";
	saida +=  A**2 >  B**2 + C**2 ?"TRIANGULO OBTUSANGULO":"";
	saida +=  A**2 <  B**2 + C**2 ?"TRIANGULO ACUTANGULO":"";
	saida += ((A == B && B == C)?"\nTRIANGULO EQUILATERO":((A == B || A == C || B == C)?"\nTRIANGULO ISOSCELES":""))
}

console.log(saida);
