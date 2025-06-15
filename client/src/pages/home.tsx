import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import Stats from "@/components/stats";
import About from "@/components/about";
import Services from "@/components/services";
import Process from "@/components/process";
import Clients from "@/components/clients";
import Industries from "@/components/industries";
import Testimonials from "@/components/testimonials";
import LinkedInFeed from "@/components/linkedin-feed";
import Awards from "@/components/awards";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Process />
      <Clients />
      <Industries />
      <Testimonials />
      <LinkedInFeed />
      <Awards />
      <Contact />
      <Footer />
    </div>
  );
}
