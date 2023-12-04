import { Box, BoxProps } from "@mui/material";
import { FormProvider } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

type BookingFormProps = {
  children: React.ReactNode;
  formMethods: any;
  "data-cy"?: string;
  devTool?: boolean;
} & BoxProps &
  React.HTMLProps<HTMLFormElement>;

const BookingForm = ({
  formMethods,
  "data-cy": dataCy = "BookingForm",
  devTool = true,
  children,
  onSubmit,
  ...rest
}: BookingFormProps) => {
  return (
    <FormProvider {...formMethods}>
      <Box data-cy={dataCy} {...rest}>
        {devTool && (
          <div data-testid="BookingForm.Devtool">
            <DevTool control={formMethods.control} />
          </div>
        )}
        <form onSubmit={formMethods.handleSubmit(onSubmit)}>{children}</form>
      </Box>
    </FormProvider>
  );
};

export default BookingForm;
