import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Ecosystem from '@/components/Ecosystem/Ecosystem';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Ecosystem />
      </main>
    </>
  );
}
