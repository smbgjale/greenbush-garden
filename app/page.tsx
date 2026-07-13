import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import FeaturedMenu from "@/components/home/FeaturedMenu";
import Events from "@/components/home/Events";
import Gallery from "@/components/home/Gallery";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Reservation from "@/components/home/Reservation";



export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <FeaturedMenu />
      <Gallery />
      <Events />
     <WhatsAppButton />
     <Reservation />

    </>
  );
}