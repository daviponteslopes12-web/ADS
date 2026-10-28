import { Router } from "express";
import { getAllAlunosController } from "../controllers/aluno.controller";

const router = Router();

router.get('/', getAllAlunosController);

export default router;