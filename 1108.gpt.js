

const input = require('fs').readFileSync('stdin', 'utf-8');
//const input = require('fs').readFileSync('/dev/stdin', 'utf-8');


const input_array = input.split('\n');
let index_linha = 0;


function euclideanDistance(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
  }
  
 // Função para encontrar o menor raio de cobertura das torres
function findMinRadius(residences) {
    let minRadius = Number.MAX_VALUE; // Inicializa minRadius com o valor máximo possível
    for (let i = 0; i < residences.length - 1; i++) {
        for (let j = i + 1; j < residences.length; j++) {
        let radius1 = 0, radius2 = 0; // Inicializa os raios das duas torres
        // Encontra o raio de cobertura da primeira torre
        for (let k = 0; k < residences.length; k++) {
            radius1 = Math.max(radius1, euclideanDistance(residences[i][0], residences[i][1], residences[k][0], residences[k][1]));
        }
        // Encontra o raio de cobertura da segunda torre
        for (let k = 0; k < residences.length; k++) {
            radius2 = Math.max(radius2, euclideanDistance(residences[j][0], residences[j][1], residences[k][0], residences[k][1]));
        }
        // Atualiza o minRadius se a combinação atual for melhor
        minRadius = Math.min(minRadius, Math.max(radius1, radius2));
        }
    }
    return minRadius;
}

do {

	let tam_matrix = input_array[index_linha].split(" ");
	let matrix = input_array.slice( index_linha + 1 , index_linha + parseInt(tam_matrix[0]) + 1 );
	// FINAL LINHA "0"
	if((tam_matrix+"") == "0") return;
	
	let pontos = [];
	for(let ponto of matrix){
	    let ponto_array = ponto.split(" ");
	    pontos.push([ parseInt(ponto_array[0]) * 1.0, parseInt(ponto_array[1]) * 1.0]);
	}

    // Exemplo de uso:
    
    console.log(findMinRadius(pontos));


	index_linha += parseInt(tam_matrix[0]) + 1;

}while( index_linha < input_array.length );

  
  