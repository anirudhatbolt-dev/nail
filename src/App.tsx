import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useParams } from '@/params';

export default function App() {
  const params = useParams();
  return (
    <div className="min-h-screen bg-cream-50">
      <Nav />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Reviews />
        {params.has_owner_info && <About />}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
