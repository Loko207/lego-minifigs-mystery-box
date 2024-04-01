import { forwardRef } from "react";
import { ControllerRenderProps } from "react-hook-form";
import { cnBase } from "tailwind-variants";

export type InputProps = {
  message?: string;
  containerClassName?: string;
  label: string;
  className?: string;
} & ControllerRenderProps;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { message, label, containerClassName, className, ...restInputProps },
    ref
  ) => {
    return (
      <label className={cnBase("flex flex-col gap-3", containerClassName)}>
        <p>{label}</p>
        <input
          {...restInputProps}
          ref={ref}
          className={cnBase("rounded p-3", className)}
        />
        {message && <p>{message}</p>}
      </label>
    );
  }
);
