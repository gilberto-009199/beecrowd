const input = require('fs').readFileSync('stdin', 'utf-8')
//const input = require('fs').readFileSync('/dev/stdin', 'utf-8')

let ddd_input = input.split('\n').shift();


let dict_DDD_cidades = { };

dict_DDD_cidades["61"] = "Brasilia";
dict_DDD_cidades["71"] = "Salvador";
dict_DDD_cidades["11"] = "Sao Paulo";
dict_DDD_cidades["21"] = "Rio de Janeiro";
dict_DDD_cidades["32"] = "Juiz de Fora";
dict_DDD_cidades["19"] = "Campinas";
dict_DDD_cidades["27"] = "Vitoria";
dict_DDD_cidades["31"] = "Belo Horizonte";


const DDD = typeof dict_DDD_cidades[input] != 'undefined' ? dict_DDD_cidades[input] : "DDD nao cadastrado";

console.log(DDD);


