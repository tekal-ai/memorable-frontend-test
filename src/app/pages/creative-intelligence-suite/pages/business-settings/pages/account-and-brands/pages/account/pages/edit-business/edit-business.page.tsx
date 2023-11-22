import { FC } from "react";
import { useRequestFeature } from "src/app/features/operations/request.feature";
import { useBusinessDomain } from "src/domain/business/business.domain";
import { BusinessAccount } from "src/graphql/client";
import { EditBusinessForm } from "./edit-business.form.page";
import useSWR from "swr";

type EditBusinessPageProps = {
  onSuccess?: () => void;
  onError?: () => void;
};

const EditBusinessPage: FC<EditBusinessPageProps> = ({
  onSuccess,
  onError,
}) => {
  const { getBusinessAccount, updateBusiness } = useBusinessDomain();
  const { sendToastRequest } = useRequestFeature();

  const { data: businessAccount } = useSWR(
    "gettingBusinessAccount",
    getBusinessAccount,
  );

  const onSubmit = async (values: Partial<BusinessAccount>) => {
    sendToastRequest({
      request: updateBusiness(values),
      onSuccess: () => {
        if (onSuccess) onSuccess();
      },
      onError: () => {
        if (onError) onError();
      },
    }).then();
  };

  return (
    <EditBusinessForm
      onSubmit={onSubmit}
      defaultValues={{
        businessName: businessAccount?.businessName,
        address: businessAccount?.address,
        businessPhone: businessAccount?.businessPhone,
        website: businessAccount?.website,
      }}
    />
  );
};
export default EditBusinessPage;
