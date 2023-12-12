describe('test header component', () => {
  beforeEach(() => {
    cy.visit('/')

    cy.get('input[placeholder="search for a github user..."]')
      .type('diego3g')
      .parent('form')
      .submit()
  })

  it('should be able to navigate to the profile page and return to home by clicking on the Logo', () => {
    cy.get('svg:eq(2)')
      .should('exist')
      .click()

    cy.url().should('eq', 'http://localhost:5173/')
  })

  it('should be able to navigate to another user profile by header search', () => {
    cy.get('#githubUser')
      .type('giovannibot')
      .parent('form')
      .submit()

    cy.contains('Giovanni Almeida')
      .should('exist')
  })

  it('should be able to change the theme to light and dark.', () => {
    cy.visit('/')
    
    cy.get('button:first')
      .should('exist')
      .click()
    
    cy.get('div[role="menuitem"]:nth-child(1)')
      .click()

    cy.get('html[class="light"]')
      .should('exist')

    cy.get('div[role="menuitem"]:nth-child(2)')
      .click()

    cy.get('html[class="dark"]')
      .should('exist')
  })

})