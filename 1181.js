const input = require('fs').readFileSync('stdin', 'utf-8');
//const input = require('fs').readFileSync('/dev/stdin', 'utf-8');

let input_array = input.split('\n')[1];
let valor_array = input_array.split(" ");

let menor_index = 0;

for(let i = 0; i < valor_array.length ; i++){
   if( parseInt(valor_array[i]) < parseInt(valor_array[ menor_index ]) ){
      menor_index = i;
   }
}

console.log("Menor valor: "+ parseInt(valor_array[ menor_index ]) );
console.log("Posicao: "+ menor_index );
