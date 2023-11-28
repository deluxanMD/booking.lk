import { render, screen } from "@testing-library/react";
import BookingButton from "./booking-button.component";
import React from "react";

describe("booking-button", () => {
  test("should render the component", () => {
    render(<BookingButton>Test</BookingButton>);
    const buttonEl = screen.getByTestId("BookingButton");
    expect(buttonEl).toBeInTheDocument();
  });
});
