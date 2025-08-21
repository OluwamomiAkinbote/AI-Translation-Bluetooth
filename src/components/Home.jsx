import Hero from './Hero';
import WebsiteBanner from './WebsiteBanner';
import Features from './Features'
import ImageSlider from './ImageSlider';



export default function Home() {
  return (
    <main>
      <WebsiteBanner />
      {/* Hero section */}
      <Hero />
      <Features/>
      {/* Image Slider */}
      <ImageSlider />
      

      


    </main>
  );
}