const input = require('fs').readFileSync('stdin', 'utf-8');
//const input = require('fs').readFileSync('/dev/stdin', 'utf-8');

const input_array = input.split('\n');
let index = 0;

do {
	// EOF
	if(typeof input_array[index][0] == 'undefined') return;

	let dados_linha = input_array[index].split(" ");
	let circulo_raio = parseInt(dados_linha[0]);
	let circulo_x = parseInt(dados_linha[1]);
	let circulo_y = parseInt(dados_linha[2]);

	let flor_raio = parseInt(dados_linha[3]);
	let flor_x = parseInt(dados_linha[4]);
	let flor_y = parseInt(dados_linha[5]);
	
	let distancia_maxima = (circulo_raio - flor_raio);

	let distancia = Math.sqrt( Math.pow(circulo_x - flor_x, 2) + Math.pow(circulo_y - flor_y, 2) );

	if( distancia > distancia_maxima ) console.log("MORTO")
	else console.log("RICO");

	index += 1;
}while( index < input_array.length );

