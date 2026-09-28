# Compliance e Segurança — Fundamentos de Criptografia

## 1. Chaves criptográficas

Chaves criptográficas são valores utilizados por algoritmos de criptografia para proteger, assinar ou verificar dados.

Elas participam principalmente de três propriedades:

- **Confidencialidade:** impede que pessoas não autorizadas compreendam o conteúdo.
- **Integridade:** permite verificar se o conteúdo foi alterado.
- **Autenticidade:** permite verificar a origem de uma informação.

### Exemplo prático

Em uma aplicação web, uma chave secreta pode ser usada para gerar uma assinatura. Quem possui a chave apropriada consegue verificar se a informação realmente foi produzida por uma fonte confiável.

---

## 2. Criptografia simétrica

A criptografia simétrica utiliza **uma única chave secreta** para criptografar e descriptografar os dados.

```text
Chave secreta
     ↓
Criptografar → Dados protegidos → Descriptografar
     ↑                                  ↑
     └──────── mesma chave ────────────┘
```

### Características

- É rápida.
- É adequada para grandes quantidades de dados.
- A chave precisa ser mantida em segredo.
- O principal desafio é compartilhar a chave com segurança.

### Exemplo real

O **AES** é um algoritmo de criptografia simétrica amplamente utilizado para proteger dados.

---

## 3. Criptografia assimétrica

A criptografia assimétrica utiliza duas chaves matematicamente relacionadas:

- **Chave privada:** deve ser protegida e mantida em segredo.
- **Chave pública:** pode ser compartilhada.

```text
Chave privada → operação de assinatura
Chave pública → verificação
```

Ela é utilizada em situações como:

- Assinatura digital.
- Autenticação.
- Troca segura de chaves.

### Exemplo real

Em um sistema com vários serviços, cada serviço pode possuir a chave pública de um servidor para verificar assinaturas sem receber a chave privada.

---

## 4. Assinatura digital

A assinatura digital serve principalmente para verificar:

- **Quem produziu o conteúdo.**
- **Se o conteúdo foi alterado.**

Na assinatura assimétrica:

```text
Chave privada → cria assinatura
Chave pública  → verifica assinatura
```

É importante não confundir assinatura com criptografia.

**Assinar não significa esconder o conteúdo.**

A assinatura fornece mecanismos de autenticidade e integridade, enquanto a criptografia busca fornecer confidencialidade.

### Exemplo

Uma mensagem pode continuar visível para qualquer pessoa, mas sua assinatura permite verificar se ela foi produzida por quem possui determinada chave privada e se não foi modificada.

---

## 5. Criptografar × assinar

| Operação | Objetivo principal |
|---|---|
| Criptografar | Esconder o conteúdo |
| Assinar | Garantir autenticidade e integridade |

Essa diferença é fundamental para entender protocolos como TLS e tecnologias como JWT.
