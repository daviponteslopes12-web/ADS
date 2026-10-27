
async function buscarPersonagens() {
    const lista = document.getElementById("lista-personagens");

    try {
        const resposta = await fetch("http://localhost:3001/");
        const dados = await resposta.json();

        if (!resposta.ok) {
            throw new Error(dados.erro);
        }

        const personagens = dados.resposta;

        personagens.forEach((personagem) => {
            const item = document.createElement("li");
            item.classList.add("card-personagem");

            const imagem = document.createElement("img");
            imagem.src = personagem.sprite;
            imagem.alt = personagem.displayName;

            const nome = document.createElement("h2");
            nome.textContent = personagem.displayName;

            const nomeCompleto = document.createElement("p");
            nomeCompleto.textContent = personagem.fullName;

            item.append(imagem, nome, nomeCompleto);
            lista.appendChild(item);
        });
    } catch (error) {
        console.error("[ERRO] - Erro ao carregar personagens:", error);
        lista.textContent = "Não foi possível carregar os personagens.";
    }
}

buscarPersonagens();
