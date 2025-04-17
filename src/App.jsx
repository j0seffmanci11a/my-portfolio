import { HashRouter as Router, Routes, Route } from "react-router-dom"
// 👆 use HashRouter

import Navbar from "src/components/Navbar"
import Footer from "src/components/Footer"
import Home from "src/pages/Home"
import About from "src/pages/About"
import Projects from "src/pages/Projects"
import Contact from "src/pages/Contact"

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

