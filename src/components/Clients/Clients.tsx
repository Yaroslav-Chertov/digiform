import { Reveal } from "@/components/Reveal/Reveal";
import styles from "./Clients.module.scss";

const TAGS = [
  "FMCG",
  "E-commerce",
  "Retail",
  "Pharm",
  "Finance",
  "Development",
  "Производители",
];

const LOGOS = [
  { src: "/images/logo-bausch.png", alt: "Bausch Health" },
  { src: "/images/logo-5ka.png", alt: "Пятёрочка" },
  { src: "/images/logo-dr-theiss.png", alt: "Dr. Theiss" },
  { src: "/images/logo-castorama.png", alt: "Castorama" },
  { src: "/images/logo-boiron.png", alt: "Boiron" },
  { src: "/images/logo-sberhealth.png", alt: "СберЗдоровье" },
  { src: "/images/logo-chromolab.png", alt: "Chromolab" },
  { src: "/images/logo-delimobil.png", alt: "Делимобиль" },
  { src: "/images/logo-amway.png", alt: "Amway" },
  { src: "/images/logo-bayer.png", alt: "Bayer" },
  { src: "/images/logo-osnova.png", alt: "ГК Основа" },
  { src: "/images/logo-rt.png", alt: "Ростелеком" },
  { src: "/images/logo-svyaz-bank.png", alt: "Связь-Банк" },
];

const LOGOS_SLIDE = [...LOGOS, ...LOGOS];

export default function Clients() {
  return (
    <section className={styles.clients} aria-label="С кем мы работаем">
      <div className={styles.inner} id="clients">
        <Reveal>
          <h2 className={styles.heading}>
            С&nbsp;кем
            <br />
            мы&nbsp;работаем
            <span className={styles.dot} aria-hidden="true" />
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <ul className={styles.tags} aria-label="Отрасли">
            {TAGS.map((tag) => (
              <li key={tag} className={styles.tag}>
                {tag}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={180}>
          <div className={styles.ctaWrap}>
            <a href="#discuss" className={styles.ctaButton}>
              Запросить презентацию
            </a>
          </div>
        </Reveal>

        <div className={styles.logosWrap} aria-label="Клиенты">
          <ul className={styles.logos}>
            {LOGOS_SLIDE.map((logo, index) => (
              <li key={`logo-a-${index}`} className={styles.logoItem}>
                <img src={logo.src} alt={logo.alt} className={styles.logoImg} />
              </li>
            ))}
            {LOGOS_SLIDE.map((logo, index) => (
              <li
                key={`logo-b-${index}`}
                className={styles.logoItem}
                aria-hidden="true"
              >
                <img src={logo.src} alt="" className={styles.logoImg} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
