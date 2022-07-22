const { contains } = require("jquery")
const plusButton = '.btn-secondary'
const deleteItemButton = '.btn-danger'

describe('Verify cart functionality', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.get('.navbar-brand > .badge').as('cart')
    cy.get(':nth-child(2) > .row > :nth-child(2)').as('1st-item')
    cy.get(':nth-child(3) > .row > :nth-child(2)').as('2nd-item')
    cy.get(':nth-child(4) > .row > :nth-child(2)').as('3rd-item')
  })
  
  it('Verifies the items are added to the cart', () => {
    cy.get('@1st-item').find(plusButton).click()
    cy.get('@2nd-item').find(plusButton).click()
    cy.get('@cart').should('have.text', '2')
  })

  it('Verifies the delete item button is working', () => {
    cy.get('@1st-item').find(plusButton).click()
    cy.get('@2nd-item').find(plusButton).click()
    cy.get('@cart').should('have.text', '2')
    cy.get('@2nd-item').find(deleteItemButton).click()
    cy.get('@cart').should('have.text', '1')
  })

  it('Verifies the reset button set the item number to 0', () => {
    cy.get('@1st-item').find(plusButton).click()
    cy.get('@2nd-item').find(plusButton).click()
    cy.get('@3rd-item').find(plusButton).click()
    cy.get('@cart').should('have.text', '3')
    cy.get('.btn-success').click()
    cy.get('@cart').should('have.text', '0')
  })

})