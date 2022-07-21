const { contains } = require("jquery")

describe('Verify Deletion functionality', () => {
  it('Verifies the minus button is working', () => {
    cy.visit('http://localhost:3000/')
    cy.get(':nth-child(2) > .row > :nth-child(2) > .btn-secondary').click()
    cy.get(':nth-child(2) > .row > :nth-child(2) > .btn-secondary').click()
    cy.get(':nth-child(2) > .row > :nth-child(2) > .btn-secondary').click()
    cy.get(':nth-child(2) > .row > :nth-child(1) > .badge').should('contain', '3')
    cy.get(':nth-child(2) > .row > :nth-child(2) > .btn-info').click()
    cy.get(':nth-child(2) > .row > :nth-child(1) > .badge').should('contain', '2')

  })
})