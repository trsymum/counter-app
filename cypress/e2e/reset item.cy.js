const { contains } = require("jquery")

describe('Verify reset functionality', () => {
  it('Verifies the reset button set the item number to 0', () => {
    cy.visit('http://localhost:3000/')
    cy.get(':nth-child(2) > .row > :nth-child(2) > .btn-secondary').click()
    cy.get(':nth-child(3) > .row > :nth-child(2) > .btn-secondary').click()
    cy.get(':nth-child(4) > .row > :nth-child(2) > .btn-secondary').click()
    cy.get('.navbar-brand > .badge').should('contain', '3')
    cy.get('.btn-success').click()
    cy.get('.navbar-brand > .badge').should('contain', '0')

  })
})