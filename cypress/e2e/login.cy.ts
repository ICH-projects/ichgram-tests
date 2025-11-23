const { host } = Cypress.env();

describe("login page", () => {
  it("redirects to the home page after successful login", () => {
    cy.fixture("login-success").then(({ email, password }) => {
      cy.visit(`${host}/auth/login`);
      cy.getBySel("loginPage");
      cy.login(email, password);
      cy.getBySel("homePage");
    });
  });
});
