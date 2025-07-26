
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
// import Certifications from "@/components/Certifications";
import Leadership from "@/components/Leadership";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      {/* <Certifications /> */}
      <Leadership />
      <Contact />
      <Footer />

    </div>
  );
};

export default Index;
