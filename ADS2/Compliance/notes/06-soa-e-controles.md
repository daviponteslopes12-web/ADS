# Declaração de Aplicabilidade e Controles

## 1. Declaração de Aplicabilidade (SoA)

A **SoA (Statement of Applicability)** é a **Declaração de Aplicabilidade**.

Ela documenta quais controles são aplicáveis ao SGSI e apresenta as justificativas e o estado de implementação.

Para cada controle analisado, a SoA pode registrar informações como:

- Se o controle é aplicável.
- Justificativa para inclusão.
- Justificativa para exclusão, quando aplicável.
- Estado de implementação.

### Estrutura simplificada

```text
Controle
   ↓
É aplicável?
   ↓
Justificativa
   ↓
Está implementado?
```

---

## 2. Exclusão de controles

A organização não precisa simplesmente implementar todos os controles sem considerar seu contexto.

A aplicação dos controles está relacionada à avaliação de riscos e às necessidades do SGSI.

Quando um controle não for aplicável, a organização deve conseguir justificar essa decisão.

### Exemplo

Uma organização pode analisar um determinado controle físico e concluir que ele não se aplica ao seu contexto específico.

O importante é que a decisão esteja fundamentada e documentada.

---

## 3. Por que a SoA é importante?

A SoA conecta:

```text
Riscos
  ↓
Necessidades de segurança
  ↓
Controles selecionados
  ↓
Justificativas
  ↓
Implementação
```

Por isso, ela permite visualizar como as decisões de segurança da organização foram tomadas.

O material da lista destaca que a SoA costuma ser um documento importante para o auditor porque ajuda a entender a relação entre os controles e o SGSI.

---

## 4. Controles importantes no estudo de caso

A lista apresenta dez controles específicos da ISO/IEC 27002 para análise.

Eles formam um bom conjunto para estudar porque representam diferentes áreas:

### Serviços em nuvem — 5.23

Relaciona-se à segurança da informação na utilização de serviços em nuvem.

É especialmente relevante quando uma organização utiliza um provedor externo e precisa entender responsabilidades e requisitos de segurança.

### Conscientização e treinamento — 6.3

Relaciona-se à educação e treinamento dos colaboradores em segurança da informação.

Exemplos:

- Phishing.
- Políticas de segurança.
- Boas práticas.
- Conscientização.

### Trabalho remoto — 6.7

Relaciona-se à segurança do trabalho remoto.

Pode envolver políticas, responsabilidades e requisitos para acesso remoto.

### Controles de entrada física — 7.2

Relaciona-se ao controle de acesso físico às instalações.

Exemplo:

```text
Crachá
  ↓
Registro de entrada
  ↓
Controle de acesso físico
```

### Autenticação segura — 8.5

Relaciona-se aos mecanismos utilizados para autenticar usuários e proteger o acesso aos sistemas.

### Mascaramento de dados — 8.11

Relaciona-se à proteção de informações, especialmente quando dados reais não precisam ser expostos em determinados ambientes.

Um exemplo importante é evitar que dados pessoais reais de clientes sejam utilizados desnecessariamente em ambientes de teste.

### Cópias de segurança — 8.13

Relaciona-se aos backups.

Ter backup não é suficiente: é importante considerar também a capacidade de restaurar os dados.

```text
Backup realizado
      ↓
Teste de restauração
      ↓
Confirmação de que o backup funciona
```

### Atividades de monitoramento — 8.16

Relaciona-se ao monitoramento de atividades relevantes.

Não basta gerar logs; é necessário considerar sua análise e utilização para detectar eventos relevantes.

### Codificação segura — 8.28

Relaciona-se ao desenvolvimento seguro de software.

No estudo de caso, revisão de código e análise estática são exemplos de práticas relacionadas ao desenvolvimento seguro.

### Desenvolvimento terceirizado — 8.30

Relaciona-se à segurança quando o desenvolvimento é realizado por terceiros.

Se todo o desenvolvimento é interno, a aplicabilidade desse controle precisa ser analisada considerando o contexto.

---

## 5. Atributos dos controles

A ISO/IEC 27002:2022 introduziu atributos para permitir diferentes formas de classificação dos controles.

Um dos tipos de classificação apresentados no material é:

- **Preventivo**
- **Detectivo**
- **Corretivo**

### Preventivo

Busca impedir que um problema aconteça.

Exemplo: mecanismo de autenticação.

### Detectivo

Busca identificar que algo aconteceu ou está acontecendo.

Exemplo: monitoramento e análise de eventos.

### Corretivo

Busca corrigir ou reduzir os efeitos de um problema.

Exemplo: ações tomadas após a identificação de uma falha.

---

## 6. Controles não significam apenas tecnologia

Um controle de segurança pode envolver:

```text
Pessoas
Processos
Tecnologia
Ambiente físico
```

Por isso, estudar ISO/IEC 27002 apenas como uma lista de ferramentas técnicas gera uma compreensão incompleta.
