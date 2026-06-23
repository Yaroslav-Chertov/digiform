import type { Metadata } from 'next';
import './globals.scss';

export const metadata: Metadata = {
  title: 'Digiform — digital-агентство',
  description:
    'Digiform строит маркетинг на данных реальных продаж. Помогаем брендам управлять спросом и увеличивать выручку.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
