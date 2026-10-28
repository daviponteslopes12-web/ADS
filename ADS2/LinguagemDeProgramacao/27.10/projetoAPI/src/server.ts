import express from "express";
import alunosRoutes from "./routes/aluno.route";

const app = express();
const port = 3000;

app.use('/alunos', alunosRoutes);


app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});