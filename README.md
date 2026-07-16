# DIGIFORM — сайт диджитал-агентства полного цикла

> Имиджевый лендинг для performance-агентства с 15-летним опытом. Next.js App Router со статическим экспортом, SCSS-модули, форма обратной связи с двойной доставкой (EmailJS + Telegram), строгая типизация на TypeScript.

**Продакшн:** [digiform.ru](https://digiform.ru)

---

## О проекте

Одностраничный имиджевый сайт для digital-агентства DIGIFORM. Задача — представить экосистему услуг, технологический стек и кейсы агентства в формате быстрого, полностью статического сайта без бэкенда.

Основная инженерная задача: собрать сайт как статический экспорт (без Node-сервера на хостинге), сохранив при этом рабочую форму обратной связи, SEO-метаданные и строгую типизацию по всему проекту.

---

## Стек

| Слой           | Технология                                 |
| -------------- | ------------------------------------------ |
| Фреймворк      | Next.js 14 (App Router)                    |
| Язык           | TypeScript 5                               |
| UI             | React 18                                   |
| Стили          | SCSS-модули + CSS-модули                   |
| Сборка         | Next.js Static Export (`output: "export"`) |
| Отправка формы | EmailJS                                    |
| Уведомления    | Telegram (через Cloudflare Worker)         |
| Валидация      | Кастомная TS-валидация форм                |

---

## Архитектура

```
src/
├── app/                 # App Router: страницы, layout, метаданные, sitemap, robots
│   ├── page.tsx         # Главная — композиция всех секций
│   ├── layout.tsx       # Глобальный layout, SEO-метаданные
│   ├── privacy/         # Страница политики конфиденциальности
│   ├── sitemap.ts       # Динамическая генерация sitemap.xml
│   └── robots.ts        # Динамическая генерация robots.txt
├── components/          # Секции страницы
│   ├── Header/
│   ├── Hero/
│   ├── Ecosystem/
│   ├── Technologies/
│   ├── Focus/
│   ├── Clients/
│   ├── WhyDigiform/
│   ├── Footer/
│   ├── Parallax/
│   ├── Reveal/
│   └── SuccessModal/
├── lib/                 # Бизнес-логика
│   ├── sendForm.ts      # Отправка формы: EmailJS + Telegram параллельно
│   ├── validation.ts    # Валидация полей контактной формы
│   └── FormStatusContext.tsx  # Контекст состояния формы (idle/loading/success/error)
└── styles/
    └── _variables.scss  # Глобальные SCSS-переменные
next.config.mjs          # output: "export", trailingSlash: true
```

**Ключевые решения:**

- **Статический экспорт вместо SSR** — сайт полностью пререндерится в HTML/CSS/JS на этапе сборки (`next build` с `output: "export"`). Это позволяет хостить проект на обычном shared-хостинге без Node.js-сервера, отдавая статику через `.htaccess`.
- **Композиция секций через `page.tsx`** — каждая секция лендинга (Hero, Ecosystem, Technologies, Focus, Clients, WhyDigiform) — независимый компонент, собираемый в единую страницу. Упрощает переиспользование и переупорядочивание блоков.
- **Двойная доставка формы** — при отправке контактной формы данные параллельно уходят в EmailJS (письмо) и в Telegram-воркер (уведомление). Используется `Promise.allSettled`: если один канал упал, форма всё равно считается отправленной успешно, пока сработал хотя бы один.
- **Контекст статуса формы** — `FormStatusContext` хранит состояние отправки (`idle` / `loading` / `success` / `error`) и пробрасывается вглубь дерева без прокидывания пропсов через каждый компонент.
- **SEO из коробки** — `layout.tsx` задаёт полный набор метаданных (title-template, description, OpenGraph-ready keywords, canonical URL, правила для Googlebot), `sitemap.ts` и `robots.ts` генерируются динамически через Next.js Metadata API.
- **Path-алиасы** — `@/*` настроен в `tsconfig.json`, что убирает относительные импорты вида `../../../components`.

---

## Форма обратной связи

Форма построена вокруг трёх модулей:

**`validation.ts`** — типизированная валидация полей (`name`, `company`, `email`, `phone`, `comment`) с типом `ContactFormData`.

**`sendForm.ts`** — оркестрирует отправку. Если переменные окружения EmailJS не заданы, форма всё равно "работает" в деградированном режиме (имитация задержки), что удобно для локальной разработки без реальных ключей.

**`FormStatusContext.tsx`** — react-контекст, транслирующий статус отправки в `SuccessModal` и другие UI-элементы без лишних ре-рендеров всего дерева.

---

## SEO и метаданные

| Элемент             | Реализация                                                             |
| ------------------- | ---------------------------------------------------------------------- |
| Title / description | Заданы в `layout.tsx`, шаблон `%s — Digiform` для вложенных страниц    |
| Canonical URL       | `https://digiform.ru`                                                  |
| robots.txt          | Генерируется динамически (`robots.ts`)                                 |
| sitemap.xml         | Генерируется динамически (`sitemap.ts`)                                |
| Индексация Google   | `max-image-preview: large`, `max-snippet: -1`, `max-video-preview: -1` |

---

## Локальный запуск

```bash
# Установка зависимостей
npm install

# Настройка окружения
cp .env.example .env
# Заполнить: NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
#            NEXT_PUBLIC_EMAILJS_PUBLIC_KEY, NEXT_PUBLIC_TELEGRAM_WORKER_URL

# Dev-сервер с hot reload
npm run dev

# Статическая сборка (папка out/)
npm run build

# Линтинг
npm run lint
```

---

## Переменные окружения

| Переменная                        | Описание                                                  |
| --------------------------------- | --------------------------------------------------------- |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID`  | ID сервиса EmailJS                                        |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | ID шаблона письма EmailJS                                 |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`  | Публичный ключ EmailJS                                    |
| `NEXT_PUBLIC_TELEGRAM_WORKER_URL` | URL Cloudflare Worker для отправки уведомлений в Telegram |

---

## Деплой

Сборка (`npm run build`) генерирует статические файлы в `out/`. Содержимое этой папки заливается на хостинг как есть — Node.js-сервер на проде не требуется.

---

## Что в планах

- Добавление OpenGraph-изображений для превью в соцсетях
- Оптимизация LCP для Hero-секции
- Вынос секций в переиспользуемый UI-кит
- Улучшение доступности (a11y) — ARIA-атрибуты, фокус-менеджмент модалки
