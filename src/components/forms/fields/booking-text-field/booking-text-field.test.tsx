import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import BookingTextField from "./booking-text-field.component";
import {
  TestFormProvider,
  TestFormProviderWithError,
} from "../../../../test-utils/wrappers.test-utils";

const TestComponent = ({ type }: { type?: string }) => {
  return (
    <TestFormProvider>
      <BookingTextField
        name="name"
        defaultValue="test value"
        label="test label"
        type={type ?? "text"}
      />
    </TestFormProvider>
  );
};

describe("booking-text-field", () => {
  test("should render the component", () => {
    render(<TestComponent />);

    const textField = screen.getByTestId("BookingTextField.name");
    expect(textField).toBeInTheDocument();
  });

  test("should also be used as password field", () => {
    render(<TestComponent type="password" />);

    const input = screen.getByTestId("BookingTextField.Input");
    expect(input).toHaveAttribute("type", "password");
  });

  test("should handle helper text", async () => {
    render(
      <TestFormProviderWithError>
        <BookingTextField name="testField" defaultValue="" label="test label" />
      </TestFormProviderWithError>
    );

    const submitbtn = screen.getByTestId("TestFormProvider.Button");
    fireEvent.submit(submitbtn);

    await waitFor(() => {
      expect(screen.getByText(/test error/i)).toBeInTheDocument();
    });
  });
});
