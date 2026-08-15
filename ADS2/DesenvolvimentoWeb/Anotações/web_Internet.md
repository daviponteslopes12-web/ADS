# Primeira aula sobre web e internet

---
## Vídeo Guerreiros da Internet

**O que fala sobre**
pacote de informações (IP) com endereço de origem e de entrada. 
Perda de pacotes na rede local, todos os pacotes que o roteador le o endereço e lança os pacotes para outra rede se necessário, ele faz esse controle, metódico e por muitas vezes não muito rápido.

Switch mais rápido que roteadores e joga os pacotes para o destino deles.

Proxy é o intermediário, ele abre o pacote e procura o endereço web, se for ok, o pacote vai para a internet. Endereços não tem acesso ao proxy por não cumprir diretrizes corporativas, esses pacotes são eliminados.

Pacotes corretos vão para a LAN.

O firewall evita que vírus entrem na rede e informações confidenciais saiam.
Internet, uma teia enorme de redes interligadas que se extendem por todo o planeta.
Internet, mais liberdade e mais perigos.
Servidor da página web, lá tem outro firewall que pode ser configurado com portas de entrada.
Dentro do firewall investiga os pacotes, pacotes sem ping mortal, são desempacotados e enviados para uma aplicação do servidor web.
Pacotes são reciclados e voltam do firewall e pela rede para o navegador do cliente. 


**Termos**   
- Roteador
- Protocolos
- Pacotes IP
- Requisições
- Switch
- Servidor proxy
- LAN
- Intranet
- Interface de rede
- Firewall **(As regras para acessar o servidor da empresa)** 
- Largura de banda
- Portas de entrada
- Servidore web
- Ping mortal
- DNS


**O que eu entendo sobre**
Temos o lado do cliente, aonde ele usa um navegador para acessar a internet,
ele digita o nome do domínio da aplicação (URL) e o DNS (domain named system) pega esse domínio
e através de um protocolo UDP, ele vai para um servidor **DNS** e traduz o domínio, 
ele volta e da o endereço IP para o navegador que vai até o servidor web aonde está hospedado a aplicação.
Lá ele pode se deparar com a proxy, que serve como intermediário entre cliente e servidor, ele garante uma 
segurança para o backend da aplicação, sem revelar o endereço IP, pois o endereço IP será o da própria proxy.
Em caso de várias aplicações a proxy pode servir de **proxy reverso**, que de acordo com o domínio joga a requisição para a aplicação correta.

**Resumo do texto acima**
- Cliente usa navegador para fazer uma requisição ao servidor
- DNS traduz o domínio para um endereço IP.
- Navegador faz requisição ao servidor (provavelmente com proxy do outro lado)
- 