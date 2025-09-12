'use client';
import Hero from './Hero';
import Features from './Features'
import SocialProof from './SocialProof';
import FlashSalesBanner from './FlashSalesBanner'
import Pricing from './Pricing';
import Contact from './Contact';




export default function Home() {
  return (
    <main>
      <FlashSalesBanner />
      {/* Hero section */}
      <Hero />
      <Features/>
      {/* Social Proof Section */}
      <SocialProof />
      {/* Pricing Section */}
      <Pricing />
      {/* Contact Section */}
      <Contact />
      

      


    </main>
  );
}