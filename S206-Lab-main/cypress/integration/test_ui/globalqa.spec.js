/// <reference types="cypress"/>


describe('Cenário de Teste: Testar o funcionamento da calculadora do GOOGLE', () => {

    it('Cenário de Teste: Conta de adição', () => {

        cy.visit('https://www.google.com/search?client=opera-gx&q=calculadora+online&sourceid=opera&ie=UTF-8&oe=UTF-8');
        cy.get('.ElumCf > tbody > :nth-child(2) > :nth-child(1) > .PaQdxb > .XRsWPe').click();
        cy.get(':nth-child(5) > :nth-child(4) > .PaQdxb > .XRsWPe').click();
        cy.get('.ElumCf > tbody > :nth-child(4) > :nth-child(3) > .PaQdxb > .XRsWPe').click();
        cy.get('.ElumCf > tbody > :nth-child(5) > :nth-child(3) > .PaQdxb > .XRsWPe').click();

    })

    it('Cenário de Teste: Conta de subtração', () => {

        cy.get('.ElumCf > tbody > :nth-child(2) > :nth-child(1) > .PaQdxb > .XRsWPe').click();
        cy.get(':nth-child(4) > :nth-child(4) > .PaQdxb > .XRsWPe').click();
        cy.get('.ElumCf > tbody > :nth-child(4) > :nth-child(3) > .PaQdxb > .XRsWPe').click();
        cy.get('.ElumCf > tbody > :nth-child(5) > :nth-child(3) > .PaQdxb > .XRsWPe').click();

    })

    it('Cenário de Teste: Conta de multiplicação', () => {

        cy.get('.ElumCf > tbody > :nth-child(2) > :nth-child(1) > .PaQdxb > .XRsWPe').click();
        cy.get(':nth-child(3) > :nth-child(4) > .PaQdxb > .XRsWPe').click();
        cy.get('.ElumCf > tbody > :nth-child(4) > :nth-child(3) > .PaQdxb > .XRsWPe').click();
        cy.get('.ElumCf > tbody > :nth-child(5) > :nth-child(3) > .PaQdxb > .XRsWPe').click();

    })

    it('Cenário de Teste: Conta de divisão', () => {

        cy.get('.ElumCf > tbody > :nth-child(2) > :nth-child(1) > .PaQdxb > .XRsWPe').click();
        cy.get(':nth-child(2) > :nth-child(4) > .PaQdxb > .XRsWPe').click();
        cy.get('.ElumCf > tbody > :nth-child(2) > :nth-child(2) > .PaQdxb > .XRsWPe').click();
        cy.get('.ElumCf > tbody > :nth-child(5) > :nth-child(3) > .PaQdxb > .XRsWPe').click();

    })

    // Conta  utilizando zero e mostrando que ha um erro ao executar a conta
    it('Cenário de Teste: Conta de divisão por zero', () => {

        cy.get('.ElumCf > tbody > :nth-child(2) > :nth-child(1) > .PaQdxb > .XRsWPe').click();
        cy.get(':nth-child(2) > :nth-child(4) > .PaQdxb > .XRsWPe').click();
        cy.get('.ElumCf > tbody > :nth-child(5) > :nth-child(1) > .PaQdxb > .XRsWPe').click();
        cy.get('.ElumCf > tbody > :nth-child(5) > :nth-child(3) > .PaQdxb > .XRsWPe').click();

    })

    it('Cenário de Teste: Conta de Raiz', () => {

        cy.get(':nth-child(4) > :nth-child(3) > .PaQdxb > .Krlpq').click();
        cy.get('.ElumCf > tbody > :nth-child(2) > :nth-child(1) > .PaQdxb > .XRsWPe').click();
        cy.get('.ElumCf > tbody > :nth-child(5) > :nth-child(3) > .PaQdxb > .XRsWPe').click();

    })

    // Conta  utilizando um numero negativo e mostrando que ha um erro ao executar a conta
    it('Cenário de Teste: Conta de Raiz com numero negativo', () => {

        cy.get(':nth-child(4) > :nth-child(3) > .PaQdxb > .Krlpq').click();
        cy.get(':nth-child(4) > :nth-child(4) > .PaQdxb > .XRsWPe').click();
        cy.get('.ElumCf > tbody > :nth-child(2) > :nth-child(1) > .PaQdxb > .XRsWPe').click();
        cy.get('.ElumCf > tbody > :nth-child(5) > :nth-child(3) > .PaQdxb > .XRsWPe').click();

    })

    it('Cenário de Teste: Fatorial', () => {

        cy.get('.ElumCf > tbody > :nth-child(2) > :nth-child(1) > .PaQdxb > .XRsWPe').click();
        cy.get('.HOoTuc > tbody > :nth-child(1) > :nth-child(2) > .PaQdxb > .XRsWPe').click();
        cy.get('.ElumCf > tbody > :nth-child(5) > :nth-child(3) > .PaQdxb > .XRsWPe').click();

    })

})