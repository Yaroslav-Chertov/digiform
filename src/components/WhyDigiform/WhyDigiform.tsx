"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { Reveal } from "@/components/Reveal/Reveal";
import { SuccessModal } from "@/components/SuccessModal/SuccessModal";
import {
  sanitizeFormData,
  validateContactForm,
  hasErrors,
  type ContactFormData,
  type ContactFormErrors,
} from "@/lib/validation";
import { sendContactForm, FormSubmitError } from "@/lib/sendForm";
import styles from "./WhyDigiform.module.scss";

const REASONS = [
  { title: "Работаем с данными,", highlight: "а не предложениями" },
  { title: "Фокусируемся", highlight: "на бизнес-результате" },
  { title: "Объединяем", highlight: "креатив и аналитику" },
  { title: "Развиваем", highlight: "собственные технологии" },
];

const INITIAL_DATA: ContactFormData = {
  name: "",
  company: "",
  email: "",
  phone: "",
  comment: "",
};

export default function WhyDigiform() {
  const [data, setData] = useState<ContactFormData>(INITIAL_DATA);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange =
    (field: keyof ContactFormData) => (e: ChangeEvent<HTMLInputElement>) => {
      setData((prev) => ({ ...prev, [field]: e.target.value }));
      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }));
      }
    };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError("");

    const clean = sanitizeFormData(data);
    const validationErrors = validateContactForm(clean);

    if (hasErrors(validationErrors)) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);

    try {
      await sendContactForm(clean);
      setData(INITIAL_DATA);
      setErrors({});
      setShowSuccess(true);
    } catch (err) {
      setSubmitError(
        err instanceof FormSubmitError
          ? err.message
          : "Что-то пошло не так. Попробуйте ещё раз.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className={styles.section} aria-label="Почему Digiform">
      <div className={styles.inner}>
        <div className={styles.left}>
          <Reveal>
            <h2 className={styles.heading}>
              Почему
              <br />
              Digiform
              <span className={styles.dot} aria-hidden="true" />
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <ul className={styles.reasons}>
              {REASONS.map((reason) => (
                <li key={reason.title} className={styles.reasonItem}>
                  <span className={styles.reasonTitle}>{reason.title}</span>
                  <span className={styles.reasonHighlight}>
                    {reason.highlight}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div id="discuss" className={styles.right}>
          <Reveal delay={80}>
            <h2 className={styles.formHeading}>
              Обсудим
              <span className={styles.dot} aria-hidden="true" />
              <br />
              задачу
            </h2>
          </Reveal>

          <Reveal delay={160}>
            <p className={styles.formIntro}>
              Если вам нужен измеримый
              <br />
              <strong>рост</strong>
              <span className={styles.formIntroNormal}>
                , а не просто активность
              </span>
            </p>
          </Reveal>

          <Reveal delay={220}>
            <form
              id="contact-form"
              className={styles.form}
              onSubmit={handleSubmit}
              noValidate
            >
              <div className={styles.field}>
                <input
                  className={styles.fieldInput}
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder=" "
                  maxLength={100}
                  value={data.name}
                  onChange={handleChange("name")}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                <label className={styles.fieldLabel} htmlFor="name">
                  Имя
                </label>
                <svg
                  className={styles.fieldLine}
                  viewBox="0 0 466 1"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path d="M0 0.5H466" stroke="#CAC5C5" />
                </svg>
                {errors.name && (
                  <span id="name-error" className={styles.fieldError}>
                    {errors.name}
                  </span>
                )}
              </div>

              <div className={styles.field}>
                <input
                  className={styles.fieldInput}
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  placeholder=" "
                  maxLength={150}
                  value={data.company}
                  onChange={handleChange("company")}
                  aria-invalid={!!errors.company}
                  aria-describedby={
                    errors.company ? "company-error" : undefined
                  }
                />
                <label className={styles.fieldLabel} htmlFor="company">
                  Компания
                </label>
                <svg
                  className={styles.fieldLine}
                  viewBox="0 0 466 1"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path d="M0 0.5H466" stroke="#CAC5C5" />
                </svg>
                {errors.company && (
                  <span id="company-error" className={styles.fieldError}>
                    {errors.company}
                  </span>
                )}
              </div>

              <div className={styles.field}>
                <input
                  className={styles.fieldInput}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder=" "
                  maxLength={254}
                  value={data.email}
                  onChange={handleChange("email")}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                <label className={styles.fieldLabel} htmlFor="email">
                  Email
                </label>
                <svg
                  className={styles.fieldLine}
                  viewBox="0 0 466 1"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path d="M0 0.5H466" stroke="#CAC5C5" />
                </svg>
                {errors.email && (
                  <span id="email-error" className={styles.fieldError}>
                    {errors.email}
                  </span>
                )}
              </div>

              <div className={styles.field}>
                <input
                  className={styles.fieldInput}
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder=" "
                  maxLength={30}
                  value={data.phone}
                  onChange={handleChange("phone")}
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                />
                <label className={styles.fieldLabel} htmlFor="phone">
                  Телефон
                </label>
                <svg
                  className={styles.fieldLine}
                  viewBox="0 0 466 1"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path d="M0 0.5H466" stroke="#CAC5C5" />
                </svg>
                {errors.phone && (
                  <span id="phone-error" className={styles.fieldError}>
                    {errors.phone}
                  </span>
                )}
              </div>

              <div className={styles.field}>
                <input
                  className={styles.fieldInput}
                  id="comment"
                  name="comment"
                  type="text"
                  placeholder=" "
                  maxLength={1000}
                  value={data.comment}
                  onChange={handleChange("comment")}
                  aria-invalid={!!errors.comment}
                  aria-describedby={
                    errors.comment ? "comment-error" : undefined
                  }
                />
                <label className={styles.fieldLabel} htmlFor="comment">
                  Комментарий
                </label>
                <svg
                  className={styles.fieldLine}
                  viewBox="0 0 466 1"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path d="M0 0.5H466" stroke="#CAC5C5" />
                </svg>
                {errors.comment && (
                  <span id="comment-error" className={styles.fieldError}>
                    {errors.comment}
                  </span>
                )}
              </div>

              <p className={styles.consent}>
                Нажав кнопку &laquo;Отправить&raquo;, вы&nbsp;даёте согласие
                на&nbsp;обработку персональных данных и&nbsp;соглашаетесь&nbsp;с{" "}
                <a
                  href="/privacy"
                  className={styles.consentLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Политикой конфиденциальности
                </a>
              </p>

              {submitError && (
                <p className={styles.submitError} role="alert">
                  {submitError}
                </p>
              )}

              <button
                className={styles.submit}
                type="submit"
                disabled={submitting}
              >
                {submitting ? "Отправка..." : "Отправить"}
              </button>
            </form>
          </Reveal>
        </div>
      </div>

      <SuccessModal open={showSuccess} onClose={() => setShowSuccess(false)} />
    </section>
  );
}
