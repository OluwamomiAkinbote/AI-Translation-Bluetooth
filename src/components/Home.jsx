'use client';
import Hero from './Hero';
import WebsiteBanner from './WebsiteBanner';
import Features from './Features'
import ImageSlider from './ImageSlider';
import SocialProof from './SocialProof';
import Specifications from './Specifications';
import EasySetup from './EasySetup';
import Pricing from './Pricing';
import Contact from './Contact';



export default function Home() {
  return (
    <main>
      <WebsiteBanner />
      {/* Hero section */}
      <Hero />
      <Features/>
      {/* Image Slider */}
      <ImageSlider />
      {/* Social Proof Section */}
      <SocialProof />
      {/* Specifications Section */}
      <Specifications />
      {/* Easy Setup Section */}
      <EasySetup />
      {/* Pricing Section */}
      <Pricing />
      {/* Contact Section */}
      <Contact />
      

      


    </main>
  );
}