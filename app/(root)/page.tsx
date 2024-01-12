"use client";
import { useEffect } from "react";

import { useStoreModal } from "@/hooks/useStoreModal";
import ModalProvider from "@/components/modal/ModalProvider";

export default function Home() {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ModalProvider />
      <p>jkhlkjhkjhkjhkjh</p>
    </main>
  );
}
