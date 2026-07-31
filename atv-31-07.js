// calcular a média entre notas usando o for
//10, 6, 5, 8 e 7.5

const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for (let i = 0; i < notas.length; i++) {
  somaDasNotas += notas[i];
}

console.log(somaDasNotas);

//------------------------------------------------------------------

const notas2 = [10, 6.5, 8, 7.5];

let somaDasNotas2 = 0;

for (let nota of notas2) {
  somaDasNotas2 += nota;
}

const media = somaDasNotas2 / notas.length;

console.log('A média das notas é ${media}');
