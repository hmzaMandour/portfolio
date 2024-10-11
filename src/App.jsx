
import { Route, Routes } from "react-router-dom";
import "./index.css"
import { Navbar } from "./layouts/navbar";
function App() {
  return (
    <>
      <Routes>    
        <Route path="/" element={<Navbar />} />
    </Routes>
    </>
  );
}

export default App;




