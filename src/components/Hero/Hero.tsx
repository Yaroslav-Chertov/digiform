import styles from "./Hero.module.scss";
import { Reveal } from "@/components/Reveal/Reveal";
import { Parallax } from "@/components/Parallax/Parallax";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <Parallax className={styles.render} speed={0.12}>
        <img src="/images/hero-3d.png" alt="" />
      </Parallax>

      <section className={styles.heroAgency} aria-label="О агентстве">
        <div className={styles.agencyContent}>
          <Reveal>
            <h1 className={styles.agencyHeading}>
              <span className={styles.headingBrand}>Digiform</span>
              <span className={styles.headingDash}>{" — "}</span>
              <span className={styles.headingBody}>
                digital-агентство с&nbsp;<strong>15-летним опытом</strong>{" "}
                и&nbsp;технологическим подходом к&nbsp;маркетингу
              </span>
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <p className={styles.agencySubtitle}>
              Объединяем стратегию, креатив, технологии и&nbsp;аналитику в{" "}
              <strong>единую систему роста.</strong>
            </p>
          </Reveal>

          <Reveal delay={240}>
            <a href="#contact" className={styles.ctaButton}>
              Обсудить проект
            </a>
          </Reveal>
        </div>
      </section>

      <section className={styles.heroMarketing} aria-label="Подход">
        <div className={styles.marketingContent}>
          <Reveal>
            <div className={styles.marketingHeadingWrap}>
              <p className={styles.marketingHeading}>
                <span className={styles.marketingBrand}>Digiform</span>{" "}
                <span className={styles.marketingBody}>
                  строит маркетинг на&nbsp;данных реальных продаж. Помогаем
                  брендам{" "}
                </span>
                <strong className={styles.marketingBold}>
                  управлять спросом и&nbsp;увеличивать выручку<span className={styles.marketingDot} aria-hidden="true" />
                </strong>
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className={styles.twoCol}>
              <p className={styles.colText}>
                Мы&nbsp;используем данные online и&nbsp;offline продаж
                и&nbsp;строим поведенческие модели, чтобы принимать более точные
                решения.
              </p>
              <p className={styles.colText}>
                В&nbsp;основе&nbsp;&mdash; глубокое понимание бизнеса
                и&nbsp;работа с&nbsp;данными: от анализа поведения
                до&nbsp;построения стратегий и&nbsp;запуска кампаний, которые
                влияют на&nbsp;реальный спрос.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
