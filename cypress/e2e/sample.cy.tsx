describe("sample", () => {
  it("should works", () => {
    cy.visit("https://docs.cypress.io/examples/recipes/");
    cy.get("h1").should("have.text", "/recipes/i");
  });
});
