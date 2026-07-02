"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal/Reveal";
import styles from "./Ecosystem.module.scss";

const ITEMS = [
  {
    title: "Стратегия и аналитика",
    sub: [
      "Data-driven бренд, коммуникационные и медиа стратегии",
      "разработка digital-стратегии",
      "аналитика категорий и спроса",
      "аудит маркетинга и каналов",
      "медиапланирование",
      "прогнозирование эффективности",
    ],
  },
  {
    title: "Перфоманс маркетинг и Медийная реклама",
    sub: [
      "запуск и ведение рекламных кампаний",
      "оптимизация под бизнес KPI",
      "управление аудиторными сегментами",
      "масштабирование кампаний",
      "работа с платным трафиком",
    ],
  },
  {
    title: "Поисковое продвижение и видимость",
    sub: [
      "поисковое продвижение (SEO)",
      "оптимизация присутствия в поисковых и AI-средах (GEO)",
      "управление репутацией в интернете (ORM)",
      "управление поисковой выдачей (SERM)",
      "работа с отзывами и рейтингами",
    ],
  },
  {
    title: "Блогеры, социальные сети, контент",
    sub: [
      "реклама у блогеров",
      "комплексное ведение социальных сетей",
      "разработка контент-стратегии",
      "создание контента",
      "продвижение в социальных платформах",
      "работа с аудиторией и комьюнити",
    ],
  },
  {
    title: "Креатив и брендинг",
    sub: [
      "разработка креативных концепций",
      "брендинг и фирменный стиль",
      "рекламные кампании",
      "спецпроекты и коллаборации",
    ],
  },
  {
    title: "Дизайн",
    sub: [
      "UX/UI-дизайн",
      "digital-дизайн",
      "дизайн коммуникаций",
      "визуальные системы бренда",
    ],
  },
  {
    title: "Веб- и мобильная разработка",
    sub: [
      "разработка сайтов",
      "веб-платформы и сервисы",
      "мобильные приложения",
      "интеграции и техническая поддержка",
    ],
  },
  {
    title: "Продвижение на маркетплейсах",
    sub: [
      "продвижение товаров на маркетплейсах",
      "оптимизация карточек",
      "управление рейтингами и отзывами",
      "рекламные кампании внутри платформ",
      "аналитика продаж и эффективности",
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
            <span className={styles.headingBig}>Экосистема</span>{" "}
            <span className={styles.headingSmall}>
              роста&nbsp;Digiform<span className={styles.dot} aria-hidden="true" />
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
