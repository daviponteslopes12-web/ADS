# Aula 04 — Arrays e Strings

## Tópicos abordados

* Arrays em TypeScript.
* Tipagem de arrays.
* Arrays de números e strings.
* Métodos de arrays.
* Manipulação de strings.
* Percorrer e trabalhar com coleções de dados.

## Tecnologias e ferramentas

* TypeScript
* Node.js
* VS Code

## Objetivo

Aprender a trabalhar com listas de dados e manipular strings utilizando os recursos do TypeScript.

## Exemplo

```ts
const nomes: string[] = ["Davi", "Ana", "Carlos"];

const nomesMaiusculos = nomes.map(nome => nome.toUpperCase());

console.log(nomesMaiusculos);
```
