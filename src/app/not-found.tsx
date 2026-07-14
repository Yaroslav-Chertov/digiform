import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import styles from "./not-found.module.scss";

export const metadata = { title: "Страница не найдена — Digiform" };

export default function NotFound() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.section}>
          <div className={styles.inner}>
            <p className={styles.code}>404</p>
            <h1 className={styles.heading}>Страница не найдена</h1>
            <p className={styles.description}>
              Похоже, такой страницы не&nbsp;существует или она была перемещена.
              Проверьте адрес или вернитесь на&nbsp;главную.
            </p>

            <div className={styles.actions}>
              <a href="/" className={styles.ctaButton}>
                На главную
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
