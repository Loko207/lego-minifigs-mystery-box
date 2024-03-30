import { forwardRef } from "react";
import { ControllerRenderProps } from "react-hook-form";
import { cnBase } from "tailwind-variants";

type InputProps = {
  message?: string;
  containerClassName?: string;
  label: string;
} & ControllerRenderProps;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ message, label, containerClassName, ...restInputProps }, ref) => {
    return (
      <label className={cnBase("flex flex-col gap-3", containerClassName)}>
        <p>{label}</p>
        <input {...restInputProps} ref={ref} className="rounded p-3" />
        {message && <p>{message}</p>}
      </label>
    );
  }
);
