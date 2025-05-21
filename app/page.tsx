import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ImageStrip from "./components/ImageStrip";
import PerfectHoliday from "./components/PerfectHoliday";


export default function Home() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <ImageStrip/>
      <PerfectHoliday/>
      <Gallery/>
      <Contact/>
    </div>
  );
}
