import { describe, expect, it } from "vitest";
import { media, aprovado, reprovado } from "../src/turma.js";


describe("testeMedia", () => {
    it("verifica a media da nota 1", () => {
        expect(media([10, 6, 8])).toBe(8)
    })
    it("verifica a media da nota 2", () => {
        expect(media([6, 7, 8])).toBe(7)
    })
    it("verifica a media da nota 3", () => {
        expect(media([3, 2, 10])).toBe(5)
    })
})

describe("testesAprovado", () => {
    it("verifica se nota 1 esta aprovada", () => {
        expect(aprovado(8)).toBe(true)
    })
    it("verifica se nota 2 esta aprovada", () => {
        expect(aprovado(7)).toBe(true)
    })
    it("verifica se nota 3 esta aprovada", () => {
        expect(aprovado(5)).toBe(false)
    })
})

describe("testesReprovado", () => {
    it("verifica se a nota 1 esta reprovada", () => {
        expect(reprovado(8)).toBe(false)
    })
    it("verifica se a nota 2 esta reprovada", () => {
        expect(reprovado(7)).toBe(false)
    })
    it("verifica se a nota 3 esta reprovada", () => {
        expect(reprovado(5)).toBe(true)
    })
})