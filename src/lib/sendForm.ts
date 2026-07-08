import type { ContactFormData } from "./validation";

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";
const TELEGRAM_WORKER_URL = process.env.NEXT_PUBLIC_TELEGRAM_WORKER_URL ?? "";

export class FormSubmitError extends Error {}

async function sendEmail(data: ContactFormData): Promise<void> {
  const isConfigured =
    EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY;

  if (!isConfigured) {
    await new Promise((resolve) => setTimeout(resolve, 600));
    return;
  }

  const emailjs = await import("@emailjs/browser");

  await emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    {
      from_name: data.name,
      company: data.company,
      reply_to: data.email,
      phone: data.phone,
      message: data.comment,
    },
    { publicKey: EMAILJS_PUBLIC_KEY },
  );
}

async function sendTelegram(data: ContactFormData): Promise<void> {
  if (!TELEGRAM_WORKER_URL) {
    return;
  }

  const response = await fetch(TELEGRAM_WORKER_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Telegram notification failed");
  }
}

export async function sendContactForm(data: ContactFormData): Promise<void> {
  const results = await Promise.allSettled([
    sendEmail(data),
    sendTelegram(data),
  ]);

  const allFailed = results.every((result) => result.status === "rejected");

  if (allFailed) {
    throw new FormSubmitError(
      "Не удалось отправить форму. Попробуйте ещё раз.",
    );
  }
}
