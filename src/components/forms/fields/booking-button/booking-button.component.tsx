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
}: BookingButtonProps) => {
  return <LoadingButton data-testid={dataTestId}>{children}</LoadingButton>;
};

export default BookingButton;
