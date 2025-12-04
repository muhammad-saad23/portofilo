import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Skill from './components/Skill'
import Project from './components/Project'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Background from './components/Background'
import { Link } from 'react-scroll'

function App() {

  return (
    <div className="relative">
      <Link to='home' spy={true} smooth={true} offset={-200} duration={1000}>
        <i className="fixed z-10 flex justify-center items-center rounded-full bg-indigo-500 w-12 h-12 right-10 top-[50rem] cursor-pointer text-white fa-solid fa-arrow-up"></i>
      </Link>

      <Background />
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
