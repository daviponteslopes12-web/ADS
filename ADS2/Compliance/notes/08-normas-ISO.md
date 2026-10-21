# Compliance e Segurança da Informação — Resumo

## 1. SGSI

**SGSI (Sistema de Gestão de Segurança da Informação)** é a estrutura usada pela organização para gerenciar a segurança da informação de forma organizada.

O SGSI não é apenas tecnologia. Ele envolve pessoas, processos, riscos, controles, responsabilidades, monitoramento e melhoria contínua.

A ISO/IEC 27001 estabelece os **requisitos** para o SGSI.

A ISO/IEC 27002 apresenta **diretrizes e boas práticas** para apoiar a implementação dos controles.

> **27001 = requisitos do sistema de gestão.**
>
> **27002 = orientações para os controles.**

---

## 2. Cláusulas 4 a 10

As cláusulas estruturam o SGSI:

| Cláusula | Tema | Na prática |
|---|---|---|
| 4 | Contexto | Entender a organização, partes interessadas e definir o escopo |
| 5 | Liderança | Envolvimento da direção, política e responsabilidades |
| 6 | Planejamento | Riscos, oportunidades e objetivos |
| 7 | Apoio | Recursos, pessoas, treinamento e comunicação |
| 8 | Operação | Executar e controlar os processos planejados |
| 9 | Avaliação | Monitoramento, indicadores, auditoria interna e análise da direção |
| 10 | Melhoria | Corrigir problemas, ações corretivas e melhorar continuamente |

### Para memorizar

**4 entende → 5 lidera → 6 planeja → 7 apoia → 8 executa → 9 verifica → 10 melhora.**

---

## 3. PDCA

O SGSI funciona de forma contínua pelo ciclo PDCA:

```text
PLAN — Planejar
    ↓
DO — Fazer
    ↓
CHECK — Checar
    ↓
ACT — Agir
    ↓
volta ao Planejar
```

### Planejar

Definir contexto, escopo, objetivos, riscos e ações.

### Fazer

Executar o que foi planejado: processos, controles, treinamentos e procedimentos.

### Checar

Verificar se o que foi planejado está funcionando por meio de indicadores, monitoramento, auditorias e análise dos resultados.

### Agir

Corrigir problemas, investigar causas, aplicar ações corretivas e buscar melhoria contínua.

> **Fazer = executar.**
>
> **Agir = corrigir e melhorar.**

---

## 4. Gestão de riscos

A ISO/IEC 27001 trabalha com uma abordagem baseada em riscos.

No exercício, o risco foi calculado assim:

**Risco = Probabilidade × Impacto**

A organização avalia os riscos e decide como tratá-los.

### Opções de tratamento

| Tratamento | Significado |
|---|---|
| **Modificar** | Alterar a situação para reduzir o risco |
| **Evitar** | Deixar de realizar a atividade que gera o risco |
| **Compartilhar** | Dividir parte do impacto com outra parte |
| **Reter** | Aceitar o risco dentro do nível considerado aceitável |

### Exemplos

**Modificar:** substituir uma biblioteca vulnerável e continuar utilizando o sistema.

**Evitar:** deixar de utilizar o módulo que depende da biblioteca vulnerável.

**Compartilhar:** contratar seguro cibernético para compartilhar parte do impacto financeiro.

**Reter:** aceitar um risco baixo porque o impacto é pequeno e existem alternativas para continuar trabalhando.

---

## 5. Controles de segurança

Os controles são medidas utilizadas para tratar os riscos identificados.

Exemplos:

- Treinamento de segurança para reduzir riscos relacionados a phishing.
- Mascaramento de dados para proteger informações reais usadas em testes.
- Autenticação segura para proteger o acesso aos sistemas.
- Backup para permitir recuperação de informações.
- Monitoramento para identificar eventos de segurança.
- Codificação segura para reduzir vulnerabilidades no desenvolvimento.

Os controles da ISO/IEC 27002 apoiam a organização na implementação dessas medidas.

---

## 6. SoA — Declaração de Aplicabilidade

A **SoA (Statement of Applicability)** registra quais controles são aplicáveis à organização e a situação de cada um.

Para cada controle, deve indicar:

- se é aplicável;
- justificativa para inclusão ou exclusão;
- se está implementado.

Exemplo:

```text
Controle: Mascaramento de dados

Aplicável: Sim
Justificativa: Existem dados reais de clientes no ambiente de testes.
Implementado: Não
```

Uma organização pode excluir um controle, desde que consiga justificar essa decisão.

A SoA ajuda o auditor a entender quais controles foram considerados pela organização e qual é a situação deles.

---

## 7. Implementação dos controles

Um controle pode estar:

- **Implementado:** a organização já aplica o controle de acordo com a situação analisada.
- **Parcialmente implementado:** existe o controle, mas sua aplicação ainda não é completa.
- **Não implementado:** o controle é aplicável, mas ainda não foi implementado.

Exemplo:

