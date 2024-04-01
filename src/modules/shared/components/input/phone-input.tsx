import { LegacyRef, forwardRef } from "react";
import {
  PhoneInput as LibPhoneInput,
  PhoneInputRefType,
} from "react-international-phone";
import "react-international-phone/style.css";
import { cnBase } from "tailwind-variants";
import { InputProps } from "./input";

export const PhoneInput = forwardRef<HTMLInputElement, InputProps>(
  (
    { label, containerClassName, message, className, ...restInputProps },
    ref
  ) => {
    return (
      <label className={cnBase("flex flex-col gap-3", containerClassName)}>
        <p>{label}</p>
        <LibPhoneInput
          {...restInputProps}
          ref={ref as LegacyRef<PhoneInputRefType>}
          className={cnBase("h-12 rounded", className)}
          countrySelectorStyleProps={{
            buttonClassName: "!h-12",
            dropdownStyleProps: { listItemClassName: "h-10" },
          }}
          inputClassName="w-full !h-12"
        />
        {message && <p>{message}</p>}
      </label>
    );
  }
);
