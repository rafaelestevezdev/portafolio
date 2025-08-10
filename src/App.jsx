import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Experience } from "./components/Experience";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Projects } from "./components/Projects";


export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}
