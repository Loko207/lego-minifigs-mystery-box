import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import "react-international-phone/style.css";
import { Button, Form } from "../shared";
import { MinifigSummary } from "./components";
import {
  ShipmentFormType,
  shipmentFormDefaultValues,
  shipmentFormInputsConfig,
} from "./form-shipment-inputs-config";

export const Minifig: FC = () => {
  const { t } = useTranslation();
  const methods = useForm<ShipmentFormType>({
    defaultValues: shipmentFormDefaultValues,
  });
  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = () => {
    handleSubmit((data) => console.log(data))();
  };

  return (
    <div className="flex gap-8 p-8">
      <FormProvider {...methods}>
        <Form<ShipmentFormType> inputsConfig={shipmentFormInputsConfig} />
        <MinifigSummary>
          <Button onClick={onSubmit} disabled={!!Object.keys(errors)?.length}>
            {t("shared|button|submit")}
          </Button>
        </MinifigSummary>
      </FormProvider>
    </div>
  );
};
export default Minifig;
