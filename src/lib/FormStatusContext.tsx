"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

interface FormStatus {
  submitting: boolean;
  setSubmitting: (value: boolean) => void;
}

const FormStatusContext = createContext<FormStatus | null>(null);

export function FormStatusProvider({ children }: { children: ReactNode }) {
  const [submitting, setSubmitting] = useState(false);

  return (
    <FormStatusContext.Provider value={{ submitting, setSubmitting }}>
      {children}
    </FormStatusContext.Provider>
  );
}

export function useFormStatus() {
  const ctx = useContext(FormStatusContext);
  if (!ctx) {
    throw new Error("useFormStatus must be used within FormStatusProvider");
  }
  return ctx;
}
