import { LoadingButton } from "@mui/lab";
import { ButtonProps } from "@mui/material";
import { ReactNode } from "react";

type BookingButtonProps = {
  children: ReactNode;
  "data-testid"?: string;
} & ButtonProps;

const BookingButton = ({
  children,
  "data-testid": dataTestId,
  ...rest
}: BookingButtonProps) => {
  return (
    <LoadingButton data-testid={dataTestId ?? "BookingButton"} {...rest}>
      {children}
    </LoadingButton>
  );
};

export default BookingButton;
