import Experaince from "./components/expeiance/expeiance";
import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import Projects from "./components/projects/Projects";
import Clients from "./components/clients/clients";
import Footer from "./components/Footer/Footer";
import AiExposer from "./components/Ai Exposer/AiExposer";
import Education from "./components/education/Education";

function App() {
  return (
    <>
    <Navbar />
    <Intro />
    <Skills />
    <Education />
    <Experaince />
    <Projects />
    <Clients />
    <AiExposer />
    <Footer />
    </>
  );
}

export default App;
