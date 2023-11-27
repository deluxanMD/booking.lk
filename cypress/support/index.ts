/* eslint-disable @typescript-eslint/no-namespace */
/// <reference types="cypress" />
import "@cypress/code-coverage/support";
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

export default (on: any, config: any) => {
  // other tasks can be registered here

  // IMPORTANT to return the config object
  // with any changed environment variables
  return config;
};
