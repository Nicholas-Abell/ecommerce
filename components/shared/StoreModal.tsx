import React from "react";
import Modal from "./Modal";
import { useStoreModal } from "@/hooks/useStoreModal";

type StoreModalProps = {};

const StoreModal: React.FC<StoreModalProps> = () => {
  const StoreModal = useStoreModal();

  return (
    <Modal
      title="Create Store"
      description="Add a new store to manage catagories"
      isOpen={StoreModal.isOpen}
      onClose={StoreModal.onClose}
    >
      Future Create Store Form
    </Modal>
  );
};
export default StoreModal;
