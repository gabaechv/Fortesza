describe('Fortesza automation test', () => {
  before(() => {
    cy.visit('https://staging.fortesza.com/register')
  })

  // Random email to register diferents mails
  const user = `correo${(Math.random() * (100 - 1) + 1).toFixed()}@testmail-${(Math.random() * (100 - 1) + 1).toFixed()}.com`
  const pass = 'Gaer1234*'

  // First test
  it('Register user', () => {
    cy.get('#input-email-register').first().type(`${user}`)
    cy.get('#input-password-register').first().type(`${pass}`)
    cy.wait(500)
    cy.get('[type="checkbox"]').check({ force: true })
    cy.screenshot(`Register - ${user}${pass} - Enter fields`)
    cy.get('#btn-register-user').click()
    cy.wait(300)
    cy.screenshot(`Register user - ${user} registered`)
  })

  // Second test
  it(`Edit user ${user}`, () => {
    cy.wait(300)
    cy.get('.button-user').click()
    cy.get('.mat-menu-item>span').eq(1).should('contain', 'Seguridad').click()
    cy.screenshot(`Update -  Update user screen`)
    cy.wait(300)
  })

  it(`Edit telefono`, () => {
    cy.get('.btn-edit').first().click()
    cy.get('#mat-input-0').type(`123123123`)
    cy.get('.btn-update-password ').first().click()
    cy.screenshot(`Update - Phone updated`)
    cy.wait(300)
  })

  it(`Edit mail`, () => {
    cy.get('.btn-edit').last().click()
    cy.get('#mat-input-1').type(`e@e.com`)
    cy.get('.btn-update-password ').first().click()
    cy.wait(300)
    cy.screenshot(`Update - Email updated`)
  })
 
  // Fourth test ussing cypress command
  it('Sign out', () => {
    cy.logout()
  })
})
