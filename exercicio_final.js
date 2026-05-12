const idadeUsuario = 15
const idadeMinima = 18

let nome = "Otavio"
let sobrenome = "Rodrigues Borges"
let nomeCompleto="Otávio Rodrigues Borges"

console.log(nome+" "+sobrenome)

var podeEntrar = idadeUsuario-idadeMinima

console.log(idadeUsuario===idadeMinima)

const apresentacao = `meu nome é ${nomeCompleto}, seu acesso é: ${podeEntrar}`
const contaMatematica= `faltam ${idadeMinima-idadeUsuario} anos para você atingir a meta`

//falta corrigir
/* 

Uma frase usando Template String que diga: "Olá, [nomeCompleto], seu acesso é: [podeEntrar]".

O resultado de uma conta matemática simples: "Faltam [idadeMinima - idadeUsuario] anos para você 
atingir a meta" (ou apenas o resultado da subtração).*/