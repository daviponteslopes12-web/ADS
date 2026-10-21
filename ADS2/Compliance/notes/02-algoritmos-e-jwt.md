# Compliance e Segurança — Algoritmos e JWT

## 1. HS256

O **HS256** é um algoritmo de assinatura baseado em criptografia simétrica.

Ele utiliza uma única chave secreta compartilhada:

```text
JWT_SECRET → assina JWT
JWT_SECRET → verifica JWT
```

### Características

- Utiliza uma chave secreta.
- É rápido e simples.
- Quem consegue verificar a assinatura com essa chave também possui a capacidade de produzir assinaturas válidas.

### Exemplo real

Uma API pode utilizar uma variável de ambiente:

```text
JWT_SECRET=chave-secreta-da-aplicacao
```

A aplicação utiliza essa chave para assinar e validar seus JWTs.

---

## 2. RS256

O **RS256** utiliza criptografia assimétrica para realizar a assinatura.

```text
Chave privada → assina JWT
Chave pública  → verifica JWT
```

### Características

- A chave privada deve permanecer protegida.
- A chave pública pode ser distribuída.
- Serviços podem verificar tokens sem possuir a chave necessária para criar novas assinaturas.

### Exemplo real

Imagine uma arquitetura com vários serviços:

```text
              Chave pública
                   ↓
Serviço A ─────── verifica JWT
Serviço B ─────── verifica JWT
Serviço C ─────── verifica JWT

Servidor de autenticação
        ↓
Chave privada → assina JWT
```

Os serviços conseguem verificar os tokens sem receber a chave privada.

---

## 3. HS256 × RS256

| Característica | HS256 | RS256 |
|---|---|---|
| Tipo | Simétrico | Assimétrico |
| Assinatura | Chave secreta | Chave privada |
| Verificação | Chave secreta | Chave pública |
| Distribuição da chave | Mais sensível | Chave pública pode ser distribuída |
| Uso comum | Sistemas mais simples | Arquiteturas com múltiplos serviços |

---

## 4. JWT

**JWT (JSON Web Token)** é um formato de token utilizado principalmente para autenticação e transmissão de informações entre partes.

Um JWT normalmente é **assinado, não criptografado**.

Isso significa que o conteúdo do token não deve ser tratado como segredo apenas porque está dentro de um JWT.

### Exemplo

```text
Usuário faz login
       ↓
Servidor autentica
       ↓
Servidor gera JWT
       ↓
Cliente envia JWT nas requisições
       ↓
Servidor verifica assinatura
```

### Atenção

Se informações sensíveis forem colocadas em um JWT apenas codificado, elas podem ser lidas por quem tiver acesso ao token. A assinatura garante integridade/autenticidade, não confidencialidade.

---

## 5. DES

**DES (Data Encryption Standard)** é um algoritmo de criptografia simétrica baseado em cifra de bloco.

Isso significa:

- **Bloco:** processa dados em blocos de tamanho fixo, neste caso 64 bits.
- **Simétrica:** utiliza a mesma chave para criptografar e descriptografar.

### Tamanho da chave

O DES possui uma chave armazenada de 64 bits, mas 8 bits são utilizados para paridade.

Assim:

```text
64 bits armazenados
      ↓
8 bits de paridade
      ↓
56 bits efetivos
```

Os 56 bits efetivos são insuficientes para os padrões atuais de segurança.

### Por que o DES não é recomendado?

O espaço de chaves de 56 bits pode ser explorado por ataques de força bruta com recursos computacionais modernos.

Por isso, o DES é considerado inseguro para uso atual.

### Substituto moderno

O **AES (Advanced Encryption Standard)** é um dos principais padrões modernos utilizados no lugar do DES.

---

## 6. Comparação rápida

```text
DES
└── Simétrico
    └── 56 bits efetivos
        └── Inseguro atualmente

AES
└── Simétrico
    └── Padrão moderno

HS256
└── Assinatura simétrica

RS256
└── Assinatura assimétrica
```
