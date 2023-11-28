import { render, screen } from "@testing-library/react";
import { TestFormProvider } from "../../../test-utils/wrappers.test-utils";

describe("booking-form", () => {
  test("should work with devtool", () => {
    render(
      <TestFormProvider devTool={true}>
        <input />
      </TestFormProvider>
    );

    const devtool = screen.getByTestId("BookingForm.Devtool");
    expect(devtool).toBeInTheDocument();
  });

  test("should work without devtool", () => {
    render(
      <TestFormProvider>
        <input />
      </TestFormProvider>
    );

    const devtool = screen.queryByTestId("BookingForm.Devtool");
    expect(devtool).not.toBeInTheDocument();
  });
});
