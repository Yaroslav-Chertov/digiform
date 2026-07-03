"use client";

import { useFormStatus } from "@/lib/FormStatusContext";
import styles from "@/app/page.module.css";

export default function MobileSubmit() {
  const { submitting } = useFormStatus();

  return (
    <button
      type="submit"
      form="contact-form"
      className={styles.mobileSubmit}
      disabled={submitting}
    >
      {submitting ? "Отправка..." : "Отправить"}
    </button>
  );
}
