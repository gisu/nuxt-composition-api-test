describe('Testing login', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('switch to the registration setting', () => {
    cy.get('[data-cy=triggerRegister]').click()
    cy.get('[data-cy=input-fullname]').should('exist')
  })

  it('logging in with incorrect login data that generates an error', () => {
    cy.get('[data-cy=input-username]').type('darth')
    cy.get('[data-cy=input-password]').type('empiresucks')
    cy.get('[data-cy=manual-login]').click()
    cy.get('[data-cy=formerror]').should('exist')
  })

  it('login with working credentials', () => {
    cy.get('[data-cy=input-username]').clear().type('nils')
    cy.get('[data-cy=input-password]').clear().type('nils')
    cy.get('[data-cy=manual-login]').click()
    cy.url().should('include', '/dashboard')
  })

  it('check studio', () => {
    // Extend test with Cypress Studio
  })
})
