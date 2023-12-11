describe('visit user profile', () => {
  it('should be able to navigate to the profile page and confirm the href redirecting to github profile', () => {
    cy.visit('/')

    cy.get('input[placeholder="search for a github user..."]')
      .type('diego3g')
      .parent('form')
      .submit()

    cy.location('pathname').should('include', '/diego3g')

    cy.contains('Visit profile')
      .should('exist')
      .invoke('attr', 'href')
      .should('include', '/diego3g')
  })
})