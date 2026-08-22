# COMPLIANCE E SEGURANÇA

---
## Chaves criptográficas

São chaves utilizadas por algoritmos criptográficos para proteger, assinar e verificar dados.

Sua importância está em garantir:
- Confidencialidade
- Integridade
- Autenticidade

---
## Criptografia simétrica

Utiliza uma única chave secreta para criptografar e descriptografar dados.

É mais rápida e adequada para grandes quantidades de dados.

### HS256 (simétrica)

Utiliza uma chave secreta compartilhada.

```text
JWT_SECRET → assina JWT
JWT_SECRET → verifica JWT
```

É simples e rápido.

---
## Criptografia assimétrica

Utiliza duas chaves relacionadas matematicamente:

* Chave privada: deve ser protegida.
* Chave pública: pode ser compartilhada.

Pode ser utilizada para assinatura digital, autenticação e troca segura de chaves.

### RS256 (assimétrica)

Utiliza um par de chaves:

```text
Chave privada → assina JWT
Chave pública  → verifica JWT
```

É útil quando vários serviços precisam verificar tokens sem ter acesso à chave capaz de criar novas assinaturas.

---
## Assinatura digital

Serve para verificar:

* Quem produziu o conteúdo.
* Se o conteúdo foi alterado.

Na assinatura assimétrica:

```text
Chave privada → cria assinatura
Chave pública  → verifica assinatura
```

Assinar não significa esconder o conteúdo.

---
## JWT

JWT é um token utilizado principalmente para autenticação.

Ele normalmente é **assinado**, não criptografado.

---
## 6. TLS / HTTPS

TLS protege a comunicação entre cliente e servidor.

Durante o handshake, mecanismos de criptografia assimétrica ajudam na autenticação e no estabelecimento de chaves.

Depois, o TLS utiliza criptografia simétrica para proteger os dados durante a comunicação.

```text
Handshake
   ↓
Estabelecimento das chaves
   ↓
Criptografia simétrica
   ↓
Dados protegidos
```

---
## 7. Diffie-Hellman

Resolve o problema de estabelecer uma **chave secreta compartilhada através de um canal público**.

Informações públicas:

```text
Y = base pública
P = módulo público
```

Segredos:

```text
segredoA
segredoB
```

Cada lado calcula um valor público:

```text
Y ** segredoA % P
Y ** segredoB % P
```

Eles trocam esses valores e usam seu próprio segredo para chegar à mesma chave compartilhada.

Exemplo:

```text
A → 6 → B
B → 14 → A

A calcula → 7
B calcula → 7

Chave compartilhada = 7
```

O Diffie-Hellman **não criptografa os dados diretamente**. Ele estabelece a chave que pode ser usada posteriormente em uma criptografia simétrica.

---
## 8. Diferenças principais

```text
Criptografar → esconder o conteúdo
Assinar      → garantir autenticidade e integridade

Simétrica    → uma chave secreta
Assimétrica  → chave pública + chave privada

HS256        → assinatura simétrica
RS256        → assinatura assimétrica

Diffie-Hellman → estabelece uma chave compartilhada
TLS           → protege a comunicação usando esses mecanismos
```

