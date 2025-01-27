let entradaString = 'candidato'
let arrayString = entradaString.split("")
let numCaracteres = arrayString.length
let i;
let arrayFinal = new Array();

for (i=0; i<numCaracteres;i++){
    arrayFinal.push(arrayString.at(numCaracteres-1-i))
}

let invertido = arrayFinal.join("");

console.log(invertido);