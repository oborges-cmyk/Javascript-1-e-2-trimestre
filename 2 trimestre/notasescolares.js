//Calculadora de médias/Sistema de notas escolares simples
//Enunciado: se hipotéticamente, temos 3 alunos com 3 notas respectivas, para sabermos se ele passou ou não calculamos a média números/total de algarismos

//Notas dos alunos
const aluno1=[1,2,3];
const aluno2=[4,5,6];
const aluno3=[7,8,9];

//IA daqui para baixo

// Função para calcular a média
function calcularMedia(notas) {
    const soma = notas.reduce((acumulador, nota) => acumulador + nota, 0); // Soma todas as notas
    return soma / notas.length; // Divide pela quantidade de notas
}

// Calculando a média de cada aluno
const mediaAluno1 = calcularMedia(aluno1);
const mediaAluno2 = calcularMedia(aluno2);
const mediaAluno3 = calcularMedia(aluno3);

// Verificando se cada aluno passou (média mínima: 6)
console.log(`Aluno 1: Média = ${mediaAluno1} - ${mediaAluno1 >= 6 ? 'Aprovado' : 'Reprovado'}`);
console.log(`Aluno 2: Média = ${mediaAluno2} - ${mediaAluno2 >= 6 ? 'Aprovado' : 'Reprovado'}`);
console.log(`Aluno 3: Média = ${mediaAluno3} - ${mediaAluno3 >= 6 ? 'Aprovado' : 'Reprovado'}`);

//da TV

//Função para calcular a média
//const media=[aluno1,aluno2,aluno3]
//for 