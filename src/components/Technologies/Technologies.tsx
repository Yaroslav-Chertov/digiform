import { Reveal } from "@/components/Reveal/Reveal";
import styles from "./Technologies.module.scss";

const METRICS = [
  { title: "Прогнозирование", label: "спроса" },
  { title: "Анализ", label: "покупательского поведения" },
  { title: "Построение", label: "аудиторий" },
  { title: "Оценка", label: "влияния маркетинга" },
];

export default function Technologies() {
  return (
    <section className={styles.technologies} aria-label="Технологии Digiform">
      <div className={styles.inner}>
        <Reveal>
          <div className={styles.top}>
            <h2 className={styles.heading}>
              <span className={styles.headingBig}>Технологии</span>
              <br />
              <span className={styles.headingSmall}>
                Digiform
                <span className={styles.dot} aria-hidden="true" />
              </span>
            </h2>
            <p className={styles.intro}>
              В&nbsp;основе нашей работы&nbsp;&mdash; собственные инструменты
              и&nbsp;модели анализа данных.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className={styles.grid}>
            {METRICS.map((metric) => (
              <div key={metric.title} className={styles.metric}>
                <span className={styles.metricTitle}>{metric.title}</span>
                <span className={styles.divider} aria-hidden="true" />
                <span className={styles.metricLabel}>{metric.label}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={200}>
          <p className={styles.footnote}>
            Эти технологии формируют основу платформы Digiform
          </p>
        </Reveal>
      </div>
    </section>
  );
}
