const { contains } = require("jquery")
const plusButton = '.btn-secondary'
const minusButton = '.btn-info'

describe('Verify quantity functionality', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.get(':nth-child(2) > .row > :nth-child(1) > .badge').as('quantity')
    cy.get(':nth-child(2) > .row > :nth-child(2)').as('1st-item')
  })

  it('Verifies the plus button is working', () => {
    cy.get('@1st-item').find(plusButton).click().click().click()
    cy.get('@quantity').should('have.text', '3')
  })

  it('Verifies the minus button is working', () => {
    cy.get('@1st-item').find(plusButton).click().click().click()
    cy.get('@quantity').should('have.text', '3')
    cy.get('@1st-item').find(minusButton).click()
    cy.get('@quantity').should('have.text', '2')
  })

})