/**
 * Aula 05 - Objetos, Interfaces e tipos
 */

//==================================================

// Objetos

//JS
const aluno = {
    nome: "Davi",
    idade: 18,
    curso: "ADS"
};

//TS -> aqui ele sabe cada tipo de cada chave do objeto.
const usuaio: {
    nome: string;
    idade: number;
    curso: string;
} = {
    nome: "Davi",
    idade: 20,
    curso: "ADS"
};

//==================================================

// O problema da repetição
/**
 * Imaginando que temos vários alunos:
 * 
 */

const aluno01: {
    nome: string;
    idade: number;
    curso: string;
} = {
    nome: "Davi",
    idade: 28,
    curso: "ADS"
};

const aluno02: {
    nome: string;
    idade: number;
    curso: string;
} = {
    nome: "João",
    idade: 22,
    curso: "ADS"
};

//==================================================

/**
 * Estamos repetindo a definição.
 * Aí que entra type e interface, podemos criar um tipo:
 */

type Aluno = {
    nome: string;
    idade: number;
    curso: string;
};

// agora:

const aluno03: Aluno = {
    nome: "José",
    idade: 33,
    curso: "ADS"
};

//==================================================

/**
 * O type funciona como um molde que define uma estrutura e todo o aluno segue essa estrutura.
 */

type Produto = {
    id: number;
    nome: string;
    preco: number;
    estoque: number;
};

const produto1: Produto = {
    id: 1,
    nome: "Batata",
    preco: 12.50,
    estoque: 82
};

const produto2: Produto = {
    id: 2,
    nome: "Cenoura",
    preco: 8.21,
    estoque: 122
};

//==================================================

// Interface tambem permite definir a estrutura de um objeto:
interface Pessoa {
    id: number;
    nome: string;
    idade: number;
}

const pessoa: Pessoa = {
    id: 1,
    nome: "pessoa",
    idade: 45
}

//==================================================

/**
 * Para objetos simples, eles parecem a mesma coisa.
 * A diferença entre eles está quando começamos a 
 * trabalhar com extensão, união de tipos e composição.
 * type -> tipos, unions, combinações de tipos
 * interface -> contratos/estruturas de objetos e extensão
 * 
 * type funciona melhor com union (string | number) 
 * Interface pode ser extendida:
 */

interface Animal {
    nome: string;
    idade: number;
}

interface Cachorro extends Animal {
    raca: string;
}

const animal01: Cachorro = {
    nome: "Bart",
    idade: 2,
    raca: "vira-lata"
}
// Agora Cachorro possui nome, idade e raca

//==================================================

/**
 * Para propriedades opcionais adicionamos '?'
 */

interface Usuario {
    nome: string;
    idade?: number; // idade opcional
}

const usuario1: Usuario = {
    nome: "Usuario"
}

// Exercício
interface Produto2 {
    nome: string;
    preco: number;
    descricao?: string;
}

const produto3: Produto2 = {
    nome: "Biscoito",
    preco: 12.32,
    descricao: "apenas um biscoito"
}

const produto4: Produto2 = {
    nome: "Bolacha",
    preco: 12.32,
}
// Uma consequencia importante é que quando tentamos acessar uma 
// propriedade opcional de um objeto, ela pode vir string | undefined, porque a propriedade pode ou não existir
// Isso será importante quando formos falar de funções e validações.

//==================================================

/**
 * readonly - podemos impedir propriedades de serem alteradas com readonly.
 */

interface Produto3 {
    readonly id: number;
    nome: string;
}

const produto5: Produto3 = {
    id: 1, // valor do id é igual a 1 (id é uma propriedade readonly)
    nome: "Biscoito"
}

produto5.nome = "Bolacha";
//produto5.id = 2; vai dar um erro porque o valor de id não pode ser alterado.

//==================================================

// Métodos

//JS
const usuarioMetodoJS = {
    nome: "Davi",

    apresentar() {
        console.log(`Olá meu nome é ${this.nome}`);
    }
}

usuarioMetodoJS.apresentar();

// em TS podemos tipar esse método da interface
interface UsuarioMetodoTS {
    nome: string;
    
    apresentar(): void;
}

const usuario: UsuarioMetodoTS = {
    nome: "Roberto",

    apresentar() {
        console.log(`Função void não recebe e não retorna nada`);
    }
}

//==================================================

interface ProdutoLoja {
    readonly id: number;
    nome: string;
    preco: number;
    estoque: number;
    categoria?: string;
}

const produto6: ProdutoLoja = {
    id: 1,
    nome: "remedio",
    preco: 14.21,
    estoque: 32,
    categoria: "medicamento"
}

const produto7: ProdutoLoja = {
    id: 2,
    nome: "remedio2",
    preco: 14.22,
    estoque: 55,
}