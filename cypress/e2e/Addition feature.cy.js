const { contains } = require("jquery")

describe('Verify cart functionality', () => {
  it('Verifies the items are added to the cart', () => {
    cy.visit('http://localhost:3000/')
    cy.get(':nth-child(2) > .row > :nth-child(2) > .btn-secondary').click()
    cy.get(':nth-child(2) > .row > :nth-child(2) > .btn-secondary').click()
    cy.get(':nth-child(2) > .row > :nth-child(1) > .badge').should('contain', '2')
  })
})