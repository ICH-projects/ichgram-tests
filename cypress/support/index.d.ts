declare namespace Cypress {
  interface Chainable {
    getBySel(selector: string, ...args: any[]): Chainable<JQuery<HTMLElement>>;
    getBySelLike(
      selector: string,
      ...args: any[]
    ): Chainable<JQuery<HTMLElement>>;
    login(email: string, password): Chainable<JQuery<HTMLElement>>;
  }
}
