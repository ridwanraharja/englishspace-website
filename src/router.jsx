import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import NavbarC from "./components/NavbarC";
import Careers from "./pages/Careers";
import Home from "./pages/Home";

function router() {
  return (
    <BrowserRouter>
      <NavbarC />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default router;
