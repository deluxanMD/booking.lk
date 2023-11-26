describe("sample", () => {
  cy.visit("https://docs.cypress.io/examples/recipes/");
  cy.find("h1").should("have.text", "/recipes/i");
});
