import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Skill from './components/Skill'
import Project from './components/Project'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Background from './components/Background'
function App() {

  return (
    <div className="relative">
      
      <Background/>
      <Navbar />
      <Home />
      <Skill />
      <Project />
      <Contact />
      {/* <Footer /> */}
    </div>

  )
}

export default App
