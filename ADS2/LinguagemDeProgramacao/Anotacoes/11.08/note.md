# Aula 11/08 - entendimentos básicos de Git

---

### Comandos para configurar projeto

```
- git config --global user.name "nome_identificador"
- git config --global user.email "email_identificador" (colocar email do git de preferencia)
- git init (começar um repositório)
- git clone <url> (clonar um repositorio existente)
```

---

### Comandos usados dia a dia

```
```markdown
- git status
- git add . (adicionar tudo)
- git add <arquivo> (adicionar arquivo específico)
- git commit -m "mensagem do commit"
- git push (joga as mudanças para o branch que voce está)
- git pull (puxa as mudanças para o seu repositório)
- git fetch (mostra as mudanças sem puxar elas)
```

---

### Comandos de Branch

``` 
- git branch  (Lista branches existentes)
- git branch <nome> (Cria uma nova branch)
- git switch <nome> (Mudar entre branches)
- git switch -c <nome> (Cria e muda para a branch)
- git merge <branch> (incorpora alterações de outra branch para a que voce está)
- git branch -d <nome> ()
```

---

### Comandos de histórico

```
- git log
- git log --oneline
- git diff
```

---

### Comandos para desfazer alterações

```
- git restore <arquivo>
- git restore --staged <arquivo>
- git revert <commit>
```

---

### Comandos bastante usados

```
- git stash
- git stash pop
- git remote -v
- git remote add origin <url>
- git reset
- git rebase
```

### Comandos para 
