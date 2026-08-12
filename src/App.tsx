import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ScrollProgress } from "./components/ScrollProgress";
import { BackToTop } from "./components/BackToTop";
import { SiteBackground } from "./components/SiteBackground";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Skills } from "./sections/Skills";
import { Experience } from "./sections/Experience";
import { Education } from "./sections/Education";
import { Projects } from "./sections/Projects";
import { Contact } from "./sections/Contact";

function App() {
  return (
    <div className="relative min-h-screen">
      <SiteBackground />
      <div className="relative z-10">
        <ScrollProgress />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Education />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </div>
  );
}

export default App;
