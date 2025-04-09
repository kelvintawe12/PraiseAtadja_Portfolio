import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects.jsx';
import Testimonials from './components/Testimonials';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import Leadership from './pages/Leadership';
import Achievements from './pages/Achievements';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="experience" element={<Experience />} />
        <Route path="leadership" element={<Leadership />} />
        <Route path="achievements" element={<Achievements />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
