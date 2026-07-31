import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Work from './components/sections/Work';
import Process from './components/sections/Process';
import Contact from './components/sections/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0a0a0a]">
        <Toaster position="top-right" />
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <About />
              <Services />
              <Work />
              <Process />
              <Contact />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;