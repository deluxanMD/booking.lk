import { TextField, TextFieldProps } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type BookingTextFieldProps = {
  name: string;
  defaultValue: string;
  label: string;
} & TextFieldProps;

const BookingTextField = ({
  size = "small",
  name,
  defaultValue,
  label,
  ...rest
}: BookingTextFieldProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      defaultValue={defaultValue}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          size={size}
          error={!!error}
          label={label}
          helperText={
            !!error && (
              <p data-testid="BookingTextField.HelperText">{error?.message}</p>
            )
          }
          fullWidth
          data-testid={`BookingTextField.${name}`}
          inputProps={{
            "data-testid": "BookingTextField.Input",
          }}
          {...field}
          {...rest}
        />
      )}
    />
  );
};

export default BookingTextField;
