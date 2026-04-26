import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Component/Header';
import Footer from "./Component/Footer";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Projects from "./pages/Project";
import Contact from "./pages/Contact";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Header />

       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App
