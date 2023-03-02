const input = require('fs').readFileSync('stdin', 'utf-8')
//const input = require('fs').readFileSync('/dev/stdin', 'utf-8')

let input_array	= input.split('\n');
let peer_array	= [];

for(let line of input_array ){
    peer_array.push( [ parseInt(line.split(" ")[0]), parseInt(line.split(" ")[1]) ] );
}

let texto = "";

for(let peer of peer_array){
    if( peer[0] > 0  && peer[1] > 0){
	let MAIOR = (peer[0] + peer[1] + Math.abs( peer[0] - peer[1] ))/2;
	let MENOR =  peer[0] + peer[1] - MAIOR;
	let soma  = 0;
	for(var i = MENOR; i <= MAIOR; i++){
		texto += i + " ";
		soma += parseInt(i);
	}
	texto += "Sum="+ soma +"\n";
    }
    
}

console.log(texto.substring(0,texto.length - 1));

