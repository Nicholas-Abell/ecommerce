"use client";
import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import { Button } from "../ui/button";

type AlertModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => {};
  loading: boolean;
};

const AlertModal: React.FC<AlertModalProps> = ({
  isOpen,
  onConfirm,
  onClose,
  loading,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Modal
      title="Are you sure?"
      description="This action cannot be undone."
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="pt-6 space-x-2 flex items-center justify-end w-full">
        <Button disabled={loading} variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button disabled={loading} variant="destructive" onClick={onConfirm}>
          Continue
        </Button>
      </div>
    </Modal>
  );
};
export default AlertModal;
