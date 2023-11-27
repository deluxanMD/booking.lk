import { useForm } from "react-hook-form";
import BookingForm from "./booking-form.component";
import { ReactNode } from "react";

const TestForm = ({ children }: { children?: ReactNode }) => {
  const methods = useForm();
  return <BookingForm formMethods={methods}>{children}</BookingForm>;
};

describe("booking-form", () => {
  it("should renders the form", () => {
    cy.mount(<TestForm />);
    cy.dataCy("BookingForm").should("exist");
  });
});
