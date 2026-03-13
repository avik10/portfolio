import Experaince from "./components/expeiance/expeiance";
import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import Projects from "./components/projects/Projects";
import Clients from "./components/clients/clients";
import Footer from "./components/Footer/Footer";
import AiExposer from "./components/Intro/AiExposer";

function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <section id="experience">
        <Experaince />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <AiExposer />
      <section id="projects">
        <Projects />
      </section>
      <section id="testimonials">
        <Clients />
      </section>
      <Footer />
    </>
  );
}

export default App;
