import { LegacyRef, forwardRef } from "react";
import {
  PhoneInput as LibPhoneInput,
  PhoneInputRefType,
} from "react-international-phone";
import "react-international-phone/style.css";
import { cnBase } from "tailwind-variants";
import { LabelWrapper } from "./components";
import { InputProps } from "./input";

export const PhoneInput = forwardRef<HTMLInputElement, InputProps>(
  (
    { label, containerClassName, message, className, ...restInputProps },
    ref
  ) => {
    return (
      <LabelWrapper
        containerClassName={containerClassName}
        label={label}
        message={message}
      >
        <LibPhoneInput
          {...restInputProps}
          ref={ref as LegacyRef<PhoneInputRefType>}
          className={cnBase("h-12 rounded", className)}
          countrySelectorStyleProps={{
            buttonClassName: "!h-12 w-20",
            dropdownStyleProps: {
              listItemClassName: "h-20",
              listItemCountryNameClassName: "text-xl",
              listItemDialCodeClassName: "text-xl",
            },
          }}
          inputClassName="w-full !h-12 !text-2xl"
        />
      </LabelWrapper>
    );
  }
);
