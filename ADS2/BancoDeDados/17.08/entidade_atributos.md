## Tópicos de aprofundamento em bancos de dados
- Motores SGBD 
- Interfaces gráficas
- NoSQL
- SQL (linguagem)
- SGBD
- Bancos relacionais e não relacionais
- Entidades
- Atributos
- Relacionamentos
- **Raciocínio de modelagem de dados**

---

## Anotações

**Entidade forte**
- Consegue existir sozinha no banco.
- Possui identificação própria (PK)

*** Como identificar? ***
Veja se os dados da entidade podem ser identificados sem auxílio de nenhuma outra entidade.
---
**Entidade Fraca**
- Depende de uma outra entidade para existir ou ser identificada.

*** Como identificar? ***
Entidade fraca = depende de outra entidade para identificar seus registros.

---

## **Atributos**
- **Simples** -> Atributo que não precisa ser dividido em partes menores. (idade)
- **Composto** -> Pode ser dividido em partes menores. (nome_completo).
- **Multivalorado** -> Atributo que pode possuir vários valores para a mesma entidade (telefone).
- **Derivado** -> Atributo em que o valor pode ser calculado apartir de outro dado (idade através de data_nascimento).
