describe('login page', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/auth/login')
    cy.getBySel("email")
    cy.getBySel("password")
    cy.getBySel("submit")
  })
})