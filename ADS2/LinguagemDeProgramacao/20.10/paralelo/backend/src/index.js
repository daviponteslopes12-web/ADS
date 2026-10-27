// No caso desse pequeno projeto, este arquivo cuida de validações e chamadas para as APIs.

export async function buscarPersonagens() {
    try {
        const resposta = await fetch("https://adventure-time-api-lg.vercel.app/apiV1/characters");
        
        if (!resposta.ok) {
            throw new Error(`[ERRO] - Resposta vazia ou falha na resposta`, resposta.status);
        }
        
        const personagens = await resposta.json();
        
        if (personagens.length === 0) {
            throw new Error('Nenhum personagem encontrado');
        }

        return personagens;

    } catch (error) {
        console.error("[ERRO] - Erro ao buscar personagens", error);
        throw new Error(error);
    }
}