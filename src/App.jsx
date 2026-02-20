import React from 'react'
import Nav from './section/Nav'
import Hero from './section/Hero'
import About from './section/About'

const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
      <Nav />
      <Hero />
      <About />
    </main>
  )
}

export default App