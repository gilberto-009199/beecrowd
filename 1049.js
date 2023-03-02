const input = require('fs').readFileSync('stdin', 'utf-8')
//const input = require('fs').readFileSync('/dev/stdin', 'utf-8')

let dictAnimalsClasses = { };

dictAnimalsClasses["vertebrado"] = {}
dictAnimalsClasses["vertebrado"]["ave"] = {}
dictAnimalsClasses["vertebrado"]["ave"]["carnivoro"] = "aguia";
dictAnimalsClasses["vertebrado"]["ave"]["onivoro"] = "pomba";

dictAnimalsClasses["vertebrado"]["mamifero"] = {}
dictAnimalsClasses["vertebrado"]["mamifero"]["onivoro"] = "homem"
dictAnimalsClasses["vertebrado"]["mamifero"]["herbivoro"] = "vaca"

dictAnimalsClasses["invertebrado"] = {}

dictAnimalsClasses["invertebrado"]["inseto"] = {}
dictAnimalsClasses["invertebrado"]["inseto"]["hematofago"] = "pulga"
dictAnimalsClasses["invertebrado"]["inseto"]["herbivoro"] = "lagarta"

dictAnimalsClasses["invertebrado"]["anelideo"] = {}
dictAnimalsClasses["invertebrado"]["anelideo"]["hematofago"] = "sanguessuga"
dictAnimalsClasses["invertebrado"]["anelideo"]["onivoro"] = "minhoca"


const valores = input.split('\n')


console.log(dictAnimalsClasses[valores[0]][valores[1]][valores[2]]);