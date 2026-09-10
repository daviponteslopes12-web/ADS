# Primeira aula sobre web e internet

---
## Vídeo Guerreiros da Internet

**Resumo**
Mostra o caminho que os dados percorrem em uma rede, passando por **LAN**, roteadores, switches, proxy, firewall e Internet.

**Termos**
- Pacote de dados
- IP
- LAN
- Switch
- Roteador
- Proxy
- Firewall
- Portas
- Internet como uma rede de redes
- Largura de banda e congestionamento
- Servidor Web
- Ping/ICMP, UDP, "Ping of Death"

**Etapas**
1. O computador cria e encapsula os dados
2. LAN -> Switch -> Gateway/Roteador
3. Proxy -> Firewall -> Intranet -> Vários roteadores
4. Firewall -> rede do servidor -> Servidor web
---

### Explicar com minhas palavras o que seria...
**Internet:**
- Infraestrutura que serve como base para a web ou outras aplicações se comunicarem.

**WWW:**
- (World Wide Web) seria um sistema de páginas e aplicações que funcionam sobre a Internet. 

**HTTP:**
- Protocolo de comunicação utilizado pela web, que define como as requisições e respostas são estruturadas.

**HTTPS:**
- HTTP + TLS, que criptografa os dados e permite autenticar o servidor.

**TCP IP:**
- TCP faz a conexão entre o cliente e o servidor e o IP identifica e encaminha os dados entre a rede, ele identifica dispositivos/endpoints e permitir que os pacotes sejam encaminhados entre redes.

**Arquitetura Cliente/Servidor:**
- O cliente envia requisições para um servidor que processa e envia respostas.

**IPV4/IPV6**
- Versões do protocolo IP, IPV4 utiliza endereços de 32 bits (192.168.1.20) e o IPV6 utiliza endereços de 128 bits (2001:db8:85a3::8a2e:370:7334). IPV6 surgiu para solucionar o problema do IPV4, a falta de endereços.
dual stack -> usar ambos

**DNS**
- Domain Named System, seria uma lista de endereços que cuida da tradução de um domínio para um endereço IP.

**Servidores**
- É um software que oferece um serviço para um computador, ele não é o hardware físico (a máquina gigante que você vê nos filmes), dentro de um servidor físico, podem existir vários servidores lógicos (servidor web, servidor backend, banco de dados, outros serviços).

**Data Center**
- Infraestrutura física completa, aonde fica os servidores físicos e outros dispositivos, como os servidores físicos (agora sim a máquina gigante que você vê nos filmes), Switches, Roteadores, Firewalls, Armazenamento, Cabos, Energia e Refrigeração.

**Hospedagem**
- Temos vários serviços que nos ajudam a hospedar nossas aplicações, eles se dividem de acordo com complexidade, controle e responsabilidade.

1. Mais simples — "Quero colocar minha aplicação no ar sem muita complexidade"
→ Vercel, Railway, Render.

2. Hospedagem tradicional — "Quero hospedar um site/aplicação com recursos de hospedagem"
→ Hostinger, HostGator.
Dependendo do plano, podem oferecer desde hospedagem compartilhada até VPS, então o nível de controle varia.

3. Cloud — "Quero escolher e configurar minha própria infraestrutura e serviços"
→ AWS, Azure, Google Cloud. 
Oferecem recursos como máquinas virtuais, containers, bancos de dados, redes, load balancers, Kubernetes, armazenamento etc.
