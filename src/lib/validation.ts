export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  comment: string;
}

export interface ContactFormErrors {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  comment?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+]?[\d\s().-]{7,20}$/;

const MAX_LENGTHS = {
  name: 100,
  company: 150,
  email: 254,
  phone: 30,
  comment: 1000,
} as const;

export function sanitizeInput(value: string): string {
  return value
    .replace(/[<>]/g, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+\s*=/gi, '')
    .trim();
}

export function validateContactForm(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {};

  const name = sanitizeInput(data.name);
  if (!name) {
    errors.name = 'Укажите ваше имя';
  } else if (name.length > MAX_LENGTHS.name) {
    errors.name = `Не более ${MAX_LENGTHS.name} символов`;
  }

  const company = sanitizeInput(data.company);
  if (company && company.length > MAX_LENGTHS.company) {
    errors.company = `Не более ${MAX_LENGTHS.company} символов`;
  }

  const email = sanitizeInput(data.email);
  if (!email) {
    errors.email = 'Укажите email';
  } else if (email.length > MAX_LENGTHS.email) {
    errors.email = `Не более ${MAX_LENGTHS.email} символов`;
  } else if (!EMAIL_RE.test(email)) {
    errors.email = 'Введите корректный email';
  }

  const phone = sanitizeInput(data.phone);
  if (!phone) {
    errors.phone = 'Укажите телефон';
  } else if (phone.length > MAX_LENGTHS.phone) {
    errors.phone = `Не более ${MAX_LENGTHS.phone} символов`;
  } else if (!PHONE_RE.test(phone)) {
    errors.phone = 'Введите корректный номер';
  }

  const comment = sanitizeInput(data.comment);
  if (!comment) {
    errors.comment = 'Напишите комментарий';
  } else if (comment.length > MAX_LENGTHS.comment) {
    errors.comment = `Не более ${MAX_LENGTHS.comment} символов`;
  }

  return errors;
}

export function hasErrors(errors: ContactFormErrors): boolean {
  return Object.values(errors).some(Boolean);
}

export function sanitizeFormData(data: ContactFormData): ContactFormData {
  return {
    name: sanitizeInput(data.name),
    company: sanitizeInput(data.company),
    email: sanitizeInput(data.email),
    phone: sanitizeInput(data.phone),
    comment: sanitizeInput(data.comment),
  };
}
