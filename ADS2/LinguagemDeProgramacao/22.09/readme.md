# Aula 05 - testes com vitest

Nessa aula aprendemos sobre testes unitários, criamos um arquivo separado dentro de src, index.ts
aonde fica as funções.

Essas funções são usadas no arquivo test/index.test.ts, nos testes temos o 
- describe - o nome do bloco de testes (o que aquele bloco vai testar).
- it - o nome do teste (teste específico dentro do bloco).
- expect - recebe função com os valores testados e o resultado esperado.

exemplo
```
describe("funcaoSomar) () => {
    it("TesteDeSoma) () => {
        it(funcaoSomar(2 , 3)).toBe(5) // toBe - resultado esperado
    }
}
```

## Configurações Iniciais


### Comandos
- npm init -y
- npm i -D typescript
- npm i -D @types/node
- npm i -D vitest

- npx tsc --init


### tsconfig
- rootDir - descomentar
- outDir - descomentar

- verbatimModuleSyntax: false