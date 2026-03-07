import { I18nProvider } from './i18n/I18nContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import FeaturedProject from './components/FeaturedProject'
import Blog from './components/Blog'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <I18nProvider>
      <div className="min-h-screen bg-dark-900 text-gray-200">
        <Navbar />
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <FeaturedProject />
        <Blog />
        <Timeline />
        <Contact />
        <Footer />
      </div>
    </I18nProvider>
  )
}

export default App
