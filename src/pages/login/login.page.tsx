import { Grid } from "@mui/material";
import React from "react";
import BookingForm from "../../components/forms/booking-form/booking-form.component";
import LoginForm from "../../components/forms/login-form/login-form.component";
import { useLoginForm } from "../../components/forms/login-form/login-form.hooks";
import BookingButton from "../../components/forms/fields/booking-button/booking-button.component";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const methods = useLoginForm();
  const navigate = useNavigate();

  const handleLogin = (data: any) => {
    if (data.email === "deluxan.m@icloud.com" && data.password === "12345678") {
      navigate("/");
    }
  };

  return (
    <Grid container justifyContent="center" mt={8}>
      <Grid item xs={10} md={4} lg={3}>
        <BookingForm formMethods={methods} onSubmit={handleLogin}>
          <LoginForm />
          <BookingButton variant="contained" type="submit" fullWidth>
            Login
          </BookingButton>
        </BookingForm>
      </Grid>
    </Grid>
  );
};

export default Login;
