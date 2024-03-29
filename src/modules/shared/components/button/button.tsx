import { ButtonHTMLAttributes, ReactNode, forwardRef } from "react";
import { type ClassValue, type VariantProps } from "tailwind-variants";
import { getClassName } from "./get-classname";

export type ButtonProps = {
  children?: ReactNode;
  className?: ClassValue;
} & VariantProps<typeof getClassName> &
  ButtonHTMLAttributes<unknown>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = "primary", className, ...restButtonProps }, ref) => {
    return (
      <button
        {...restButtonProps}
        ref={ref}
        className={getClassName({ variant, className })}
      >
        {children}
      </button>
    );
  }
);
