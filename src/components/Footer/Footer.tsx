import type { ReactNode } from "react";
import styles from "./Footer.module.scss";

interface FooterProps {
  submitSlot?: ReactNode;
}

export default function Footer({ submitSlot }: FooterProps) {
  return (
    <footer id="contacts" className={styles.footer}>
      <div className={styles.inner}>
        {submitSlot && <div className={styles.submitSlot}>{submitSlot}</div>}

        <p className={styles.replyLink}>Ответим лично</p>

        <div className={`${styles.contactGroup} ${styles.contactWork}`}>
          <span className={styles.contactLabel}>Работать с нами:</span>
          <a href="mailto:work@digiform.ru" className={styles.contactValue}>
            work@digiform.ru
          </a>
        </div>

        <div className={`${styles.contactGroup} ${styles.contactPhone}`}>
          <span className={styles.contactLabel}>Телефон:</span>
          <a href="tel:+74958000078" className={styles.contactValue}>
            (495)800-00-78
          </a>
        </div>

        <a
          href="https://t.me/av_digital"
          className={styles.telegram}
          target="_blank"
          rel="noopener noreferrer"
        >
          Telegram
        </a>

        <span className={styles.copyright}>Digiform© 2026</span>
      </div>
    </footer>
  );
}
