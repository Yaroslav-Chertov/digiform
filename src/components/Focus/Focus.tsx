import Image from "next/image";
import { Reveal } from "@/components/Reveal/Reveal";
import { Parallax } from "@/components/Parallax/Parallax";
import styles from "./Focus.module.scss";

const METRICS = [
  { title: "Снижение", label: "стоимости привлечения" },
  { title: "Рост", label: "эффективности маркетинга" },
  { title: "Аудитории", label: "более точные" },
  { title: "Увеличение", label: "конверсии" },
];

export default function Focus() {
  return (
    <section className={styles.focus} aria-label="Фокус на результате">
      {/* <Parallax className={styles.rings} speed={0.12}>
        <Image
          src="/images/focus-3d.png"
          alt=""
          width={1024}
          height={1024}
          aria-hidden="true"
          priority
        />
      </Parallax> */}
      <div className={styles.inner}>
        <Reveal>
          <h2 className={styles.heading}>
            <span className={styles.headingBig}>Фокус</span>
            <br />
            <span className={styles.headingSmall}>
              на&nbsp;результате
              <span className={styles.dot} aria-hidden="true" />
            </span>
          </h2>
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
      </div>
    </section>
  );
}
