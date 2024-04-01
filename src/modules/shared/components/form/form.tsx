import { ForwardRefExoticComponent, ReactNode, RefAttributes } from "react";
import {
  Controller,
  ControllerProps,
  Path,
  useFormContext,
} from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Input, InputProps } from "../..";

export type InputConfigComponentProps = InputProps;

export type InputConfigType<D extends object> = {
  name: Path<D>;
  label: string;
  containerClassName?: string;
  rules?: ControllerProps<D>["rules"];
  Component?: ForwardRefExoticComponent<
    Omit<InputConfigComponentProps, "ref"> & RefAttributes<HTMLInputElement>
  >;
  inputProps?: Partial<HTMLInputElement>;
};

export type FormProps<D extends object> = {
  inputsConfig: InputConfigType<D>[];
};

export const Form = <D extends object>({
  inputsConfig,
}: FormProps<D>): ReactNode => {
  const { t } = useTranslation();
  const { control } = useFormContext<D>();

  return (
    <div className="flex flex-[2_2_0%] flex-col justify-center gap-12">
      <h1 className="text-5xl font-bold text-gray-200">
        {t("minifig|form|title")}
      </h1>
      <div className="grid grid-cols-2 gap-x-8">
        {inputsConfig?.map(
          ({
            name,
            rules,
            containerClassName,
            label,
            Component,
            inputProps,
          }) => {
            return (
              <Controller
                key={name}
                control={control}
                name={name}
                rules={rules}
                render={({ field, fieldState: { error } }) => {
                  const Comp = Component || Input;
                  return (
                    <Comp
                      {...field}
                      {...inputProps}
                      message={error?.message}
                      containerClassName={containerClassName}
                      label={label}
                    />
                  );
                }}
              />
            );
          }
        )}
      </div>
    </div>
  );
};