A Vértice possui MFA apenas para administradores.

**Autenticação segura → aplicável → parcialmente implementada.**

A empresa faz backup diário, mas nunca testou a restauração.

**Backup → aplicável → parcialmente implementado.**

---

## 8. Priorização

A organização não precisa implementar todos os controles ao mesmo tempo.

Uma forma de priorizar é relacionar:

```text
Risco → Controle → Prioridade
```

No caso da Vértice:

- **R1 → 8.11 — Mascaramento de dados**
- **R2 → 8.28 — Codificação segura**
- **R3 → 6.3 — Conscientização e treinamento**

A prioridade deve considerar principalmente os riscos identificados e sua importância para a organização.

---

## 9. Auditoria

A auditoria verifica se o SGSI está realmente implementado e funcionando.

Na auditoria de certificação, o estágio 2 verifica a implementação e a eficácia do SGSI na prática.

O auditor pode:

- entrevistar colaboradores;
- observar processos;
- analisar documentos;
- verificar registros;
- utilizar amostragem.

Não basta afirmar que existe um processo. A organização precisa apresentar evidências.

---

## 10. Achados da auditoria

### Conforme

O requisito ou procedimento está sendo cumprido.

**Exemplo:** os testes de restauração são realizados conforme o procedimento e possuem registros.

### Observação

Não existe uma não conformidade identificada, mas existe uma oportunidade de melhoria.

**Exemplo:** os indicadores funcionam corretamente, mas a coleta manual poderia ser automatizada.

### Não conformidade menor

É uma falha pontual que não compromete o SGSI como um todo.

**Exemplo:** um funcionário teve o acesso removido após 5 dias, quando o procedimento determina 24 horas.

### Não conformidade maior

É uma falha significativa que compromete uma parte importante ou a eficácia do SGSI.

**Exemplo:** a organização nunca realizou avaliação de riscos, comprometendo a base utilizada para definir os controles.

---

## 11. Correção x ação corretiva

### Correção

Resolve o problema que já aconteceu.

**Exemplo:** remover imediatamente o acesso de um funcionário desligado.

### Ação corretiva

Investiga e trata a causa do problema para evitar que ele volte a acontecer.

**Exemplo:** descobrir por que o acesso não foi removido no prazo e alterar o processo para evitar novos atrasos.

```text
Problema
   ↓
Correção
   ↓
resolve o problema atual

Problema
   ↓
Análise da causa
   ↓
Ação corretiva
   ↓
evita a repetição
```

---

## 12. Certificação

A certificação ISO/IEC 27001 não significa que a organização está livre de riscos ou que nunca terá incidentes.

Ela demonstra que a organização possui um SGSI estruturado e atende aos requisitos aplicáveis dentro do escopo certificado.

Antes da certificação, a organização precisa tratar as não conformidades encontradas na auditoria.

No caso estudado, a Vértice não poderia receber a certificação naquele momento porque possuía **NC maiores**, especialmente:

- ausência de auditoria interna;
- ausência de avaliação de riscos.

---

# Fluxo completo

```text
ORGANIZAÇÃO
     ↓
4 — CONTEXTO
     ↓
5 — LIDERANÇA
     ↓
6 — PLANEJAMENTO
     ↓
Identificação e avaliação dos riscos
     ↓
Tratamento dos riscos
     ↓
Escolha dos controles
     ↓
SoA
     ↓
7 — APOIO
     ↓
8 — OPERAÇÃO
     ↓
Implementação dos controles
     ↓
Monitoramento e operação
     ↓
9 — AVALIAÇÃO
     ↓
Indicadores + Auditoria interna
     ↓
Análise pela direção
     ↓
10 — MELHORIA
     ↓
Correções + Ações corretivas
     ↓
Melhoria contínua
     ↓
Auditoria de certificação
     ↓
CERTIFICAÇÃO
     ↓
Continuidade do ciclo
     └──────────────→ Planejamento
```

## Resumo para memorizar

**SGSI:** sistema para gerenciar a segurança da informação.

**27001:** requisitos para o SGSI.

**27002:** diretrizes e boas práticas para controles.

**4–10:**
- 4 Contexto
- 5 Liderança
- 6 Planejamento
- 7 Apoio
- 8 Operação
- 9 Avaliação
- 10 Melhoria

**PDCA:**
- Planejar
- Fazer
- Checar
- Agir

**Risco:** identificar → avaliar → tratar.

**Tratamento:** modificar, evitar, compartilhar ou reter.

**SoA:** mostra quais controles são aplicáveis, por que foram incluídos/excluídos e se estão implementados.

**Auditoria:** verifica evidências e eficácia na prática.

**NC menor:** falha pontual.

**NC maior:** falha significativa no SGSI.

**Correção:** resolve o problema atual.

**Ação corretiva:** trata a causa para evitar repetição.

**Certificação:** demonstra conformidade com os requisitos da ISO/IEC 27001 dentro do escopo certificado; não significa ausência total de riscos ou incidentes.
