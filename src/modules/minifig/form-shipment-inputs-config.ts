import dayjs from "dayjs";
import phone from "phone";
import { postcodeValidator } from "postcode-validator";
import i18n from "../../i18n";
import { InputConfigType, PhoneInput } from "../shared";

export type ShipmentFormType = {
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

export const shipmentFormDefaultValues: ShipmentFormType = {
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

export const shipmentFormInputsConfig: InputConfigType<ShipmentFormType>[] = [
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
      validate: (phoneNumber) =>
        phone(phoneNumber)?.isValid || i18n.t("error|phone"),
    },
    Component: PhoneInput,
    containerClassName: "col-span-2",
  },
  {
    name: "email",
    label: i18n.t("minifig|form|email"),
    rules: {
      required: { value: true, message: i18n.t("shared|form|required") },
      validate: (email) =>
        // eslint-disable-next-line no-useless-escape
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email) || i18n.t("error|email"),
    },
    containerClassName: "col-span-2",
    inputProps: {
      type: "email",
    },
  },
  {
    name: "birth",
    label: i18n.t("minifig|form|birth"),
    rules: {
      required: { value: true, message: i18n.t("shared|form|required") },
      validate: (birthDay) =>
        dayjs(birthDay).isBefore(dayjs()) || i18n.t("error|birth"),
    },
    containerClassName: "col-span-2",
    inputProps: {
      type: "date",
      className: "cursor-text",
    },
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
      validate: (zipCode) =>
        // by default zipcode is set for US
        // we should consider validation for chosen location
        // e.g. we should add country select and depending on that value we should validate zip code
        postcodeValidator(zipCode, "US") || i18n.t("error|zipCode"),
    },
  },
];
