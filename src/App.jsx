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
function App() {

  return (
    <>
    <Navbar/>
    <Home/>
    <Skill/>
    <Project/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
