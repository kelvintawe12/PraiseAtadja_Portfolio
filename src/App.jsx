import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './components/Projects';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
