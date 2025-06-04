import Hero from '@/components/home/Hero'
import Services from "@/components/home/Services";
import About from "@/components/home/About";
import Tarifs from "@/components/home/Tarifs";
import Portfolio from "@/components/home/Portfolio";
import Blog from "@/components/home/Blog";
import Contact from "@/components/home/Contact";

export default function HomePage() {
  return (
      <>
        <Hero />
          <About />
        <Services />
          <Tarifs />
          <Portfolio />
          <Blog />
          <Contact />
      </>
  )
}