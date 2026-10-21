# Aula 06 — Testes com Vitest

## Objetivo

Aprender os fundamentos de testes automatizados em TypeScript utilizando o Vitest.

## Conteúdos estudados

### Testes automatizados

Testes são códigos criados para verificar se uma função ou parte da aplicação está funcionando conforme o esperado.

Exemplo:

```ts
function somar(a: number, b: number): number {
    return a + b;
}
```

Teste:

```ts
expect(somar(2, 3)).toBe(5);
```

### `describe`

Usado para agrupar testes relacionados.

```ts
describe("somar", () => {
    // testes relacionados a somar
});
```

### `test` e `it`

Representam um teste individual.

```ts
test("deve somar dois números", () => {
    expect(somar(2, 3)).toBe(5);
});
```

`test` e `it` possuem o mesmo comportamento no Vitest.

### `expect`

Recebe o resultado que queremos verificar.

```ts
expect(somar(2, 3))
```

### Matchers

Matchers definem o que esperamos do resultado.

Exemplo:

```ts
expect(somar(2, 3)).toBe(5);
```

O `toBe()` verifica se o valor recebido corresponde ao valor esperado.

Também foram apresentados outros matchers, como:

```ts
toEqual()
toContain()
toBeTruthy()
toBeFalsy()
```

### Testando regras e comportamentos

Os testes devem verificar o comportamento esperado da aplicação, e não simplesmente repetir a implementação da função.

Por exemplo, em uma função que verifica se um número é par:

```ts
expect(ehPar(10)).toBe(true);
expect(ehPar(7)).toBe(false);
```

O teste verifica o comportamento da função.

### Casos de teste

Uma função pode possuir diferentes situações que precisam ser testadas:

* caso normal;
* caso alternativo;
* valores limites;
* entradas inválidas;
* situações que devem gerar erros.

Exemplo de limite:

```ts
expect(ehMaiorDeIdade(18)).toBe(true);
expect(ehMaiorDeIdade(17)).toBe(false);
```

### Testando erros

Quando uma função deve lançar um erro, podemos utilizar `toThrow()`.

```ts
expect(() => dividir(10, 0)).toThrow();
```

Também podemos verificar a mensagem:

```ts
expect(() => dividir(10, 0))
    .toThrow("Não é possível dividir por zero");
```

A função é passada dentro de uma função anônima para que o Vitest possa executar a função e verificar se ela lança o erro.

### Falha de um teste

Quando o resultado recebido é diferente do esperado, o Vitest informa a diferença.

Exemplo:

```text
Expected 6
Received 5
```

Isso permite identificar que o comportamento da aplicação não corresponde ao comportamento esperado pelo teste.

## Organização utilizada

```text
aula06/
├── src/
│   ├── index.ts
│   └── test/
│       └── index.test.ts
└── package.json
```

## Ferramentas e tecnologias

* TypeScript
* Node.js
* Vitest
* VS Code
* npm

## Conceito principal aprendido

Testes automatizados funcionam como uma proteção contra regressões. Eles permitem verificar se regras e comportamentos importantes continuam funcionando depois que o código é alterado.

Um teste não deve depender de como a função foi implementada internamente, mas do comportamento que ela deve apresentar externamente.

## Assunto extra — fora da aula

No uso profissional do Vitest também existem conceitos como:

* mocks;
* spies;
* stubs;
* testes de APIs;
* testes de funções que dependem de banco de dados;
* cobertura de testes.

Esses conceitos podem ser estudados posteriormente.
