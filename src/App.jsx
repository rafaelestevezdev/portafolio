import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Experience } from "./components/Experience";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Projects } from "./components/Projects";
import { MouseFollower } from "./components/MouseFollower";


export default function App() {
  return (
    <div className="min-h-screen">
      <MouseFollower />
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <About />
      <Footer />
      <MouseFollower />
    </div>
  );
}
