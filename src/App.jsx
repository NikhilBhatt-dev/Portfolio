import React from 'react'
import Nav from './section/Nav'
import Hero from './section/Hero'
import About from './section/About'
import Projects from './section/Projects'
import Contact from './section/Contact'
import Footer from './section/Footer'

const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}

export default App