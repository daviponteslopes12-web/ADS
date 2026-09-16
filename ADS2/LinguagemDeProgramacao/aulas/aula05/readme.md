# Aula 05 — Interfaces, Classes, Types e Destructuring

## Tópicos abordados

* Interfaces em TypeScript.
* Criação e utilização de classes.
* Propriedades e métodos de classes.
* Type aliases (`type`).
* Diferenças entre `type` e `interface`.
* Destructuring de objetos.
* Destructuring de arrays.
* Organização e reutilização de tipos.

## Tecnologias e ferramentas

* TypeScript
* Node.js
* VS Code

## Objetivo

Aprender a modelar dados, criar estruturas reutilizáveis e organizar o código utilizando os recursos de tipagem e orientação a objetos do TypeScript.

## Exemplo

```ts
interface Produto {
    nome: string;
    preco: number;
}

class ProdutoService {
    constructor(private produto: Produto) {}

    mostrarProduto() {
        const { nome, preco } = this.produto;

        console.log(nome, preco);
    }
}

const produto: Produto = {
    nome: "Batata",
    preco: 12.53
};

const service = new ProdutoService(produto);

service.mostrarProduto();
```
