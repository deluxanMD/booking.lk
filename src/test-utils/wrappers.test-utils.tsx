import { Button } from "@mui/material";
import { ReactNode } from "react";
import { useForm } from "react-hook-form";
import BookingForm from "../components/forms/booking-form/booking-form.component";

type TestFormProviderProps = {
  children: ReactNode;
  devTool?: boolean;
  onSubmit?: () => void;
};

export const TestFormProvider = ({
  children,
  devTool,
  onSubmit,
}: TestFormProviderProps) => {
  const formMethods = useForm();
  const jestFn = jest.fn();

  return (
    <BookingForm
      formMethods={formMethods}
      onSubmit={formMethods.handleSubmit(onSubmit ?? jestFn)}
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
  onSubmit,
}: TestFormProviderProps) => {
  const formMethods = useForm({
    resolver: () => {
      return {
        values: {},
        errors: { testField: { message: "Test Error", type: "test" } },
      };
    },
  });
  const jestFn = jest.fn();

  return (
    <BookingForm
      formMethods={formMethods}
      onSubmit={formMethods.handleSubmit(onSubmit ?? jestFn)}
    >
      {children}
      <Button type="submit" data-testid="TestFormProvider.Button">
        Submit
      </Button>
    </BookingForm>
  );
};
