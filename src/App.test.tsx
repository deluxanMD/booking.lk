import { render, screen } from "@testing-library/react";
import App from "./App";

describe("app component", () => {
  render(<App />);
  const appContainer = screen.getByTestId("App.Container");
  expect(appContainer).toBeInTheDocument();
});
