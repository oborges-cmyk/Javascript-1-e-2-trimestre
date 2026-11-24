const idadeUsuario = 15;
const idadeMinima = 18;

let nome = "Otavio";
let sobrenome = "Rodrigues Borges";
let nomeCompleto="Otávio Rodrigues Borges";

var podeEntrar = idadeUsuario-idadeMinima;
podeEntrar=false;

const apresentacao = `Olá ${nomeCompleto}, seu acesso é: ${podeEntrar}`;
const contaMatematica= `faltam ${idadeMinima-idadeUsuario} anos para você atingir a meta`;

console.log(apresentacao)
console.log(contaMatematica)