
import { Route, Routes } from "react-router-dom";
import "./index.css"
import { Navbar } from "./layouts/navbar";
import { Hero } from "./pages/hero/hero";
import { Home } from "./pages/home";
import { About } from "./pages/about/about";
import { Skills } from "./pages/skills/skillls";
import { Contact } from "./pages/contact/contact";
import { Footer } from "./layouts/footer";
import { Project } from "./pages/projects/project";
function App() {
  return (
    <>
      <Routes>    
        <Route path="/" element={<Home />} />
        <Route path="/nav" element={<Navbar />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
    </>
  );
}

export default App;




