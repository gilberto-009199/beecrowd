const input = require('fs').readFileSync('stdin', 'utf-8');
//const input = require('fs').readFileSync('/dev/stdin', 'utf-8');


const input_array = input.split('\n');
let index = 0;


do {

	let tam_matrix = input_array[index].split(" ");
	let matrix = input_array.slice( index + 1 , index + parseInt(tam_matrix[0]) + 1 );

	if(typeof matrix[0] == 'undefined') return;

//     	console.table(matrix);

	let jogador_linha  = 0;
	let jogador_coluna = 0;

	let agmon_linha  = 0;
	let agmon_coluna = 0;
	
	for( var i = 0; i < matrix.length; i++ ){
	    let index_jogador = matrix[i].search("1");
	    if( index_jogador > -1 ){
		jogador_linha  = i;
		jogador_coluna = index_jogador / 2;
	    }
	    let index_agmon = matrix[i].search("2");
	    if( index_agmon > -1 ){
		agmon_linha  = i;
		agmon_coluna = index_agmon / 2;
	    }
	}

	let diff_linha  = ( jogador_linha - agmon_linha  ); 
	let diff_coluna = ( agmon_coluna - jogador_coluna );

	let segundos = 0;
	
	if(diff_linha < 0 && diff_coluna < 0)segundos = diff_linha * (-1) + diff_coluna * (-1);
	else if( diff_linha < 0 )segundos = diff_linha * (-1) + diff_coluna;	
	else if( diff_coluna < 0 )segundos = diff_linha  + diff_coluna * (-1);
	else segundos = diff_linha  + diff_coluna;

/*	console.log(diff_linha);
	console.log(diff_coluna);

	console.log("JOGADOR: ");

	console.log("\t linha: "+jogador_linha);
	console.log("\t coluna: "+jogador_coluna);

	console.log("AGMON: ");
	console.log("\t linha: "+agmon_linha);
	console.log("\t coluna: "+agmon_coluna);
*/
	
	console.log(segundos);
	index += parseInt(tam_matrix[0]) + 1;

}while( index < input_array.length );
/*
1 8
1 0 0 0 0 0 2 0
2 2
1 0
0 2
4 4
2 0 0 0
0 0 0 0
0 0 0 0
0 0 1 0


*/
