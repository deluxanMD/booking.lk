/* eslint-disable @typescript-eslint/no-namespace */
/// <reference types="cypress" />
Cypress.Commands.add("dataCy", (value) => {
  const escapedValue = value.replace(/\./g, "\\.");
  return cy.get(`[data-cy=${escapedValue}]`);
});

declare global {
  namespace Cypress {
    interface Chainable {
      dataCy(value: string): Chainable<JQuery<HTMLElement>>;
    }
  }
}

export {};
