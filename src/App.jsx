import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Component/Header';
import Footer from "./Component/Footer";
import Home from "./Pages/Home";
import Resume from "./Pages/Resume";
import Projects from "./Pages/Project";
import Contact from "./Pages/Contact";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Header />

       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App
