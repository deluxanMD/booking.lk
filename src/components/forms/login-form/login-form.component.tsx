import React from "react";
import BookingTextField from "../fields/booking-text-field/booking-text-field.component";
import BookingCheckboxField from "../fields/booking-checkbox-field/booking-checkbox-field.component";

export type LoginFormValues = {
  email: string;
  password: string;
  remember: boolean;
};

const LoginForm = () => {
  return (
    <>
      <BookingTextField name="email" label="Email Address" />
      <BookingTextField name="password" label="Password" type="password" />
      <BookingCheckboxField name="remember" label="Remember me?" />
    </>
  );
};

export default LoginForm;
