"use client";

import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";

export const ToastProvider = () => {
  //prevents hydration errors, particularly when working with local state
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return <Toaster />;
};
