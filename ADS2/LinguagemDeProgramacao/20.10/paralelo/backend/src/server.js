import express from "express";
import { buscarPersonagens } from "./index.js";

const app = express();
app.use(express.json());


// Rotas
app.get("/", async (req, res) => {
    try {
        const resposta = await buscarPersonagens();
        res.status(200).json({ resposta });
    } catch (error) {
        res.status(500).json({ erro: "Não foi possível buscar os personagens" });
    }
});



const porta = 3001;

// Ligando o servidor
app.listen(3000, () => {
    console.log(`Servidor rodando na porta ${porta}`);
});