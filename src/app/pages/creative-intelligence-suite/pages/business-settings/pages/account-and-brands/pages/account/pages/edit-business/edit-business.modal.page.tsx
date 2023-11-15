import { FC, useState } from "react";
import { ModalUI } from "src/app/ui/modals/modal.component";
import EditBusinessPage from "./edit-business.page";
import { EditOutlined } from "@ant-design/icons";
import useSWR from "swr";

const EditBusinessModalPage: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean | undefined>(undefined);

  const { mutate } = useSWR("gettingBusinessAccount");

  return (
    <>
      <ModalUI
        isOpen={isOpen}
        title="Edit Business"
        propsTrigger={{ type: "text" }}
        trigger={
          <div className="flex items-center gap-2">
            <EditOutlined />
            Edit
          </div>
        }
      >
        <EditBusinessPage
          onSuccess={() => {
            setIsOpen(false);
            mutate();
          }}
        />
      </ModalUI>
    </>
  );
};
export default EditBusinessModalPage;
