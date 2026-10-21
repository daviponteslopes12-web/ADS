# Compliance e Segurança — TLS e Diffie-Hellman

## 1. TLS / HTTPS

O **TLS (Transport Layer Security)** protege a comunicação entre cliente e servidor.

O HTTPS utiliza HTTP sobre uma conexão protegida por TLS.

Uma visão simplificada do processo é:

```text
Cliente
   ↓
Handshake TLS
   ↓
Autenticação e estabelecimento de chaves
   ↓
Chaves de sessão
   ↓
Criptografia simétrica
   ↓
Dados protegidos
```

### Por que usar criptografia assimétrica e simétrica?

A criptografia assimétrica é útil durante o estabelecimento seguro da conexão e para autenticação.

Depois que as partes estabelecem chaves de sessão, a comunicação normalmente utiliza criptografia simétrica por ser mais eficiente para grandes volumes de dados.

### Exemplo real

Quando você acessa:

```text
https://exemplo.com
```

o navegador estabelece uma conexão TLS com o servidor antes de transmitir os dados da aplicação de forma protegida.

---

## 2. Diffie-Hellman

O **Diffie-Hellman (DH)** é um mecanismo para estabelecer uma **chave secreta compartilhada através de um canal público**.

Seu objetivo não é criptografar diretamente os dados da aplicação.

Ele permite que duas partes cheguem ao mesmo segredo compartilhado sem simplesmente enviar esse segredo pela rede.

### Conceito simplificado

Existem informações públicas:

```text
Y = base pública
P = módulo público
```

E existem segredos individuais:

```text
segredoA
segredoB
```

Cada participante calcula um valor público utilizando seu próprio segredo:

```text
A → Y ^ segredoA % P
B → Y ^ segredoB % P
```

Esses valores podem ser trocados.

Depois, cada lado utiliza o valor recebido junto com seu próprio segredo para chegar ao mesmo resultado.

```text
A calcula → chave compartilhada
B calcula → mesma chave compartilhada
```

### Exemplo didático

```text
A → 6 → B
B → 14 → A

A calcula → 7
B calcula → 7

Chave compartilhada = 7
```

O exemplo é apenas didático para demonstrar o princípio.

### O que o Diffie-Hellman não faz?

O Diffie-Hellman **não criptografa diretamente os dados da comunicação**.

Ele estabelece um segredo compartilhado que pode ser utilizado posteriormente por um algoritmo de criptografia simétrica.

---

## 3. Diffie-Hellman dentro do contexto do TLS

Uma forma simplificada de visualizar a relação é:

```text
Diffie-Hellman
      ↓
Estabelecimento de segredo compartilhado
      ↓
Chave de sessão
      ↓
Criptografia simétrica
      ↓
Dados protegidos
```

O TLS combina diferentes mecanismos criptográficos para fornecer uma comunicação segura.

---

## 4. Mapa mental para revisão

```text
COMPLIANCE E SEGURANÇA
│
├── Criptografia
│   ├── Simétrica
│   │   ├── Uma chave secreta
│   │   └── AES
│   │
│   └── Assimétrica
│       ├── Chave privada
│       └── Chave pública
│
├── Assinatura
│   ├── Autenticidade
│   └── Integridade
│
├── JWT
│   ├── HS256 → assinatura simétrica
│   └── RS256 → assinatura assimétrica
│
├── Troca de chaves
│   └── Diffie-Hellman
│
└── Comunicação segura
    └── TLS / HTTPS
```

## 5. Resumo para memorizar

```text
Criptografar → esconder o conteúdo

Assinar → verificar autenticidade e integridade

Simétrica → uma chave secreta

Assimétrica → chave pública + chave privada

HS256 → assinatura simétrica

RS256 → assinatura assimétrica

Diffie-Hellman → estabelece segredo compartilhado

TLS → protege a comunicação

DES → simétrico, 56 bits efetivos, inseguro atualmente

AES → padrão moderno de criptografia simétrica
```
