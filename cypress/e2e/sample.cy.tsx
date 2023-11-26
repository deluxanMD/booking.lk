describe("sample", () => {
  it("should works", () => {
    cy.visit("https://docs.cypress.io/examples/recipes/");
    cy.find("h1").should("have.text", "/recipes/i");
  });
});
