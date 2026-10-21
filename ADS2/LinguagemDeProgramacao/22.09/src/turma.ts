export function media(notas: number[]): number {
    const soma = notas.reduce((acc, nota) => acc + nota, 0)
    return soma / notas.length
}

export function aprovado(media: number): boolean {
    return media >= 7
}

export function reprovado(media: number): boolean {
    return media < 7
}