const input = require('fs').readFileSync('stdin', 'utf-8');
//const input = require('fs').readFileSync('/dev/stdin', 'utf-8');

let input_array = input.split('\n');

let maior = { "valor": 0, "index": 0 };

for(var i = 0; i < input_array.length; i++){
   if( parseInt(input_array[i]) > maior["valor"] ){
      maior["valor"] = parseInt(input_array[i]);
      maior["index"] = i;
   }
}

console.log(maior["valor"]);
console.log(maior["index"] + 1);


