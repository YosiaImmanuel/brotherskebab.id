import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import WhyUs from "./components/WhyUs";
import Location from "./components/Location";
import OrderOnline from "./components/OrderOnline";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/ui/FloatingWhatsApp";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Menu />
      <WhyUs />
      <Location />
      <OrderOnline />
      <Testimonials />
      <Gallery />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
