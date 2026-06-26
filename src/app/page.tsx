import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Ecosystem from '@/components/Ecosystem/Ecosystem';
import Technologies from '@/components/Technologies/Technologies';
import Focus from '@/components/Focus/Focus';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Ecosystem />
        <Technologies />
        <Focus />
      </main>
    </>
  );
}
