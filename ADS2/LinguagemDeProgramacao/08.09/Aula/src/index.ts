const notas: number[] = [7, 8, 9, 6];

console.log("===DADOS DO ARRAY===");
console.log(`PRIMEIRO VALOR: ${notas[0]}`);
console.log(`ULTIMO VALOR: ${notas[notas.length - 1]}`);
console.log(`TAMANHO: ${notas.length}`);

console.log("===PROPRIEDADES DE ARRAY===");
console.log(`ADICIONAR NO FINAL: .push()`);
console.log(`REMOVER ULTIMO: .pop()`);
console.log(`ADICIONAR NO INICIO: .unshift()`);
console.log(`REMOVER PRIMEIRO: .shift()`);

notas.forEach((nota) => {
    console.log(nota);
});

/*
.map() -> cria um novo array apartir do original (de todas as 100 notas, quero que cada uma seja mostrada)
.filter() -> cria novo array com um filtro (de 100 notas quero apenas as maiores que 6)
.find() -> faz uma busca dentro do array (de 100 notas quero a primeira que tenha número par)
.reduce() -> reduz o array a um único valor (de 100 notas quero a soma de todas)
NÃO MUDAM O ARRAY ORIGINAL, ELES CRIAM UM NOVO, DA PARA FAZER ENCADEADO .filter().map()
*/

//spread e destructuring (desestruturação)
// spread -> espalha os itens do array em outro, exemplo a baixo;
const copiaNotas = [...notas]; // Esse daqui faz uma cópia, não altera o notas.
const copiaNotas2 = notas; // Esse daqui faz uma referencia, se o copiaNotas2 mudar, o notas muda também.

const notas2: number[] = [2, 5, 6, 7];
const juntandoNotas = [...notas, ...notas2]; // aqui eu crio um array com os valores de outros 2 arrays.

// desestruturar um array, n1 recebe o valor da posição 0 do array, e assim vai.
const [n1, n2, n3, n4] = notas;


// Matrizes (arrays de arrays), TypeScript, uma linha pode ter várias colunas
const tabela: number[][] = [];


/**
 * Métodos de string 
 * .toLowerCase()
 * .toUpperCase()
 * .trim()
 * .split()
 * .slice()
*/ 

