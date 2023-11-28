import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import BookingCheckboxField from "./booking-checkbox-field.component";
import {
  TestFormProvider,
  TestFormProviderWithError,
} from "../../../../test-utils/wrappers.test-utils";

const TestComponent = () => {
  return (
    <TestFormProvider>
      <BookingCheckboxField name="name" label="label" />
    </TestFormProvider>
  );
};

describe("booking-checkbox-field", () => {
  test("should render the component", () => {
    render(<TestComponent />);

    const checkboxField = screen.getByTestId("BookingCheckboxField.name");
    expect(checkboxField).toBeInTheDocument();
  });

  test("should handle helper text", async () => {
    render(
      <TestFormProviderWithError>
        <BookingCheckboxField name="testField" label="test label" />
      </TestFormProviderWithError>
    );

    const submitbtn = screen.getByTestId("TestFormProvider.Button");
    fireEvent.submit(submitbtn);

    await waitFor(() => {
      expect(screen.getByText(/test error/i)).toBeInTheDocument();
    });
  });
});
