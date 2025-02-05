import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/header";
import Index from "./pages/Index";
import About from "./pages/About/about";
import Contact from "./pages/Contact/contact";
import ProdutosAdmin from "./pages/ProdutosAdmin/ProdutosAdmin";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/page-produtos-admin" element={<ProdutosAdmin />} />
      </Routes>
    </Router>
  );
}

export default App;
