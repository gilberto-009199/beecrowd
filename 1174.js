const input = require('fs').readFileSync('stdin', 'utf-8');
//const input = require('fs').readFileSync('/dev/stdin', 'utf-8');

let input_array = input.split('\n').splice(0,100);


let i = 0;
while ( i < input_array.length ) {

  let valor = input_array[ i ] * 1;
  if( valor <= 10 ){
     console.log("A["+ i +"] = "+ valor.toFixed(1));
  }
  i++;

};
