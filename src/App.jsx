
import { Route, Routes } from "react-router-dom";
import "./index.css"
import { Navbar } from "./layouts/navbar";
import { Hero } from "./pages/hero/hero";
import { Home } from "./pages/home";
import { About } from "./pages/about/about";
function App() {
  return (
    <>
      <Routes>    
        <Route path="/" element={<Home />} />
        <Route path="/nav" element={<Navbar />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/about" element={<About />} />
    </Routes>
    </>
  );
}

export default App;




