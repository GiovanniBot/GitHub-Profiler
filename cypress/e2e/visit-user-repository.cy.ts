describe('visit user repository page', () => {
  it('should be able to navigate to the profile page then to the repository page then confirm the href to the github repository', () => {
    cy.visit('/')

    cy.get('input[placeholder="search for a github user..."]')
      .type('diego3g')
      .parent('form')
      .submit()

    cy.location('pathname').should('include', '/diego3g')

    cy.contains('button', 'Details')
      .filter('button')
      .should('exist')
      .click();
      
      cy.location('pathname').should('include', '/repository/diego3g/')

      cy.contains('Go to repository')
      .should('exist')
      .invoke('attr', 'href')
      .should('include', 'https://github.com/diego3g/')
  })
})