
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Project from './components/Data_Science'
import Service from './components/Data_Analytics'

function App() {

  return (
    <div>
        <Navbar />
        <Home />
        <About />
        <Service />
        <Project />
        <Contact />
        <Footer />
    </div>
  )
}

export default App
