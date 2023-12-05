import { render, screen } from "@testing-library/react";
import Login from "./login.page";

describe("login page", () => {
  test("should render the page", () => {
    render(<Login />);

    const page = screen.getByTestId("Login.Page");
    expect(page).toBeInTheDocument();
  });
});
