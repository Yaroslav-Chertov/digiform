import { Reveal } from '@/components/Reveal/Reveal';
import styles from './Clients.module.scss';

const TAGS = [
  'FMCG',
  'E-commerce',
  'Retail',
  'Pharm',
  'Development',
  'Finance',
  'Производители',
];

const LOGOS = [
  { src: '/images/logo-osnova.png', alt: 'Основа' },
  { src: '/images/logo-dr-theiss.png', alt: 'Dr. Theiss' },
  { src: '/images/logo-bausch.png', alt: 'Bausch Health' },
];

export default function Clients() {
  return (
    <section className={styles.clients} aria-label="С кем мы работаем">
      <div className={styles.inner}>
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

        <ul className={styles.logos} aria-label="Клиенты">
          {LOGOS.map((logo) => (
            <li key={logo.alt} className={styles.logoItem}>
              <img
                src={logo.src}
                alt={logo.alt}
                className={styles.logoImg}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
