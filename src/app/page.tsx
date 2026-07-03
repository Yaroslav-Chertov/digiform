import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Ecosystem from "@/components/Ecosystem/Ecosystem";
import Technologies from "@/components/Technologies/Technologies";
import Focus from "@/components/Focus/Focus";
import Clients from "@/components/Clients/Clients";
import WhyDigiform from "@/components/WhyDigiform/WhyDigiform";
import Footer from "@/components/Footer/Footer";
import MobileSubmit from "@/components/Footer/MobileSubmit";
import { FormStatusProvider } from "@/lib/FormStatusContext";

export default function Home() {
  return (
    <FormStatusProvider>
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
    </FormStatusProvider>
  );
}
