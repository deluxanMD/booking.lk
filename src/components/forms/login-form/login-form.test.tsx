import { render, screen } from "@testing-library/react";
import { TestFormProvider } from "../../../test-utils/wrappers.test-utils";
import LoginForm from "./login-form.component";

const TestComponent = ({ devTool }: { devTool?: boolean }) => {
  return (
    <TestFormProvider devTool={devTool ?? true}>
      <LoginForm />
    </TestFormProvider>
  );
};

describe("login-form", () => {
  test("should handle page objects", () => {
    render(<TestComponent />);

    const emailField = screen.getByTestId("BookingTextField.email");
    const passwordField = screen.getByTestId("BookingTextField.password");
    const rememberField = screen.getByTestId("BookingCheckboxField.remember");

    expect(emailField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
    expect(rememberField).toBeInTheDocument();
  });
});
