import styles from './Hero.module.scss';
import { Reveal } from '@/components/Reveal/Reveal';

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.render} aria-hidden="true">
        <img src="/images/hero-3d.png" alt="" />
      </div>

      <section className={styles.heroAgency} aria-label="О агентстве">
        <div className={styles.agencyContent}>
          <Reveal>
            <h1 className={styles.agencyHeading}>
              <span className={styles.headingBrand}>Digiform</span>
              <span className={styles.headingDash}>{' — '}</span>
              <span className={styles.headingBody}>
                digital-агентство
                <br />с{' '}
                <strong>15-летним опытом</strong>{' '}
                и технологическим
                <br />
                подходом к маркетингу
              </span>
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <p className={styles.agencySubtitle}>
              Объединяем стратегию, креатив, технологии
              <br />и аналитику в{' '}
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
                <span className={styles.marketingBrand}>Digiform</span>
                <span className={styles.marketingBody}>
                  {' '}строит маркетинг
                  <br />
                  на данных реальных продаж. Помогаем брендам{' '}
                </span>
                <strong className={styles.marketingBold}>
                  управлять спросом
                  <br />и увеличивать выручку
                </strong>
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className={styles.twoCol}>
              <p className={styles.colText}>
                Мы используем данные online и offline продаж и строим
                поведенческие модели, чтобы принимать более точные решения.
              </p>
              <p className={styles.colText}>
                В основе — глубокое понимание бизнеса и работа с данными: от
                анализа поведения до построения стратегий и запуска кампаний,
                которые влияют на реальный спрос.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
