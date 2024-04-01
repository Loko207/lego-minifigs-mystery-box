import { FC } from "react";
import { FormProvider } from "react-hook-form";
import "react-international-phone/style.css";
import { Button, Form } from "../shared";
import { MinifigSummary } from "./components";
import {
  ShipmentFormType,
  shipmentFormInputsConfig,
} from "./form-shipment-inputs-config";
import { useMinifig } from "./use-minifig";

const Minifig: FC = () => {
  const { methods, onSubmit, disableSubmit, t } = useMinifig();

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex  max-w-screen-2xl gap-20 p-8">
        <FormProvider {...methods}>
          <Form<ShipmentFormType> inputsConfig={shipmentFormInputsConfig} />
          <MinifigSummary>
            <Button onClick={onSubmit} disabled={disableSubmit}>
              {t("shared|button|submit")}
            </Button>
          </MinifigSummary>
        </FormProvider>
      </div>
    </div>
  );
};
export default Minifig;
