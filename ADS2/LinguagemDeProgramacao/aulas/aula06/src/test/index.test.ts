import { describe, test, expect } from 'vitest'
import { somar, ehPar } from "../index.js"


describe("testes numericos", () => {
    test("somar 01", () => {
        expect(somar(7, 20)).toBe(27)
    })
    test("somar 02", () => {
        expect(somar(4, 1)).toBe(5)
    })
})


describe("testando pares", () => {
    test("ehPar 01", () => {
        expect(ehPar(2)).toBe(true)
    })
    test("ehPar 02", () => {
        expect(ehPar(7)).toBe(false)
    })
    test("ehPar 03", () => {
        expect(ehPar(0)).toBe(true)
    })
    test("ehPar 04", () => {
        expect(ehPar(-10)).toBe(true)
    })

})