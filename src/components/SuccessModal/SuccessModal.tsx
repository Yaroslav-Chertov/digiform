"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import styles from "./SuccessModal.module.scss";

interface SuccessModalProps {
  open: boolean;
  onClose: () => void;
}

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function SuccessModal({ open, onClose }: SuccessModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const scrollYRef = useRef(0);

  useIsomorphicLayoutEffect(() => {
    if (!open) return;

    scrollYRef.current = window.scrollY;

    closeRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollYRef.current}px`;
    document.body.style.width = "100%";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo({
        top: scrollYRef.current,
        left: 0,
        behavior: "instant",
      });
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-labelledby="success-modal-title"
      onClick={onClose}
    >
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button
          ref={closeRef}
          type="button"
          className={styles.close}
          onClick={onClose}
          aria-label="Закрыть"
        >
          <span aria-hidden="true" />
        </button>

        <span className={styles.dot} aria-hidden="true" />

        <h3 id="success-modal-title" className={styles.title}>
          Спасибо!
        </h3>
        <p className={styles.text}>
          Мы получили ваше обращение и скоро с&nbsp;вами свяжемся.
        </p>

        <button type="button" className={styles.action} onClick={onClose}>
          Хорошо
        </button>
      </div>
    </div>
  );
}
