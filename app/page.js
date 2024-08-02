import Contact from "@/components/custom/Contact";
import Footer from "@/components/custom/Footer";
import Gallery from "@/components/custom/Gallery";
import Header from "@/components/custom/Header";
import Hero from "@/components/custom/Hero";
import Steps from "@/components/custom/Steps";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Gallery />
      <Steps />
      <Contact />
      <Footer />
    </div>
  );
}
