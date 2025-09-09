'use client';
import React from "react";
import { ToastContainer } from "./ToastStyle";

type ToastProps = {
  message: string;
};

const Toast = ({ message }: ToastProps) => {
  return <ToastContainer>{message}</ToastContainer>;
};

export default Toast;
