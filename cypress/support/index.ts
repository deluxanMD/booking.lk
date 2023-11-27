/* eslint-disable @typescript-eslint/no-namespace */
/// <reference types="cypress" />
import "@cypress/code-coverage/support";

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
