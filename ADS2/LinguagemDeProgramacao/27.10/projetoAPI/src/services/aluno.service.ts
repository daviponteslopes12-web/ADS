import { getAllAlunosRepository } from "../repositories/aluno.repository";

export function getAllAlunosService() {
    const alunos = getAllAlunosRepository();
    return alunos;
}