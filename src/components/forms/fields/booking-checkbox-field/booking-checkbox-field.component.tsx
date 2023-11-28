import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type BookingCheckboxFieldProps = {
  name: string;
  label: string;
};

const BookingCheckboxField = ({ name, label }: BookingCheckboxFieldProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, ...fieldRest }, fieldState: { error } }) => (
        <FormControl fullWidth>
          <FormControlLabel
            control={<Checkbox data-testid={`BookingCheckboxField.${name}`} />}
            label={label}
            checked={!!value}
            {...fieldRest}
          />
          {!!error && <FormHelperText error>{error?.message}</FormHelperText>}
        </FormControl>
      )}
    />
  );
};

export default BookingCheckboxField;
