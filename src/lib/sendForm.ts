import type { ContactFormData } from './validation';

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? '';
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? '';
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? '';

export class FormSubmitError extends Error {}

export async function sendContactForm(
  data: ContactFormData
): Promise<void> {
  const isConfigured =
    EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY;

  if (!isConfigured) {
    await new Promise((resolve) => setTimeout(resolve, 600));
    return;
  }

  const emailjs = await import('@emailjs/browser');

  try {
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
      { publicKey: EMAILJS_PUBLIC_KEY }
    );
  } catch {
    throw new FormSubmitError(
      'Не удалось отправить форму. Попробуйте ещё раз.'
    );
  }
}
