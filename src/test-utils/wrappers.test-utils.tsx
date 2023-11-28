import { Button } from "@mui/material";
import { ReactNode } from "react";
import { useForm } from "react-hook-form";
import BookingForm from "../components/forms/booking-form/booking-form.component";

type TestFormProviderProps = {
  children: ReactNode;
  devTool?: boolean;
};

export const TestFormProvider = ({
  children,
  devTool,
}: TestFormProviderProps) => {
  const formMethods = useForm();

  return (
    <BookingForm
      formMethods={formMethods}
      onSubmit={formMethods.handleSubmit(() => jest.fn())}
      devTool={devTool ?? false}
    >
      {children}
      <Button type="submit" data-testid="TestFormProvider.Button">
        Submit
      </Button>
    </BookingForm>
  );
};

export const TestFormProviderWithError = ({
  children,
}: TestFormProviderProps) => {
  const formMethods = useForm({
    resolver: () => {
      return {
        values: {},
        errors: { testField: { message: "Test Error", type: "test" } },
      };
    },
  });

  return (
    <BookingForm
      formMethods={formMethods}
      onSubmit={formMethods.handleSubmit(() => jest.fn())}
    >
      {children}
      <Button type="submit" data-testid="TestFormProvider.Button">
        Submit
      </Button>
    </BookingForm>
  );
};
