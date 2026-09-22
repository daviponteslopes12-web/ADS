import { describe, it, expect } from "vitest"
import { ehVogal, calcularMedia } from "../src/index.js"


// Nome para o bloco de teste com vários testes dentro
describe("ehVogal", () => {
    it("reconhece vogais minusculas", () => {
        expect(ehVogal("a")).toBe(true) // Rodei ehVogal com "a", esperado true
    })
    it("rejeita consoantes", () => {
        expect(ehVogal("b")).toBe(false) // Rodei ehVogal com "b", esperado false
    })
    it("reconhece vogais maiusculas", () => {
        expect(ehVogal("E")).toBe(true)
    })
})


// Teste para media
describe("calcularMedia", () => {
    it("verifica resultado da media", () => {
        expect(calcularMedia(4, 5, 6)).toBe(5)
    })
})