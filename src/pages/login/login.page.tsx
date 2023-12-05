import { Grid } from "@mui/material";
import React from "react";
import BookingForm from "../../components/forms/booking-form/booking-form.component";
import LoginForm from "../../components/forms/login-form/login-form.component";
import { useLoginForm } from "../../components/forms/login-form/login-form.hooks";
import BookingButton from "../../components/forms/fields/booking-button/booking-button.component";

const Login = () => {
  const methods = useLoginForm();

  const handleLogin = () => {
    return null;
  };

  return (
    <Grid container justifyContent="center" mt={8} data-testid="Login.Page">
      <Grid item xs={10} md={4} lg={3}>
        <BookingForm formMethods={methods} onSubmit={handleLogin}>
          <LoginForm />
          <BookingButton
            data-testid="BookingButton.Login"
            variant="contained"
            type="submit"
            fullWidth
          >
            Login
          </BookingButton>
        </BookingForm>
      </Grid>
    </Grid>
  );
};

export default Login;
