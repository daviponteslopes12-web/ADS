# Aula 05 - testes com vitest

Nessa aula aprendemos sobre testes unitários, criamos um arquivo separado dentro de src, index.ts
aonde fica as funções.

Essas funções são usadas no arquivo test/index.test.ts, nos testes temos:

- describe - o nome do bloco de testes (o que aquele bloco vai testar).
- it - o nome do teste (teste específico dentro do bloco).
- expect + toBe - recebe função com os valores testados e o resultado esperado.
---

**exemplo**

```
describe("funcaoSomar) () => {
    it("TesteDeSoma) () => {
        it(funcaoSomar(2 , 3)).toBe(5) // toBe - resultado esperado
    }
}
```

- Pense que você coloca no teste o resultado esperado de uma função com valores específicos.
- Sua função precisa ser feita para não quebrar e retornar um valor válido para o teste.
- No teste você valida o que pode passar e a IA escreve uma função que passa naquele teste.

---

## Configurações Iniciais

### Comandos
- npm init -y
- npm i -D typescript
- npm i -D @types/node
- npm i -D vitest

- npx tsc --init

---

### tsconfig
- rootDir - descomentar
- outDir - descomentar

- verbatimModuleSyntax: false
