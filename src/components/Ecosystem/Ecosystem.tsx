"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal/Reveal";
import styles from "./Ecosystem.module.scss";

const ITEMS = [
  {
    title: "Стратегия и аналитика",
    sub: [
      "Data-driven, бренд, коммуникационные и медиа стратегии",
      "Разработка digital-стратегии",
      "Аналитика категорий и спроса",
      "Аудит маркетинга и каналов",
      "Медиапланирование",
      "Прогнозирование эффективности",
    ],
  },
  {
    title: "Перфоманс маркетинг и Медийная реклама",
    sub: [
      "Запуск и ведение рекламных кампаний",
      "Оптимизация под бизнес KPI",
      "Управление аудиторными сегментами",
      "Масштабирование кампаний",
      "Работа с платным трафиком",
    ],
  },
  {
    title: "Поисковое продвижение и видимость",
    sub: [
      "Поисковое продвижение (SEO)",
      "Оптимизация присутствия в поисковых и AI-средах (GEO)",
      "Управление репутацией в интернете (ORM)",
      "Управление поисковой выдачей (SERM)",
      "Работа с отзывами и рейтингами",
    ],
  },
  {
    title: "Блогеры, социальные сети, контент",
    sub: [
      "Реклама у блогеров",
      "Комплексное ведение социальных сетей",
      "Разработка контент-стратегии",
      "Создание контента",
      "Продвижение в социальных платформах",
      "Работа с аудиторией и комьюнити",
    ],
  },
  {
    title: "Креатив и брендинг",
    sub: [
      "Разработка креативных концепций",
      "Брендинг и фирменный стиль",
      "Рекламные кампании",
      "Спецпроекты и коллаборации",
    ],
  },
  {
    title: "Дизайн",
    sub: [
      "UX/UI-дизайн",
      "Digital-дизайн",
      "Дизайн коммуникаций",
      "Визуальные системы бренда",
    ],
  },
  {
    title: "Веб- и мобильная разработка",
    sub: [
      "Разработка сайтов",
      "Веб-платформы и сервисы",
      "Мобильные приложения",
      "Интеграции и техническая поддержка",
    ],
  },
  {
    title: "Продвижение на маркетплейсах",
    sub: [
      "Продвижение товаров на маркетплейсах",
      "Оптимизация карточек",
      "Управление рейтингами и отзывами",
      "Рекламные кампании внутри платформ",
      "Аналитика продаж и эффективности",
    ],
  },
];

const VISIBLE_COUNT = 5;

export default function Ecosystem() {
  const [open, setOpen] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  return (
    <section
      id="services"
      className={`${styles.ecosystem} ${showAll ? styles.showAll : ""}`}
      aria-label="Экосистема роста Digiform"
    >
      <div className={styles.inner}>
        <Reveal>
          <h2 className={styles.heading}>
            <span className={styles.headingBig}>Экосистема </span>{" "}
            <span className={styles.headingSmall}>
              роста&nbsp;Digiform
              <span className={styles.dot} aria-hidden="true" />
            </span>
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <ul className={styles.list}>
            {ITEMS.map((item, index) => {
              const isOpen = open === index;
              return (
                <li
                  key={item.title}
                  className={`${styles.item} ${index >= VISIBLE_COUNT ? styles.extra : ""}`}
                >
                  <button
                    type="button"
                    className={styles.row}
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : index)}
                  >
                    <span className={styles.title}>{item.title}</span>
                    <span
                      className={`${styles.icon} ${isOpen ? styles.iconOpen : ""}`}
                      aria-hidden="true"
                    />
                  </button>
                  <div
                    className={`${styles.panel} ${isOpen ? styles.panelOpen : ""}`}
                  >
                    <div className={styles.panelInner}>
                      <ul className={styles.subList}>
                        {item.sub.map((s) => (
                          <li key={s} className={styles.subItem}>
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            className={styles.more}
            onClick={() => setShowAll(true)}
          >
            Смотреть дальше
          </button>
        </Reveal>
      </div>
    </section>
  );
}
