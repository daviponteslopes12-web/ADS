// TypeScript é uma linguagem Estática e fortemente tipada, ou seja, ela faz a verificação das variáveis na hora e obrigatóriamente precisa declarar o tipo da variável.


//=== VARIÁVEIS E TIPOS ===
const texto: string = "Texto genérico";
const numero: number = 25;
const decimal: number = 3.14
const binario: boolean = true;
const nada: null = null;
const indefinido: undefined = undefined;

// any desliga a verificação de tipo (Evitar!)
let qualquer: any = 123; 
qualquer = "virou texto";
qualquer = true;
qualquer = 12.12


// === ARRAYS ===
// 2 formas: 
const numeros: number[] = [1, 2, 3];

const nomes: Array<string> = ["Teste01", "Teste02"];



// === TYPE ALIAS E INTERFACES ===
//  cria um valor e não uma variável, usado em verificação de tipos.

// EXEMPLO: ele estabelece quais tipos cada campo deve ter, se algum campo tiver um tipo diferente ele vai dar erro!

type Usuario = {
    id: number;
    nome: string;
    email: string;
};

const usuario1: Usuario = {
    id: 1,
    nome: "João",
    email: "joao@gmail.com"
};

const usuario2: Usuario = {
    id: 2,
    nome: "Maria",
    email: "maria@gmail.com"
};

// const usuario3: Usuario = {
//     id: 3,
//     nome: "Marcos",
//     email: true  ERRO!!!
// };



// === UNIÃO E INTERSECÇÃO ===
// Permite atribuir mais de um tipo a uma variável, isso é UNIÃO
let id: number | string;

id = 123; 
id = "ABC";

// Essa é a INTERSECÇÃO, permite juntar 2 atributos de um objeto em um
type Pessoa = { nome: string };
type Funcionario = { salario: number };

type FuncionarioCompleto = Pessoa & Funcionario;

let func: FuncionarioCompleto = {
    nome: "João",
    salario: 5000
};