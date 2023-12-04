import {
  FormControl,
  FormHelperText,
  TextField,
  TextFieldProps,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type BookingTextFieldProps = {
  name: string;
  defaultValue?: string;
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
        <FormControl fullWidth sx={{ marginBottom: 1 }}>
          <TextField
            size={size}
            error={!!error}
            label={label}
            data-testid={`BookingTextField.${name}`}
            inputProps={{
              "data-testid": "BookingTextField.Input",
            }}
            {...field}
            {...rest}
          />
          {!!error && <FormHelperText error>{error?.message}</FormHelperText>}
        </FormControl>
      )}
    />
  );
};

export default BookingTextField;
