import { Request, Response } from "express";
import { getAllAlunosService } from "../services/aluno.service";

export function getAllAlunosController(req: Request, res: Response) {
    const alunos = getAllAlunosService();
    res.json(alunos);
}