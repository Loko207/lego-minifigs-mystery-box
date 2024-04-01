import { FC, ReactNode } from "react";
import { cnBase } from "tailwind-variants";
import { InputProps } from "../../input";

type LabelWrapperProps = {
  message?: string;
  containerClassName?: string;
  label: string;
  children?: ReactNode;
} & Pick<InputProps, "message" | "containerClassName" | "label">;

export const LabelWrapper: FC<LabelWrapperProps> = ({
  message,
  label,
  containerClassName,
  children,
}) => {
  return (
    <label className={cnBase("flex flex-col gap-3", containerClassName)}>
      <p className="text-2xl text-gray-200">{label}</p>
      {children}
      <p className="h-8 text-xl text-red-500">{message}</p>
    </label>
  );
};
