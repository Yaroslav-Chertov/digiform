'use client';

import { useState, useEffect } from 'react';
import styles from './Header.module.scss';

const NAV_ITEMS = [
  { label: 'Агентство', active: true },
  { label: 'Позиционирование' },
  { label: 'Подход' },
  { label: 'Услуги' },
  { label: 'Технологии' },
  { label: 'Результаты' },
  { label: 'Контакты' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      const top = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      if (top) {
        window.scrollTo(0, parseInt(top || '0') * -1);
      }
    }

    return () => {
      const top = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      if (top) {
        window.scrollTo(0, parseInt(top || '0') * -1);
      }
    };
  }, [menuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="/" className={styles.logo} aria-label="Digiform — на главную">
          <img src="/images/logo.png" alt="Digiform" width={68} height={52} />
        </a>

        <nav className={styles.nav} aria-label="Основная навигация">
          <ul className={styles.navList}>
            {NAV_ITEMS.map((item) => (
              <li key={item.label} className={styles.navItem}>
                <a
                  href={`#${item.label.toLowerCase()}`}
                  className={`${styles.navLink} ${item.active ? styles.navLinkActive : ''}`}
                >
                  {item.label}
                  {item.active && (
                    <span className={styles.activeDot} aria-hidden="true" />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={menuOpen}
        >
          <span className={styles.burgerCircle} aria-hidden="true" />
          <span className={styles.burgerLines} aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>

      <nav
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}
        aria-hidden={!menuOpen}
      >
        <ul className={styles.mobileNavList}>
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <a
                href={`#${item.label.toLowerCase()}`}
                className={styles.mobileNavLink}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
