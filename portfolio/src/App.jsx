import { useState } from 'react'
import './App.css'
import Navbar from './components/NavbarComponent'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Interests from './components/Interest'
import Skills from './components/Skills'
function App() {
  return (
    <>
     <Navbar/>
     <Hero/>
     <About/>
     <Projects/>
     <Experience/>
     <Skills/>
     <Interests/>
    </>
  )
}

export default App
