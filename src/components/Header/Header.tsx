"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./Header.module.scss";

const NAV_ITEMS = [
  { label: "О нас", id: "about" },
  { label: "Услуги", id: "services" },
  { label: "Подход", id: "technologies" },
  { label: "Кейсы", id: "clients" },
  { label: "Обсудить задачу", id: "discuss", active: true },
  { label: "Контакты", id: "contacts" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const updateHeaderHeight = () => {
      document.documentElement.style.setProperty(
        "--header-height",
        `${header.offsetHeight}px`,
      );
    };

    updateHeaderHeight();

    const resizeObserver = new ResizeObserver(updateHeaderHeight);
    resizeObserver.observe(header);
    window.addEventListener("resize", updateHeaderHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateHeaderHeight);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      const scrollY = window.scrollY;

      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    } else {
      const top = document.body.style.top;

      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";

      if (top) {
        window.scrollTo({
          top: parseInt(top) * -1,
          behavior: "instant",
        });
      }
    }

    return () => {
      const top = document.body.style.top;

      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";

      if (top) {
        window.scrollTo({
          top: parseInt(top) * -1,
          behavior: "instant",
        });
      }
    };
  }, [menuOpen]);

  return (
    <header
      ref={headerRef}
      className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}
    >
      <div className={styles.inner}>
        <a href="/" className={styles.logo} aria-label="Digiform — на главную">
          <img src="/images/logo.png" alt="Digiform" width={68} height={52} />
        </a>

        <nav className={styles.nav} aria-label="Основная навигация">
          <ul className={styles.navList}>
            {NAV_ITEMS.map((item) => (
              <li key={item.id} className={styles.navItem}>
                <a
                  href={`#${item.id}`}
                  className={`${styles.navLink} ${
                    item.active ? styles.navLinkActive : ""
                  }`}
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
          className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
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
        className={`${styles.mobileMenu} ${
          menuOpen ? styles.mobileMenuOpen : ""
        }`}
        aria-hidden={!menuOpen}
      >
        <ul className={styles.mobileNavList}>
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`${styles.mobileNavLink} ${
                  item.active ? styles.mobileNavLinkActive : ""
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}

                {item.active && (
                  <span className={styles.mobileActiveDot} aria-hidden="true" />
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
