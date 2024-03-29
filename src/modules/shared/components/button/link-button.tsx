import { ReactNode, forwardRef } from "react";
import { Link, LinkProps } from "react-router-dom";
import { type ClassValue, type VariantProps } from "tailwind-variants";
import { getClassName } from "./get-classname";

export type LinkButtonProps = {
  children?: ReactNode;
  className?: ClassValue;
} & VariantProps<typeof getClassName> &
  LinkProps;

export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ children, variant = "primary", className, ...restLinkProps }, ref) => {
    return (
      <>
        <Link
          {...(restLinkProps as LinkProps)}
          ref={ref}
          className={getClassName({ variant, className })}
        >
          {children}
        </Link>
      </>
    );
  }
);
