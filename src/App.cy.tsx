import React from "react";
import App from "./App";

describe("app", () => {
  it("should work", () => {
    cy.mount(<App />);
    cy.dataCy("App.Container").should("exist");
    cy.dataCy("App.Container").should("have.text", "App Component");
  });
});
