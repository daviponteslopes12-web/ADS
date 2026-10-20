import express from "express";

const app = express();
const servidor = 3000;

// Rotas
app.get('/', (req, res) => {
    res.send('Olá mundo');
});

app.get('/produtos/1', (req, res) => {
    res.json({ 
        id: 1,
        nome: "Produto 1",
        preco: 90
    });
});


// Ligando servidor
app.listen(servidor, () => {
    console.log(`Servidor rodando na porta ${servidor}`);
});