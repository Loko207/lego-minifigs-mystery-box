import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { PATH } from "../../config/routes/routes";
import {
  ShipmentFormType,
  shipmentFormDefaultValues,
} from "./form-shipment-inputs-config";
import { usePartlists, usePartlistsPart } from "./hooks";

export const useMinifig = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const methods = useForm<ShipmentFormType>({
    defaultValues: shipmentFormDefaultValues,
  });
  const { trigger: createPartlist } = usePartlists();
  const { trigger: addParts } = usePartlistsPart();
  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = () => {
    handleSubmit(async ({ firstName, surname, email, partsDetails }) => {
      //if we there will be api for storing user details,
      //we should send request with body like 'ShipmentFormType' type without partsDetails prop
      try {
        if (partsDetails) {
          const result = await createPartlist({
            name: `${firstName}_${surname}_${email}`,
            num_parts: partsDetails.count || 0,
          });
          await addParts({
            listId: result.id,
            parts: partsDetails.parts,
          });
        }
        navigate(PATH.HOME);
        toast.success(t("success|submitted"));
      } catch {
        toast.error(t("error|something-wrong"));
      }
    })();
  };

  return { t, disableSubmit: !!Object.keys(errors)?.length, onSubmit, methods };
};
