const input = require('fs').readFileSync('stdin', 'utf-8');
//const input = require('fs').readFileSync('/dev/stdin', 'utf-8');

let input_array = input.split('\n').splice(0, 20);


let i = 1;
while ( i <= input_array.length ) {

  console.log("N["+ (i-1) +"] = "+ input_array[ input_array.length - i ] );

  i++;
};
