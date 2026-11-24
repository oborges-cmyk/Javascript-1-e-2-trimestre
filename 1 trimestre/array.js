//vale lembrar que o índice (numa lista de strings por exemplo) começa em 0
let frutas = ['Maçã', 'Banana', 'Laranja']
console.log(frutas.length);console.log(frutas); //mostra a quantidade de strings(frutas) e mostra a variável frutas

frutas.push('Manga');console.log(frutas);//adiciona a string manga e mostra a variável frutas depois da última mudança 

frutas.pop();console.log(frutas);  //remove última string e mostra novamente

let citricas=frutas.slice(1,3); //cria a variavel cítricas sendo definida por cortar o segundo e o quarta string da 
//variável frutas
console.log(citricas); //mostra a variável cítricas (filtrando somente as frutas citricas)
frutas.push('Kiwi');console.log(frutas);

frutas.slice(2,0,'Kiwi'); //remove a primeira e a terceira string da variável e adiciona a string de nome kiwi
console.log(citricas);console.log(frutas); //mostra a variável citricas depois da última mudança

let verduras = ['Cenoura','Batata'];
let comida = frutas.concat(verduras); //adiciona as frutas com a variável que contém verduras
console.log(verduras);console.log(comida);