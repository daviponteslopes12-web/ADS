# Resumo — Quando usar cada estrutura

---

## 1. Objeto com Métodos

```javascript
export const guildaService = {
    async listar() { ... },
    async buscarPorId(id) { ... },
    async criar(dados) { ... },
    async deletar(id) { ... }
};
```

**Quando usar:** agrupar funções que trabalham juntas com o mesmo tema.

**Usa em:** repository, service, controller.

---

## 2. Classe

```javascript
class Guilda {
    constructor(nome) {
        this.nome = nome;
        this.herois = [];
    }

    adicionarHeroi(heroi) {
        this.herois.push(heroi);
    }
}

const g1 = new Guilda("Dragões");
const g2 = new Guilda("Lobos");
```

**Quando usar:** precisa criar vários objetos com a mesma estrutura.

**Usa em:** models com ORM, regras de negócio complexas.

---

## 3. Função solta

```javascript
export function formatDate(date) {
    return new Date(date).toLocaleDateString('pt-BR');
}
```

**Quando usar:** função pequena, reutilizável, sem pertencer a uma entidade.

**Usa em:** utils, helpers.

---

## 4. Arrow function inline

```javascript
const ativos = todos.filter(g => g.ativo === true);
const nomes = ativos.map(g => g.nome);
```

**Quando usar:** função rápida descartável, dentro de filter, map, forEach.

**Usa em:** qualquer lugar como callback.

---

## Tabela rápida

```
Objeto com métodos    →  repository, service, controller
Classe                →  criar várias instâncias iguais
Função solta          →  utilitários reutilizáveis
Arrow function inline →  callbacks rápidos (filter, map)
```

---

Só isso. Não precisa complicar mais. Quer seguir para o fluxo de envio de dados do frontend para o backend?