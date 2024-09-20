import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
      </main>

      <Footer />
    </>
  );
}