"use client";
import React, { useEffect, useState } from "react";
import StoreModal from "../modal/StoreModal";

type ModalProviderProps = {};

const ModalProvider: React.FC<ModalProviderProps> = () => {
  //prevents hydration errors, particularly when working with local state
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <StoreModal />
    </>
  );
};
export default ModalProvider;
