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

//	console.log("    Pontos Mais afastados: " );
//	console.log("      ( "+pontos[maior_distancia[0]][0]+" , "+pontos[maior_distancia[0]][1]+" ) <= "+maior_distancia[2]+" => ( "+pontos[maior_distancia[1]][0]+" , "+pontos[maior_distancia[1]][1]+" )")

	let maior_distancia_dos_pontos_distantes = [ 0, 0 ];
	let grupo0 = [maior_distancia[0]];
	let grupo1 = [maior_distancia[1]];

	// Mapeando para 2 grupos
	for(var index = 0; index < pontos.length ; index++ ){

		if( index  == maior_distancia[0] || index == maior_distancia[1] )continue;

		let ponto = pontos[index];
		let distancias = mapa_distancias[index];
		
		let distancia_0 =  distancias[maior_distancia[0]] * 1;
		let distancia_1 =  distancias[maior_distancia[1]] * 1;

		//console.log("      ( "+ponto[0]+" , "+ponto[0]+" ) ("+distancia_0+") ("+distancia_1+")");

		// Qual ponto e mais distante do ponto atual
		if( distancia_0 <= distancia_1){
			grupo0.push( index );
			maior_distancia_dos_pontos_distantes[0] = (maior_distancia_dos_pontos_distantes[0] + distancia_0 + Math.abs( maior_distancia_dos_pontos_distantes[0] - distancia_0 ))/2;
		} else {
			grupo1.push( index );
			maior_distancia_dos_pontos_distantes[1] = (maior_distancia_dos_pontos_distantes[1] + distancia_1 + Math.abs( maior_distancia_dos_pontos_distantes[1] - distancia_1 ))/2;
		}
	}

	

	console.log(" "+(index_linha+1) + "° SITUACAO");
	console.log("    Pontos Mais afastados: ");
	console.log("    ( "+pontos[maior_distancia[0]][0]+" , "+pontos[maior_distancia[0]][1]+" ) com "+grupo0.length+" pontos ")
	console.log("    Ponto Mais Afastado dos dele esta há ==> "+ maior_distancia_dos_pontos_distantes[0]);
	// for entre os membros do grupo 0
	let maior_diametro_grupo1 = 0;
	for(let index of grupo0){

		let distancias = mapa_distancias[index];
		for(let index_sub of grupo0){
			let distancia = distancias[index_sub];
			maior_diametro_grupo1 = (maior_diametro_grupo1 + distancia + Math.abs( maior_diametro_grupo1 - distancia ))/2;
		}
	}

	console.log("    ( "+pontos[maior_distancia[1]][0]+" , "+pontos[maior_distancia[1]][1]+" ) com "+grupo1.length+" pontos ");
	console.log("    Ponto Mais Afastado dos dele esta há ==> "+ maior_distancia_dos_pontos_distantes[1]);
	let maior_diametro_grupo2 = 0;
	for(let index of grupo1){

		let distancias = mapa_distancias[index];
		for(let index_sub of grupo1){
			let distancia = distancias[index_sub];

			maior_diametro_grupo2 = (maior_diametro_grupo2 + distancia + Math.abs( maior_diametro_grupo2 - distancia ))/2;
		}
	}

	/*  
	
		Devo pegar o grupo que exige a menor distancia entre os pontos e pegar o maior diametro 
		que vem do grupo com maior distancia entre os pontos e pegando a distancia do ponto mais afastado
		que criou o segundo grupo que é o grupo com menoor distancia e veficiar se esse ponto
		consegue cobrir alguns dos pontos do 1° grupo calculando a distancia entre eles e verificando
		se a distancia e iqual ou menor que o diametro maximo possivel , se for menor ou iqual
		então podemos rearanjar para que o diametro seja menor (talves pegando os pontos do 1° grupo que não
		seriam cobertos pelo circulo do 2° grupo e recalculando com eles o tamanho do diametro ) 
	
	*/
	let maior_diametro = (maior_diametro_grupo2 + maior_diametro_grupo1 + Math.abs( maior_diametro_grupo2 - maior_diametro_grupo1 ))/2;
	// detectar a situacao, circulo abrangendo mais de um grupo
	// calcular a distancia entre o ponto mais afastado e o ponto mais proximo do grupo maior
	// em que a distancia seja menor que o {maior_diamentrr}
	// depois de pegar a distancia trazar um segmento de reta entre esses dois pontos
	// cria um ponto no meio desse segmento de reta e calcular se a distancia dos pontos dentro do grupo menor
	// e iqual ou menor que o necessario para abrancher os pontos restantes assim se sabe se a situação é possivel!
	if( maior_diametro_grupo1 > maior_diametro_grupo2 ){
		// GRUPO 2 buscar os ponto mais proximos do GRUPO 1 
		console.log("\t GRUPO ( "+pontos[maior_distancia[1]][0]+" , "+pontos[maior_distancia[1]][1]+" )");
		let ponto = pontos[maior_distancia[1]];
		let distancias = mapa_distancias[maior_distancia[1]];

		let possiveis_torres = [];

		for(let index of grupo0){
			
			let ponto_grupo1 = pontos[index];
			let distancia = distancias[index];
			console.log("\t    ( "+ponto[0]+" , "+ponto[1]+" ) <== "+ distancia +" ==>  ( "+ponto_grupo1[0]+" , "+ponto_grupo1[1]+" )")
			console.log("\t       Distancia: "+distancia);
			console.log("\t       Raio: "+(distancia/2));
			// testar se funciona, atrazes do ponto medio entre a distancia dentro do GRUPO 2
			// testar se a distancia do ponto medio e iqual ou menor que o raio da distancia
			// Se funcionar e preciso, testar esse novo diametro de torre funciona no grupo anterior
			// recalculando sem usar os pontos abrangidos pela nova torre 2 
			if(maior_diametro < distancia)continue;

			let ponto_medio_x = ( (ponto[0]) + (ponto_grupo1[0]) )/2;
			let ponto_medio_y = ( (ponto[1]) + (ponto_grupo1[1]) )/2;
			let abrange_o_grupo1 = true;
			// verificando se a distancia do ponto medio chega nos pontos pertencentes ao grupo 2
			for(let index_sub of grupo1){
				let ponto_grupo2 = pontos[index_sub];
				let distancia_do_ṕonto_medio = Math.sqrt( Math.pow( ponto_medio_x - ponto_grupo2[0], 2) + Math.pow(ponto_medio_y - ponto_grupo2[1], 2));
				console.log("\t      ( "+ponto_grupo2[0]+" , "+ponto_grupo2[1]+" ) distancia do ponto medio: "+distancia_do_ṕonto_medio);
				// se algum desses pontos não puderem ser cobertos então esse não é o ciruculo certo
				if( (distancia_do_ṕonto_medio) > (distancia/2) )abrange_o_grupo1 = false;

			}
			
			if(abrange_o_grupo1)possiveis_torres.push({  "PONTO_CENTRAL":{x:ponto_medio_x,y:ponto_medio_y},"RAIO":distancia/2  });;
			
		}
		console.log("POSIVEIS TORRES COMPARTILHADAS:")
		console.table(possiveis_torres);
		// verifcar quantos pontos estão sendo abrangidos do grupo 1
		// pegar o circulo que mais abrange e depois 
		// verificar se o gurpo 1 consegue atender os pontos restantes
		// se não atender devemos aumentar o diametro da torre!
		// Deus me ajude a essa ser a solução!!! 
		possiveis_torres_abrangencia_de_pontos_do_grupo_1 = [];

		for(var i = 0;i<possiveis_torres.length;i++){possiveis_torres_abrangencia_de_pontos_do_grupo_1.push([])}

		for(var index_possiveis_torres = 0; index_possiveis_torres < possiveis_torres.length; index_possiveis_torres++){
			let ponto_medio_x = possiveis_torres[index_possiveis_torres].PONTO_CENTRAL.x;
			let ponto_medio_y = possiveis_torres[index_possiveis_torres].PONTO_CENTRAL.y;
			let raio = possiveis_torres[index_possiveis_torres].RAIO;
			for(let index_sub of grupo0){
				let ponto = pontos[index_sub];
				let distancia_do_ṕonto_medio = Math.sqrt( Math.pow( ponto_medio_x - ponto[0], 2) + Math.pow(ponto_medio_y - ponto[1], 2));
				
				// se algum desses pontos não puderem ser 
				if( (raio) >= (distancia_do_ṕonto_medio) ){
					possiveis_torres_abrangencia_de_pontos_do_grupo_1[index_possiveis_torres].push(index_sub);
					// registrar os pontos!!
				}

			}
		}

		//console.table(possiveis_torres_abrangencia_de_pontos_do_grupo_1);
		// verifica se é possivel essa situação, se sim começa a pegar o diametro novo e começa a pensar se funciona
		//  no 1° grupo, se o 1° grupo exigir um ciruculo maior verifica a distancia dos pontos não abrangidos pela nova torre
		// do 2° grupo
		if( possiveis_torres_abrangencia_de_pontos_do_grupo_1.length > 0 ){
			let torre_que_pega_mais = 0;
			for(var index_possiveis_torres = 0; index_possiveis_torres < possiveis_torres_abrangencia_de_pontos_do_grupo_1.length; index_possiveis_torres++){
				if(possiveis_torres_abrangencia_de_pontos_do_grupo_1[index_possiveis_torres].length >  possiveis_torres_abrangencia_de_pontos_do_grupo_1[torre_que_pega_mais].length){
					torre_que_pega_mais = index_possiveis_torres;
				}
			}
			console.log("TORRE QUE MAIS PEGA: ")
			let torre_mais_eficiente = possiveis_torres[torre_que_pega_mais];
			let pontos_do_grupo_0_atendidos = possiveis_torres_abrangencia_de_pontos_do_grupo_1[torre_que_pega_mais];
			console.table(torre_mais_eficiente);
			console.table(pontos_do_grupo_0_atendidos);

			let maior_diametro_grupo0 = 0;
			for(let index of grupo0){
				if( ~pontos_do_grupo_0_atendidos.indexOf(index) )continue;

				let distancias = mapa_distancias[index];
				for(let index_sub of grupo0){
					if( ~pontos_do_grupo_0_atendidos.indexOf(index_sub) )continue;

					let distancia = distancias[index_sub];
					maior_diametro_grupo0 = (maior_diametro_grupo0 + distancia + Math.abs( maior_diametro_grupo0 - distancia ))/2;
				}
			}
//			console.log("MAior diametro dos pontos restantes:"+(maior_diametro_grupo0/2));
			let maior_diametro_do_grupo_doque_a_torre = maior_diametro_grupo0 > (torre_mais_eficiente.RAIO*2);
			let torre_e_menor_que_o_diametro_padrao = (torre_mais_eficiente.RAIO*2) < maior_diametro;
			let diametro_do_grupo_e_menor_que_o_diametro_padrao = (maior_diametro_grupo0) < maior_diametro;

			if( maior_diametro_do_grupo_doque_a_torre && diametro_do_grupo_e_menor_que_o_diametro_padrao){
				maior_diametro = maior_diametro_grupo0;
			}else if(torre_e_menor_que_o_diametro_padrao){
				maior_diametro = torre_mais_eficiente.RAIO*2;
			}
		}
		
	} else if(maior_diametro_grupo1 < maior_diametro_grupo2){
		// GRUPO 1 buscar os ponto mais proximos do GRUPO 2 
		console.log("TENTANDO COMPaRTILHaR A TORRE pelo 1° grupo ")
		console.log("O Diametro atual é "+maior_diametro)
		let ponto = pontos[maior_distancia[0]];
		let distancias = mapa_distancias[maior_distancia[0]];

		let possiveis_torres = [];

		for(let index of grupo1){
			
			let ponto_grupo1 = pontos[index];
			let distancia = distancias[index];
			console.log("\t    ( "+ponto[0]+" , "+ponto[1]+" ) <== "+ distancia +" ==>  ( "+ponto_grupo1[0]+" , "+ponto_grupo1[1]+" )")
			console.log("\t       Distancia: "+distancia);
			console.log("\t       Raio: "+(distancia/2));
			// testar se funciona, atrazes do ponto medio entre a distancia dentro do GRUPO 2
			// testar se a distancia do ponto medio e iqual ou menor que o raio da distancia
			// Se funcionar e preciso, testar esse novo diametro de torre funciona no grupo anterior
			// recalculando sem usar os pontos abrangidos pela nova torre 2 
			if(maior_diametro < distancia)continue;

			let ponto_medio_x = ( (ponto[0]) + (ponto_grupo1[0]) )/2;
			let ponto_medio_y = ( (ponto[1]) + (ponto_grupo1[1]) )/2;
			let abrange_o_grupo1 = true;
			// verificando se a distancia do ponto medio chega nos pontos pertencentes ao grupo 2
			for(let index_sub of grupo0){
				let ponto_grupo2 = pontos[index_sub];
				let distancia_do_ṕonto_medio = Math.sqrt( Math.pow( ponto_medio_x - ponto_grupo2[0], 2) + Math.pow(ponto_medio_y - ponto_grupo2[1], 2));
				console.log("\t      ( "+ponto_grupo2[0]+" , "+ponto_grupo2[1]+" ) distancia do ponto medio: "+distancia_do_ṕonto_medio);
				// se algum desses pontos não puderem ser cobertos então esse não é o ciruculo certo
				if( (distancia_do_ṕonto_medio) > (distancia/2) )abrange_o_grupo1 = false;

			}
			
			if(abrange_o_grupo1)possiveis_torres.push({  "PONTO_CENTRAL":{x:ponto_medio_x,y:ponto_medio_y},"RAIO":distancia/2  });;
			
		}
		console.log("POSIVEIS TORRES COMPARTILHADAS:")
		console.table(possiveis_torres);
		// verifcar quantos pontos estão sendo abrangidos do grupo 1
		// pegar o circulo que mais abrange e depois 
		// verificar se o gurpo 1 consegue atender os pontos restantes
		// se não atender devemos aumentar o diametro da torre!
		// Deus me ajude a essa ser a solução!!! 
		possiveis_torres_abrangencia_de_pontos_do_grupo_1 = [];

		for(var i = 0;i<possiveis_torres.length;i++){possiveis_torres_abrangencia_de_pontos_do_grupo_1.push([])}

		for(var index_possiveis_torres = 0; index_possiveis_torres < possiveis_torres.length; index_possiveis_torres++){
			let ponto_medio_x = possiveis_torres[index_possiveis_torres].PONTO_CENTRAL.x;
			let ponto_medio_y = possiveis_torres[index_possiveis_torres].PONTO_CENTRAL.y;
			let raio = possiveis_torres[index_possiveis_torres].RAIO;
			for(let index_sub of grupo1){
				let ponto = pontos[index_sub];
				let distancia_do_ṕonto_medio = Math.sqrt( Math.pow( ponto_medio_x - ponto[0], 2) + Math.pow(ponto_medio_y - ponto[1], 2));
				
				// se algum desses pontos não puderem ser 
				if( (raio) >= (distancia_do_ṕonto_medio) ){
					possiveis_torres_abrangencia_de_pontos_do_grupo_1[index_possiveis_torres].push(index_sub);
					// registrar os pontos!!
				}

			}
		}

//		console.table(possiveis_torres_abrangencia_de_pontos_do_grupo_1);
		// verifica se é possivel essa situação, se sim começa a pegar o diametro novo e começa a pensar se funciona
		//  no 1° grupo, se o 1° grupo exigir um ciruculo maior verifica a distancia dos pontos não abrangidos pela nova torre
		// do 2° grupo
		if( possiveis_torres_abrangencia_de_pontos_do_grupo_1.length > 0 ){
			let torre_que_pega_mais = 0;
			for(var index_possiveis_torres = 0; index_possiveis_torres < possiveis_torres_abrangencia_de_pontos_do_grupo_1.length; index_possiveis_torres++){
				if(possiveis_torres_abrangencia_de_pontos_do_grupo_1[index_possiveis_torres].length >  possiveis_torres_abrangencia_de_pontos_do_grupo_1[torre_que_pega_mais].length){
					torre_que_pega_mais = index_possiveis_torres;
				}
			}
			console.log("TORRE QUE MAIS PEGA: ")
			let torre_mais_eficiente = possiveis_torres[torre_que_pega_mais];
			let pontos_do_grupo_0_atendidos = possiveis_torres_abrangencia_de_pontos_do_grupo_1[torre_que_pega_mais];
			console.table(torre_mais_eficiente);
//			console.table(pontos_do_grupo_0_atendidos);

			let maior_diametro_grupo0 = 0;
			for(let index of grupo1){
				if( ~pontos_do_grupo_0_atendidos.indexOf(index) )continue;

				let distancias = mapa_distancias[index];
				for(let index_sub of grupo0){
					if( ~pontos_do_grupo_0_atendidos.indexOf(index_sub) )continue;

					let distancia = distancias[index_sub];
					maior_diametro_grupo0 = (maior_diametro_grupo0 + distancia + Math.abs( maior_diametro_grupo0 - distancia ))/2;
				}
			}
//			console.log("MAior diametro dos pontos restantes:"+(maior_diametro_grupo0/2));
			if(maior_diametro_grupo0 > (torre_mais_eficiente.RAIO*2)){
				maior_diametro = maior_diametro_grupo0;
			}else maior_diametro = torre_mais_eficiente.RAIO*2;

			let menor_diametro_do_grupo_doque_a_torre = maior_diametro_grupo0 < (torre_mais_eficiente.RAIO*2);
			let torre_e_menor_que_o_diametro_padrao = (torre_mais_eficiente.RAIO*2) < maior_diametro;
			let diametro_do_grupo_e_menor_que_o_diametro_padrao = (maior_diametro_grupo0) < maior_diametro;

			if( menor_diametro_do_grupo_doque_a_torre && diametro_do_grupo_e_menor_que_o_diametro_padrao){
				maior_diametro = maior_diametro_grupo0;
			}else if(torre_e_menor_que_o_diametro_padrao){
				maior_diametro = torre_mais_eficiente.RAIO*2;
			}
		}

	}
	let diametro = maior_diametro;
	let raio = diametro / 2;
	let sobra = diametro % 2;

	let diametro_floor = (diametro);
	let raio_floor = (diametro_floor/2).toFixed(2);
	let sobra_floor = ( (raio).toFixed(4) - (raio).toFixed(2) );

//	if(sobra > 0.009) raio_floor = ( (raio + 0.01).toFixed(2))
//	else raio_floor = ( (raio).toFixed(2) );

	if(sobra_floor > 0.001) raio_floor = ( (raio + 0.01).toFixed(2))
	else raio_floor = ( (raio).toFixed(2) );

	console.table([  {"diametro":diametro,"raio":raio,"sobra":sobra},
					 {"diametro":diametro_floor,"raio":raio_floor,"sobra":sobra_floor}  ])

	console.log(raio_floor)
	index_linha += parseInt(tam_matrix[0]) + 1;

}while( index_linha < input_array.length );

//PONTO MEDIO ( ponto[0] + pontos[index_sub][0] )/2 + ( ponto[1] + pontos[index_sub][0] )/2;


