import { Button } from "@mui/material";
import { ReactNode } from "react";
import { useForm } from "react-hook-form";
import BookingForm from "../components/forms/booking-form/booking-form.component";

type TestFormProviderProps = {
  children: ReactNode;
};

export const TestFormProvider = ({ children }: TestFormProviderProps) => {
  const formMethods = useForm();

  return (
    <BookingForm
      formMethods={formMethods}
      onSubmit={formMethods.handleSubmit(() => jest.fn())}
      devTool={false}
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
      devTool={false}
    >
      {children}
      <Button type="submit" data-testid="TestFormProvider.Button">
        Submit
      </Button>
    </BookingForm>
  );
};
