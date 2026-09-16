import { Livro } from "./interfaces/Livro"
import { Emprestimo } from "./interfaces/Emprestimo"

const livro1: Livro = {
    ISBN: 1,
    autor: "autor1",
    disponivel: false,
    titulo: "titulo1"
}

const livro2: Livro = {
    ISBN: 2,
    autor: "autor2",
    disponivel: true,
    titulo: "titulo2"
}

const livro3: Livro = {
    ISBN: 3,
    autor: "autor3",
    disponivel: true,
    titulo: "titulo3"
}

const livro4: Livro = {
    ISBN: 4,
    autor: "autor4",
    disponivel: false,
    titulo: "titulo4"
}

const livro5: Livro = {
    ISBN: 5,
    autor: "autor5",
    disponivel: false,
    titulo: "titulo5"
}

// EMPRESTIMOS
const emprestimo1: Emprestimo = {
    livro: "livro1",
    aluno: "aluno1",
    dataEmprestimo: "01-01-2020"
}

const emprestimo2: Emprestimo = {
    livro: "livro2",
    aluno: "aluno2",
    dataEmprestimo: "02-02-2020"
}

const emprestimo3: Emprestimo = {
    livro: "livro3",
    aluno: "aluno3",
    dataEmprestimo: "03-03-2020",
    dataDevolucao: "04-04-2020"
}










// import { Pessoa } from "./classes/Pessoa"
// import { Aluno, Curso } from "./interfaces/Aluno"


// const ads: Curso = {
//     nome: "ADS",
//     area: "Computacao"
// }

// const aluno1: Aluno = {
//     id: 1,
//     nome: "Freddy",
//     idade: 17,
//     curso: ads
// }

// const aluno2: Aluno = {
//     id: 2,
//     nome: "Teste",
//     idade: 18,
//     curso: {nome: "ads", area: "computacao"}
// }


// // type -> apelidos, coisas mais simples
// type status = "ativado" | "desativado"
// type numero = number


// const turmaA = [aluno1, aluno2]
// if (turmaA[0]) {
//     console.log(turmaA[0].nome)
// }

// const aluno3 = {...aluno1, nome: "aluno 3"} // copiar tudo de aluno1 -> spread
// const aluno4 = aluno1 // passagem por referencia
// const { nome, idade } = aluno3  // destructuring -> extrair nome e idade de aluno3

// const pessoa1 = new Pessoa("Teste", 123456)
// console.log(pessoa1.verificaCPF())