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
              <p data-cy="BookingTextField.HelperText">{error?.message}</p>
            )
          }
          fullWidth
          data-cy={`BookingTextField.${name}`}
          {...field}
          {...rest}
        />
      )}
    />
  );
};

export default BookingTextField;
