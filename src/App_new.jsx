import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar_new'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/projects'
import Experience from './pages/Experience'
import Leadership from './pages/Leadership'
import Achievements from './pages/Achievements'
import Testimonials from './components/Testimonials'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import './styles/global.css'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
