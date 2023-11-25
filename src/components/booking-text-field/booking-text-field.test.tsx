import { fireEvent, render, screen } from "@testing-library/react";
import BookingTextField from "./booking-text-field.component";
import { TestFormProvider } from "../../test-utils/wrappers.test-utils";

const TestComponent = () => {
  return (
    <TestFormProvider>
      <BookingTextField
        name="testName"
        defaultValue="Test Value"
        label="Test Label"
      />
    </TestFormProvider>
  );
};

describe("booking-text-field", () => {
  let textField: HTMLElement;

  beforeEach(() => {
    render(<TestComponent />);
    textField = screen.getByRole("textbox");
  });

  test("should render the component", () => {
    expect(textField).toBeInTheDocument();
  });

  test("should have default value", () => {
    expect(textField).toHaveValue("Test Value");
  });

  test("should update value", () => {
    fireEvent.change(textField, { target: { value: "" } });
    expect(textField).toHaveValue("");
    fireEvent.change(textField, { target: { value: "something" } });
    expect(textField).toHaveValue("something");
  });
});
