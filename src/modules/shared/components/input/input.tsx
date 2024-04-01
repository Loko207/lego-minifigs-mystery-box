import { forwardRef } from "react";
import { ControllerRenderProps } from "react-hook-form";
import { cnBase } from "tailwind-variants";
import { LabelWrapper } from "./components";

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
      <LabelWrapper
        containerClassName={containerClassName}
        label={label}
        message={message}
      >
        <input
          {...restInputProps}
          ref={ref}
          className={cnBase("rounded p-3 text-2xl", className)}
        />
      </LabelWrapper>
    );
  }
);
