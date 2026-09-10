/**
 * Aula 03 - TypeScript: 
 * Variáveis, 
 * Constantes, 
 * Operadores e Expressões
 */

//==================================================

/**
 * A principal ideia do TypeScript é adicionar
 * um sistema de TIPOS ao JavaScript.
 * 
 * Ou seja, um tipo pode ser definido para uma variável
 * e vai dar erro se tentar colocar outro tipo a variável.
 * 
 * O TypeScript descobre erros antes de rodar a aplicação.
 * 
 * 
 * JavaScript ->
 * let idade = 20;
 * idade = "vinte";
 * 
 * 
 * TypeScript ->
 * let idade: number = 20;
 * idade: "vinte";
 *  
 */

//==================================================
// boolean
let ativo: boolean = true;

// string
let texto: string = "texto";

// numero
let numero: number = 18;

// array de numeros
const numeros: number[] = [2, 1.2, -3, 4];

// array de string
const textos: string[] = ["Olá", "B", "Type-Script"];

// array de numero e string
const textoNumeros: (number | string)[] = [10, "10"];

// objeto
let usuario: {nome: string; idade: number } = {
    nome: "Davi",
    idade: 20
};

// outros
/**
 * any
 * unknown
 * void
 * null
 * undefined
 * never
 * object
 */

//==================================================

// Inferência de tipos - 
// Aqui mesmo sem declarar um tipo, o TypeScript entende qual o tipo da variável pelo valor dela.

//let idade = 20;
//idade = "ERRO";


//==================================================

/** Union Types
 * É quando uma variável pode aceitar mais de um tipo.
 * No JavaScript isso seria naturalmente permitido, no TypeScript, escolhemos quais tipos são permitidos.
 */ 

let id: string | number = 50;

id = 10;
id = "token";
//id = true; -> ERRO

function mostrarId(id: number | string) {

    if (typeof id === "string") {
        console.log(id.toUpperCase());
    } else {
        console.log(id.toFixed(2));
    }
}

//==================================================

// Arrays em TypeScript
/**
 * Em JavaScript, podemos colocar qualquer tipo dentro do mesmo array:
 * const valores = [10, "10", true];
 * 
 * Em TypeScript você pode escolher qual tipo o array vai aceitar:
 * const nomes: string[] = ["Raul", "Alisson", "Felipe"];
 * 
 * Uma forma alternativa de escrever:
 * const nomes: Array<string> = ["Raul", "Alisson", "Felipe"];
 */

const nomes: string[] = ["A", "B", "C"];
const idades: number[] = [6, 8, 18];
const aprovados: boolean[] = [true, false, false];

//==================================================

/** Any
 * Existe um tipo que basicamente diz para o TypeScript "Não faça verificação de tipo aqui", é o any
 * let valor: any = 10;
 * valor = "olá";
 * valor = true;
 * valor = [1, 2, 3];
 * 
 * Na prática any deve ser evitado quando possível, por perder uma das principais vantagens do TypeScript, a proteção de tipos que ele oferece.
 * 
 */

// Esse exemplo vai dar um erro na hora de rodar, toUpperCase é uma propriedade do tipo string, e o valor da variável é boolean.
let valor: any = "Olá";

valor = 20;
valor = true;
valor.toUpperCase();



/** Unknown
 * tipo unknown também permite que uma variável receba qualquer valor, max existe uma diferença em relação ao any.
 * com o unknown o TypeScript exige que você verifique o tipo antes de usar aquele valor.
 */

let valor01: unknown = "Olá";

valor01 = 20;
valor01 = true;
//valor01.toUpperCase(); -> descomente e veja o erro.

// Ele basicamente fala que com unknown o tipo deve ser verificado:
if (typeof valor01 === "string") {
    valor01.toUpperCase();
};

//Isso é chamado de narrowing, você vai reduzindo as possibilidades de tipo através de verificações.



/** null e undefined
 * Em JavaScript quando uma variável é declarada sem valor, ela é considerada undefined.
 * Já null, representa uma ausência de valor definida, (vocẽ quer que seja null ou pode aceitar null).
 * 
 * No TypeScript, podemos declarar isso.
 */

let nome01: string | null;
nome01 = "Davi";
nome01 = null;

// O mesmo pode ser feito com undefined.
// Isso é comum quando trabalhamos com dados opcionais que podem ser null.
let nome02: string | undefined;
nome02 = "Lopes";
nome02 = undefined;
