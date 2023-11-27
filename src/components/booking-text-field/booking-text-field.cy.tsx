import { ReactNode } from "react";
import {
  TestFormProvider,
  TestFormProviderWithError,
} from "../../test-utils/wrappers.test-utils";
import BookingTextField from "./booking-text-field.component";

const TestComponent = ({ children }: { children: ReactNode }) => {
  return <TestFormProvider>{children}</TestFormProvider>;
};

describe("booking-text-field", () => {
  it("should renders the component", () => {
    cy.mount(
      <TestComponent>
        <BookingTextField
          name="name"
          defaultValue="test value"
          label="test label"
        />
      </TestComponent>
    );
    cy.dataCy("BookingTextField.name").should("exist");
  });

  it("should contains label", () => {
    cy.mount(
      <TestComponent>
        <BookingTextField
          name="name"
          defaultValue="test value"
          label="test label"
        />
      </TestComponent>
    );
    cy.get("label").should("have.text", "test label");
  });

  it("should contains input", () => {
    cy.mount(
      <TestComponent>
        <BookingTextField
          name="name"
          defaultValue="test value"
          label="test label"
        />
      </TestComponent>
    );
    cy.get("input").should("have.value", "test value");
  });

  it("should be able to used as password field", () => {
    cy.mount(
      <TestComponent>
        <BookingTextField
          name="name"
          defaultValue="test value"
          label="test label"
          type="password"
        />
      </TestComponent>
    );
    cy.get("input").should("have.attr", "type", "password");
  });

  it.only("should handle error message", () => {
    cy.mount(
      <TestFormProviderWithError>
        <BookingTextField name="testField" defaultValue="" label="test label" />
      </TestFormProviderWithError>
    );
    cy.dataCy("TestFormProvider.Button").click();
    cy.dataCy("BookingTextField.HelperText").should("have.text", "Test Error");
  });
});
