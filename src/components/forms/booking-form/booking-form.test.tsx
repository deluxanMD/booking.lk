import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { TestFormProvider } from "../../../test-utils/wrappers.test-utils";

const TestComponent = ({ devTool }: { devTool?: boolean }) => {
  return (
    <TestFormProvider devTool={devTool ?? true}>
      <input />
    </TestFormProvider>
  );
};

describe("booking-form", () => {
  test("should work with devtool", () => {
    render(<TestComponent />);

    const devtool = screen.getByTestId("BookingForm.Devtool");
    expect(devtool).toBeInTheDocument();
  });

  test("should work without devtool", () => {
    render(<TestComponent devTool={false} />);

    const devtool = screen.queryByTestId("BookingForm.Devtool");
    expect(devtool).not.toBeInTheDocument();
  });

  test("should handle form submit", async () => {
    const onSubmit = jest.fn();

    render(
      <TestFormProvider devTool={true} onSubmit={onSubmit}>
        <input />
      </TestFormProvider>
    );

    const submitBtn = screen.getByTestId("TestFormProvider.Button");
    fireEvent.submit(submitBtn);

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalled();
    });
  });
});
