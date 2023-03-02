const input = require('fs').readFileSync('stdin', 'utf-8');
//const input = require('fs').readFileSync('/dev/stdin', 'utf-8');

let input_array = input.split('\n');

let inicial = input_array[0];

let N = new Array(10);

N[0] = parseInt(inicial);

let i = 0;

do {
  
  console.log("N["+ i +"] = "+ N[ i ])
  N[ i + 1 ] = N[ i ] * 2;
  i++;

} while ( i < 10 );
