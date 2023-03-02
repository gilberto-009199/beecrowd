const input = require('fs').readFileSync('stdin', 'utf-8')
//const input = require('fs').readFileSync('/dev/stdin', 'utf-8')

const valores = input.split(' ')

const inicio_hora = parseFloat(valores[0])
const inicio_minuto = parseFloat(valores[1])

const fim_hora = parseFloat(valores[2])
const fim_minuto = parseFloat(valores[3])


if ( inicio_hora == fim_hora && inicio_minuto == fim_minuto )return console.log("O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)");


horas 	= (24 - inicio_hora + fim_hora) % 24;
minutos = (60 - inicio_minuto + fim_minuto) % 60;

if(inicio_minuto > fim_minuto && inicio_hora != fim_hora )horas -= 1;

// 0 10 0 9 situacao
if(inicio_hora == fim_hora && inicio_minuto > fim_minuto)horas = 23;

console.log("O JOGO DUROU "+ horas +" HORA(S) E "+ minutos +" MINUTO(S)");

