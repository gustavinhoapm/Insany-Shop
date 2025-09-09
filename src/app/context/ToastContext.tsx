'use client';
import React, { createContext, useContext, useState } from "react";
import Toast from "../../components/Toast/Toast";

type ToastContextType = {
  showToast: (message: string) => void;
};

const ToastContext = createContext<ToastContextType>({ showToast: () => {} });

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [message, setMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setMessage(msg);
    setTimeout(() => setMessage(null), 3000);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {message && <Toast message={message} />}
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
