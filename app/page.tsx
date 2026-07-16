import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SolutionsHub from "@/components/SolutionsHub";
import MobilityHub from "@/components/MobilityHub";
import IndustriesAndProjects from "@/components/IndustriesAndProjects";
import Leadership from "@/components/Leadership";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-bg selection:bg-brand-green selection:text-dark-bg">
      <Navbar />
      <Hero />
      <About />
      <SolutionsHub />
      <MobilityHub />
      <IndustriesAndProjects />
      <Leadership />
      <Contact />
    </main>
  );
}
