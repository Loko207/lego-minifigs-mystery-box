import { ReactNode, Ref, forwardRef, useImperativeHandle } from "react";
import {
  Controller,
  ControllerProps,
  DefaultValues,
  Path,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Input } from "../../../shared";

export type InputConfigType<D extends object> = {
  name: Path<D>;
  label: string;
  containerClassName?: string;
  rules?: ControllerProps<D>["rules"];
};

export type ShippingFormProps<D extends object> = {
  inputsConfig: InputConfigType<D>[];
  defaultValues: DefaultValues<D>;
  onSubmit: SubmitHandler<D>;
  //we can extend this type by all arguments used in useForm(...args)
};
export type ShippingFormRefType = {
  handleSubmit: () => void;
};

export const ShippingFormInner = <D extends object>(
  { defaultValues, inputsConfig, onSubmit }: ShippingFormProps<D>,
  ref: Ref<ShippingFormRefType>
) => {
  const { t } = useTranslation();
  const { handleSubmit, control } = useForm<D>({
    defaultValues,
  });

  useImperativeHandle(ref, () => ({
    handleSubmit: handleSubmit(onSubmit),
  }));

  return (
    <div className="flex flex-[2_2_0%] flex-col">
      <h1>{t("minifig|form|title")}</h1>
      <form className="grid grid-cols-2 gap-8">
        {inputsConfig?.map(({ name, rules, containerClassName, label }) => {
          return (
            <Controller
              key={name}
              control={control}
              name={name}
              rules={rules}
              render={({ field, fieldState: { error } }) => {
                return (
                  <Input
                    {...field}
                    message={error?.message}
                    containerClassName={containerClassName}
                    label={label}
                  />
                );
              }}
            />
          );
        })}
      </form>
    </div>
  );
};

const ShippingFormWithRef = forwardRef(ShippingFormInner) as <D extends object>(
  props: ShippingFormProps<D> & { ref?: Ref<ShippingFormRefType> }
) => ReactNode;

export const ShippingForm = <D extends object>({
  formRef,
  ...rest
}: ShippingFormProps<D> & {
  formRef?: Ref<ShippingFormRefType>;
}): ReactNode => <ShippingFormWithRef {...rest} ref={formRef} />;
