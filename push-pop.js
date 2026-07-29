// retomada de conteúdo
// utilizar o array da aula anterior e usar o push e o pop dentro do array
// const notas = [10, 6.5, 8, 7.5];

const alunos = ["JOAO", "JULIANA", "ANA", "LEONARDO"];
const notas = [10, 6.5, 8, 7.5];

const listaDeAlunosMedias = [];

function calculaMedia(notasDoAluno) {
  let soma = 0;
  for (let i = 0; i < notasDoAluno.length; i++) {
    soma += notasDoAluno[i];
  }
  return soma / notasDoAluno.length;
}

function exibirMediaAlunos(alunos, notas) {
  if (alunos.length !== notas.length) {
    console.log("Erro: a lista de alunos e notas não têm o mesmo tamanho.");
    return;
  }

  for (let i = 0; i < alunos.length; i++) {
    const media = calculaMedia([notas[i]]);
    let situacao;

    if (media >= 7) {
      situacao = "Aprovado";
    } else {
      situacao = "Reprovado";
    }

    listaDeAlunosMedias.push(`${alunos[i]} - média: ${media} (${situacao})`);
  }
}

exibirMediaAlunos(alunos, notas);
console.log("Lista de alunos e médias:", listaDeAlunosMedias);

const alunoRemovido = alunos.pop();
const notaRemovida = notas.pop();
console.log("Aluno removido:", alunoRemovido, "com nota", notaRemovida);

alunos.push("MARIA");
notas.push(9);
console.log("Alunos após adicionar:", alunos);
console.log("Notas após adicionar:", notas);

listaDeAlunosMedias.length = 0; // limpar antes de recalcular
exibirMediaAlunos(alunos, notas);
console.log("Lista atualizada de alunos e médias:", listaDeAlunosMedias);
