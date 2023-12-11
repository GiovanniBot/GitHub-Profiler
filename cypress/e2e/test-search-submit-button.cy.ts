describe('test the home search submit button', () => {
  it('should be able to navigate to the profile page by clicking on the submit button', () => {
    cy.visit('/')

    cy.get('input[placeholder="search for a github user..."]')
      .type('diego3g')
      .next()
      .click()

    cy.location('pathname').should('include', '/diego3g')

    cy.contains('Diego Fernandes').should('exist')
  })
})