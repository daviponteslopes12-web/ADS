# Aula 11/08 - entendimentos básicos de Git

---

### Comandos para configurar projeto

```
- git config --global user.name "nome_identificador"
- git config --global user.email "email_identificador" (colocar email do git de preferência)
- git init (começar um repositório)
- git clone <url> (clonar um repositorio existente)
```

---

### Comandos usados no dia a dia

```
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
- git branch -d <nome> (deleta a branch local)
- git push origin --delete <nome> (deleta a branch no Github (remoto))
```

---

### Comandos de histórico

```
- git log (mostra o histórico completo de commits)
- git log --oneline (mostra o histórico de forma resumida, uma linha por commit)
- git diff (mostra alterações ainda não commitadas)
```

---

### Comandos para desfazer alterações

```
- git restore <arquivo> (descarta alterações não commitadas de um arquivo)
- git restore --staged <arquivo> (remove o arquivo da área de staging, mantendo a alteração)
- git revert <commit> (cria um novo commit que desfaz as alterações de um commit anterior)
```

---

### Comandos bastante usados

```
- git stash (guarda temporariamente alterações não commitadas)
- git stash pop (recupera as alterações guardadas pelo stash)
- git remote -v (mostra os repositorios remotos configurados)
- git remote add origin <url> (adiciona um repositorio remoto chamado origin)
- git reset (move o estado/ponteiro de commits e pode desfazer alterações)
- git rebase (reorganiza os commits reaplicando-os sobre outra base)
```

