describe('login page', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/auth/login')
    cy.getBySel("loginPage")
    cy.getBySel("email").type("zolotukhinpv@i.ua")
    cy.getBySel("password").type("passWord2")
    cy.getBySel("submit").click()
    cy.getBySel("info").contains("Loading")
    cy.getBySel("homePage")
  })
})