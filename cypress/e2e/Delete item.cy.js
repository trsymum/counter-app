const { contains } = require("jquery")

describe('Verify Deletetion of item functionality', () => {
  it('Verifies the delete item button is working', () => {
    cy.visit('http://localhost:3000/')
    cy.get(':nth-child(2) > .row > :nth-child(2) > .btn-secondary').click()
    cy.get(':nth-child(3) > .row > :nth-child(2) > .btn-secondary').click()
    cy.get('.navbar-brand > .badge').should('contain', '2')
    cy.get(':nth-child(3) > .row > :nth-child(2) > .btn-danger').click()
    cy.get('.navbar-brand > .badge').should('contain', '1')

  })
})