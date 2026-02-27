import Head from 'next/head';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Orlando Handyman Services | ABOS</title>
        <meta name="description" content="Professional Handyman Services in Orlando, FL - Plumbing, Electrical, Painting, Carpentry & More. Licensed & Insured. Free Estimates." />
      </Head>

      <Navigation />
      <main className="pt-16">
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}