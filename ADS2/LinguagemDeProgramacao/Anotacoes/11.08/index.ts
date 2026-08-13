// Aprendendo TypeScript - Ferramentas básicas


// Variáveis e tipos primitivos
const nome: String = "Alberto";
const idade: number = 25;
const altura: number = 1.75;
const estudante: boolean = true;

let pontuacao: number = 100;
pontuacao = 150;

console.log(`${nome} tem ${idade} anos e ${altura} de altura.`);


// Tipos especiais
let qualquer: any = "texto";   // aceita qualquer tipo (evitar usar)
let indefinido: undefined = undefined;   // existe mas não tem valor ainda
let vazio: null = null;   // vazio de propósito
let nada: void;    // usado em funções que não retornam nada