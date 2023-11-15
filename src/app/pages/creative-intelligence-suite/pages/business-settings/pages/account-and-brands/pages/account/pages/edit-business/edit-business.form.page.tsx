import { FC } from "react";
import { useForm } from "react-hook-form";
import { ButtonUI } from "src/app/ui/buttons/button.ui";

export type FormComponent = {
  onSubmit: (values: any) => void;
  onCancel?: () => void;
  submitBtnLabel?: string;
  defaultValues?: any;
  isLoading?: boolean;
};

export const EditBusinessForm: FC<FormComponent> = ({
  onSubmit,
  submitBtnLabel = "Submit",
  defaultValues = {},
}) => {
  const { register, handleSubmit } = useForm({ defaultValues });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-4 py-4">
        <label htmlFor="businessName">
          <div className="pb-2">Legal Business Name:</div>
          <input id="businessName" {...register("businessName")} type="text" />
        </label>

        <label htmlFor="address">
          <div className="pb-2">Address:</div>
          <input id="address" type="text" {...register("address")} />
        </label>

        <label htmlFor="businessPhone">
          <div className="pb-2">Phone:</div>
          <input
            id="businessPhone"
            type="text"
            {...register("businessPhone")}
          />
        </label>

        <label htmlFor="website">
          <div className="pb-2">Website:</div>
          <input id="website" type="text" {...register("website")} />
        </label>
      </div>

      <div className="h-4"></div>
      <div>
        <ButtonUI onClick={handleSubmit(onSubmit)}>{submitBtnLabel}</ButtonUI>
      </div>
    </form>
  );
};
