import { FC, useRef } from "react";
import { SubmitHandler } from "react-hook-form";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import { Button } from "../shared";
import {
  InputConfigType,
  MinifigSummary,
  ShippingForm,
  ShippingFormRefType,
} from "./components";

type ShipmentFormType = {
  firstName: string;
  surname: string;
  phone: string;
  email: string;
  birth: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
};

const shipmentFormDefaultValues: ShipmentFormType = {
  firstName: "",
  surname: "",
  phone: "",
  email: "",
  birth: "",
  address: "",
  city: "",
  state: "",
  zipCode: "",
};

const shipmentFormInputsConfig: InputConfigType<ShipmentFormType>[] = [
  {
    name: "firstName",
    label: i18n.t("minifig|form|firstName"),
    rules: {
      required: { value: true, message: i18n.t("shared|form|required") },
    },
  },
  {
    name: "surname",
    label: i18n.t("minifig|form|surname"),
    rules: {
      required: { value: true, message: i18n.t("shared|form|required") },
    },
  },
  {
    name: "phone",

    label: i18n.t("minifig|form|phone"),
    rules: {
      required: { value: true, message: i18n.t("shared|form|required") },
    },
  },
  {
    name: "email",
    label: i18n.t("minifig|form|email"),
    rules: {
      required: { value: true, message: i18n.t("shared|form|required") },
    },
    containerClassName: "col-span-2",
  },
  {
    name: "birth",
    label: i18n.t("minifig|form|birth"),
    rules: {
      required: { value: true, message: i18n.t("shared|form|required") },
    },
    containerClassName: "col-span-2",
  },
  {
    name: "address",
    label: i18n.t("minifig|form|address"),
    rules: {
      required: { value: true, message: i18n.t("shared|form|required") },
    },
    containerClassName: "col-span-2",
  },
  {
    name: "city",
    label: i18n.t("minifig|form|city"),
    rules: {
      required: { value: true, message: i18n.t("shared|form|required") },
    },
    containerClassName: "col-span-2",
  },
  {
    name: "state",
    label: i18n.t("minifig|form|state"),
    rules: {
      required: { value: true, message: i18n.t("shared|form|required") },
    },
  },
  {
    name: "zipCode",
    label: i18n.t("minifig|form|zipCode"),
    rules: {
      required: { value: true, message: i18n.t("shared|form|required") },
    },
  },
];

export const Minifig: FC = () => {
  const { t } = useTranslation();
  const formRef = useRef<ShippingFormRefType>(null);

  const onSubmit: SubmitHandler<ShipmentFormType> = (data) => {
    console.log(data);
  };

  const handleSubmit = () => {
    formRef.current?.handleSubmit();
  };

  return (
    <div className="flex gap-8 p-8">
      <ShippingForm<ShipmentFormType>
        formRef={formRef}
        inputsConfig={shipmentFormInputsConfig}
        defaultValues={shipmentFormDefaultValues}
        onSubmit={onSubmit}
      />
      <MinifigSummary>
        <Button onClick={handleSubmit}>{t("shared|button|submit")}</Button>
      </MinifigSummary>
    </div>
  );
};
export default Minifig;
