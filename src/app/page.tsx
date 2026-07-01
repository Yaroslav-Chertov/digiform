import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Ecosystem from "@/components/Ecosystem/Ecosystem";
import Technologies from "@/components/Technologies/Technologies";
import Focus from "@/components/Focus/Focus";
import Clients from "@/components/Clients/Clients";
import WhyDigiform from "@/components/WhyDigiform/WhyDigiform";
import Footer from "@/components/Footer/Footer";
import styles from "./page.module.css";

const MobileSubmit = () => (
  <button
    type="submit"
    form="contact-form"
    className={styles.mobileSubmit}
  >
    Отправить
  </button>
);

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Ecosystem />
        <Technologies />
        <Focus />
        <Clients />
        <WhyDigiform />
      </main>
      <Footer submitSlot={<MobileSubmit />} />
    </>
  );
}
