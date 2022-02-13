// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (user, pass) => { 
  cy.get('#txt-email-or-user').first().type(`${user}`)
  cy.get('#txt-password').first().type(`${pass}`)
  cy.wait(500)
  cy.screenshot(`${user}${pass} - User enter`)
  cy.get('#btn-sign-in-page').click()
})

Cypress.Commands.add('logout', (username, password) => { 
  cy.wait(500)
  cy.get('.button-user').click()
  cy.get('.mat-menu-item').last().click()
  cy.wait(500)
  cy.screenshot('Cerrar Sesión')
})