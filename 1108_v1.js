const input = require('fs').readFileSync('stdin', 'utf-8');
//const input = require('fs').readFileSync('/dev/stdin', 'utf-8');


const input_array = input.split('\n');
let index_linha = 0;


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

	// Criando o mapa da distancia
	let mapa_distancias = new Array(pontos.length);
	for(let i = 0 ; i < mapa_distancias.length ; i++){
		mapa_distancias[i] = new Array(pontos.length);
	}
	
	// [ index1 , index2 , distancia ]
	let maior_distancia = [ 0, 0, 0 ];
	// Populando Mapa da distancia
	for(var index = 0; index  < pontos.length ; index++){
		let ponto = pontos[index];
//		console.log(" ( "+ ponto[0] +" , "+ ponto[1] +" )")
		// Mapeamento
		for(var index_sub = index ; index_sub <  pontos.length ; index_sub++){
			let ponto_comparacao = pontos[index_sub];
			let distancia = Math.sqrt( Math.pow( ponto[0] - ponto_comparacao[0], 2) + Math.pow(ponto[1] - ponto_comparacao[1], 2));
			mapa_distancias[index][index_sub] = distancia ;
			mapa_distancias[index_sub][index] = distancia ;

			if( maior_distancia[2] < distancia ){
				maior_distancia[0] = index;
				maior_distancia[1] = index_sub;
				maior_distancia[2] = distancia * 1;
			}

		}
	}

//	console.log("    Pontos Mais afastados: "+ maior_distancia[2] );
//	console.log("      ( "+pontos[maior_distancia[0]][0]+" , "+pontos[maior_distancia[0]][1]+" ) ( "+pontos[maior_distancia[1]][0]+" , "+pontos[maior_distancia[1]][1]+" )")

	let maior_distancia_dos_pontos_distantes = [ 0, 0 ];
	let grupo0 = [maior_distancia[0]];
	let grupo1 = [maior_distancia[1]];
	for(var index = 0; index < pontos.length ; index++ ){

		if( index  == maior_distancia[0] || index == maior_distancia[1] )continue;

		let ponto = pontos[index];
		let distancias = mapa_distancias[index];
		let distancia_0 =  distancias[maior_distancia[0]] * 1;
		let distancia_1 =  distancias[maior_distancia[1]] * 1;

//		console.log(" ( "+ ponto[0] +" , "+ ponto[1] +" ) ");
		//console.table(distancias);
//		console.log("\t distancia de ( "+ ponto[0] +" , "+ ponto[1] +" )  para ( "+pontos[maior_distancia[0]][0]+" , "+pontos[maior_distancia[0]][1]+" ) e "+distancia_0);
//		console.log("\t distancia de ( "+ ponto[0] +" , "+ ponto[1] +" )  para ( "+pontos[maior_distancia[1]][0]+" , "+pontos[maior_distancia[1]][1]+" ) e "+distancia_1);

		// Qual ponto e mais distante do ponto atual	
		if( distancia_0 <= distancia_1){
			grupo0.push( index );
//			console.log("\t ( "+ ponto[0] +" , "+ ponto[1] +" ) esta mais perto de ( "+ pontos[maior_distancia[0]][0]+", "+ pontos[maior_distancia[0]][1] +" ) "+distancia_0);
			maior_distancia_dos_pontos_distantes[0] = (maior_distancia_dos_pontos_distantes[0] + distancia_0 + Math.abs( maior_distancia_dos_pontos_distantes[0] - distancia_0 ))/2;
		} else {
			grupo1.push( index );
//			console.log("\t ( "+ ponto[0] +" , "+ ponto[1] +" ) esta mais perto de ( "+ pontos[maior_distancia[1]][0]+", "+ pontos[maior_distancia[1]][1] +" ) "+distancia_1);
			maior_distancia_dos_pontos_distantes[1] = (maior_distancia_dos_pontos_distantes[1] + distancia_1 + Math.abs( maior_distancia_dos_pontos_distantes[1] - distancia_1 ))/2;
		}
	}

	

	console.log(" "+(index_linha+1) + "° SITUACAO");
	console.log("    Pontos Mais afastados: ");
	console.log("    ( "+pontos[maior_distancia[0]][0]+" , "+pontos[maior_distancia[0]][1]+" ) com "+grupo0.length+" pontos ")
	console.log("    Ponto Mais Afastado dos dele esta há ==> "+ maior_distancia_dos_pontos_distantes[0]);
	// for entre os membros do grupo 0
	let maior_diametro = 0;
	for(let index of grupo0){
		console.log("        ( "+pontos[index][0]+" , "+pontos[index][1]+" ):")
		let distancias = mapa_distancias[index];
		for(let index_sub of grupo0){
			let distancia = distancias[index_sub];
			console.log("          "+distancia+" ===>>>> ( "+pontos[index_sub][0]+" , "+pontos[index_sub][1]+" ) ")
			maior_diametro = (maior_diametro + distancia + Math.abs( maior_diametro - distancia ))/2;
		}
	}
	console.log("    ( "+pontos[maior_distancia[1]][0]+" , "+pontos[maior_distancia[1]][1]+" ) com "+grupo1.length+" pontos ");
	console.log("    Ponto Mais Afastado dos dele esta há ==> "+ maior_distancia_dos_pontos_distantes[1]);
	for(let index of grupo1){
		console.log("        ( "+pontos[index][0]+" , "+pontos[index][1]+" ):")
		let distancias = mapa_distancias[index];
		for(let index_sub of grupo1){
			let distancia = distancias[index_sub];
			console.log("          "+distancia+" ===>>>> ( "+pontos[index_sub][0]+" , "+pontos[index_sub][1]+" ) ")
			maior_diametro = (maior_diametro + distancia + Math.abs( maior_diametro - distancia ))/2;
		}
	}


	console.log("    Distancia maior entre pontos do mesmo grupo: "+maior_diametro);
	
	console.log("---"+ (maior_distancia_dos_pontos_distantes[0] /2).toFixed(2));
	console.log("---"+ (maior_distancia_dos_pontos_distantes[1] /2).toFixed(2));

/*  */
	diametro_minimo_da_torre = ((maior_distancia_dos_pontos_distantes[0] > maior_distancia_dos_pontos_distantes[1] )? (maior_distancia_dos_pontos_distantes[0]) : (maior_distancia_dos_pontos_distantes[1]));
	let raio = diametro_minimo_da_torre / 2;
	console.log("---> "+ diametro_minimo_da_torre);
	console.log("RAIO PURO: ", raio) ;
	
	//let sobra  = diametro_minimo_da_torre % 2 ;	
	let sobra = ( (raio).toFixed(4) - (raio).toFixed(2) );
	console.log("RAIO SOBRA: ", sobra) ;

	if(sobra > 0.0013)console.log( (raio + 0.01).toFixed(2))
	else console.log( (raio).toFixed(2) );

	//console.log( (raio).toFixed(2) )

	index_linha += parseInt(tam_matrix[0]) + 1;

}while( index_linha < input_array.length );

//PONTO MEDIO ( ponto[0] + pontos[index_sub][0] )/2 + ( ponto[1] + pontos[index_sub][0] )/2;


