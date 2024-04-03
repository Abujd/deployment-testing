import Footer from "./components/footer/Footer";
import HeroSection from "./components/heroSection/HeroSection";
import LightFastPowerful from "./components/lightFastPowerful/LightFastPowerful";
import LightFastPowerfulTiles from "./components/lightFastPowerfulTiles/lightFastPowerfulTiles";
import Navbar from "./components/navbar/Navbar";
import Pricing from "./components/pricing/Pricing";

export default function Home() {
  return (
   <div>
     <Navbar />
     <HeroSection />
     <LightFastPowerful />
     <LightFastPowerfulTiles />
     <Pricing />
     <Footer />
   </div>
  );
}
