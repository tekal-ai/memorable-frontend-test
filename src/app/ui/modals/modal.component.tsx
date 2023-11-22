import { Modal } from "antd";
import { FC, useEffect, useState } from "react";
import { ButtonUI } from "../buttons/button.ui";

type ModalProps = {
  trigger: React.ReactNode;
  body?: React.ReactNode;
  onOk?: () => void;
  title: string;
  propsTrigger?: any;
  isOpen?: boolean;
  onCancel?: () => void;
};

export const ModalUI: FC<ModalProps> = ({
  trigger,
  children,
  onCancel,
  title,
  isOpen,
  onOk,
  propsTrigger = {},
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>();

  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  const showModal = () => {
    isOpen = undefined;
    setIsModalOpen(true);
  };

  const handleOk = () => {
    closeModal();
    if (onOk) onOk();
  };

  const handleCancel = () => {
    closeModal();
    if (onCancel) onCancel();
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <ButtonUI onClick={showModal} {...propsTrigger}>
        {trigger}
      </ButtonUI>
      <Modal
        title={title}
        open={isModalOpen}
        footer={[]}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {children}
      </Modal>
    </>
  );
};
