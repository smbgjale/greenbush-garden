import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import FeaturedMenu from "@/components/home/FeaturedMenu";
import Events from "@/components/home/Events";
import Gallery from "@/components/home/Gallery";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Reservation from "@/components/home/Reservation";
import Footer from "@/components/home/Footer";
import Contact from "@/components/home/Contact";
import Experience from "@/components/home/Experience";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <FeaturedMenu />
      <Gallery />
      <Experience/>
      <Events />
     <WhatsAppButton />
     <Reservation />
     <Contact />  
    <Footer />
    </>
  );
}