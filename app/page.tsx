import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";
import Hero from "@/src/components/sections/Hero";
import Supply from "@/src/components/sections/Supply";
import Why from "@/src/components/sections/Why";
import Process from "@/src/components/sections/Process";
import About from "@/src/components/sections/About";
import Contact from "@/src/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Supply />
        <Why />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
