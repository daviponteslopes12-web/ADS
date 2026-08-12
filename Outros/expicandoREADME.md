# Exemplo Simples de Markdown
Este é um README curto que mostra exemplos comuns de Markdown 
---


## Títulos

# Título nível 1
## Título nível 2
### Título nível 3
---


## Ênfase

*itálico* ou _itálico_
**negrito** ou __negrito__
***negrito + itálico***
~~riscado~~
---


## Listas
Não ordenada:

- Item A
- Item B
  - Subitem B.1


Ordenada:

1. Primeiro
2. Segundo
---


## Listas de tarefa (Task lists)

- [ ] Tarefa pendente
- [x] Tarefa concluída
---


## Citação (blockquote)

> Esta é uma citação.
> Outra linha da citação.
---


## Linha horizontal
Use `---`, `***` ou `___` em linha separada.
---


## Código inline e blocos de código
Inline:

Use `console.log()` para imprimir.


Bloco com destaque:

```javascript
function ola() {
  console.log("Olá, mundo!");
}
```


Exemplo inline: `console.log('Olá')`

Bloco:

```javascript
function ola() {
  console.log("Olá, mundo!");
}
```
---


## Links e imagens
```markdown
[GitHub](https://github.com)
![Logo GitHub](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)
```

[GitHub](https://github.com)  
![Logo GitHub](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)
---


## Tabelas
```markdown
| Nome  | Idade |
| ----- | ----: |
| Ana   |  28   |
| João  |  34   |
```

| Nome  | Idade |
| ----- | ----: |
| Ana   |  28   |
| João  |  34   |
---


## Escapando caracteres
Para mostrar símbolos literais, use `\`:

\*não vira itálico\*


Exemplo: \*não vira itálico\*
---


## Menções e referências do GitHub
- `@usuario` — menciona alguém
- `#123` — referencia issue/PR do mesmo repo
- `commit 1a2b3c4` — vira link se for SHA válido

Ex.: @octocat, #1
---


## HTML embutido
Você pode usar HTML simples quando precisar:
```markdown
<p>Parágrafo em HTML</p>
<span style="color: red">texto vermelho</span>
```
---


## Emoji
```markdown
:sparkles: :smile:
```
:sparkles: :smile:
---