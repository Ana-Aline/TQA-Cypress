/// <reference types="cypress" />
const element = require("../fixtures/login.json");

Cypress.Commands.add('Login', (email, password) => {
    cy.get(element.input_email).type(email);
    cy.get(element.input_password).type(password);
    
    cy.get(element.btn_login).click();

    cy.location().should((loc) => {
        expect(loc.pathname).to.eq('/login');
    });
    cy.get(element.btn_logout).should('be.visible');
})

Cypress.Commands.add('MsgLoginFalho', () => {
    cy.get(element.msg_alert).should('have.text', 'E-mail ou senha informados são inválidos.')
})