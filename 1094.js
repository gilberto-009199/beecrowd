const input = require('fs').readFileSync('stdin', 'utf-8')
//const input = require('fs').readFileSync('/dev/stdin', 'utf-8')


let input_array	= input.split('\n');
let peer_array	= input_array.splice(1);

let sum_cobaias = 0;
let sum_coelhos = 0;
let sum_ratos = 0;
let sum_sapos = 0;


for(let peer of peer_array){
    let cobaias = parseInt( peer.split(" ")[0] );
    let tipo = peer.split(" ")[1];

    switch(tipo){
        case "C":
         sum_coelhos += cobaias;
         break;
        case "R":
         sum_ratos += cobaias;
         break;
        case "S":
         sum_sapos += cobaias;
         break;
    }
    
}

sum_cobaias = sum_coelhos + sum_ratos + sum_sapos;

console.log("Total: "+sum_cobaias+" cobaias");
console.log("Total de coelhos: "+sum_coelhos);
console.log("Total de ratos: "+sum_ratos);
console.log("Total de sapos: "+sum_sapos);
console.log("Percentual de coelhos: "+ (sum_coelhos / sum_cobaias * 100).toFixed(2) +" %");
console.log("Percentual de ratos: "+ (sum_ratos / sum_cobaias * 100).toFixed(2) +" %");
console.log("Percentual de sapos: "+ (sum_sapos / sum_cobaias * 100).toFixed(2) +" %");

