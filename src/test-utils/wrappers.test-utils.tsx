import { ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";

type TestFormProviderProps = {
  children: ReactNode;
};

export const TestFormProvider = ({ children }: TestFormProviderProps) => {
  const formMethods = useForm();

  const onSubmit = jest.fn();

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};
