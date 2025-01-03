import React, { useState } from 'react'
import { Link } from 'react-scroll';
function Navbar() {
  const [open,setOpen]=useState();

  const navbar=()=>{
    setOpen(!open);
    // console.log(open)
  } 

  return (
    <div className='w-full bg-[#141313] border-b-[1px] z-10 sticky top-0 md:border-b-slate-500 py-0.5'>
      <nav className={`text-white  md:flex flex-row justify-between items-baseline mx-5 my-2`}>
        <div className="logo">
          <h1 className='text-4xl font-[700]'>Portfolio</h1>
        </div>
        <ul className={`${open ? 'w-full mt-5 ':'hidden'} md:flex flex-row justify-end items-center font-[600] text-lg `}>
          <li className='mb-3'><Link to="home" spy={true} smooth={true} offset={-1000} duration={1000} className='cursor-pointer transition-all ease-in-out mr-5 hover:underline underline-offset-4 decoration-2 '>About</Link></li>
          <li className='mb-3'><Link to="skill" spy={true} smooth={true} offset={-200} duration={1000} className='cursor-pointer transition-all ease-in-out mr-5 hover:underline underline-offset-4 decoration-2'>Skills</Link></li>
          <li className='mb-3'><Link to="project" spy={true} smooth={true} offset={-200} duration={1000} className='cursor-pointer transition-all ease-in-out mr-5 hover:underline underline-offset-4 decoration-2'>Project</Link></li>
          <li className='mb-3'><Link to="contact" spy={true} smooth={true} offset={-200} duration={1000} className='cursor-pointer transition-all ease-in-out mr-5 hover:underline underline-offset-4 decoration-2'>Contact</Link></li>
        </ul>
        <button type='button' onClick={navbar} className="absolute right-2 top-6 md:hidden">
        <i class="fa-solid fa-bars text-xl"></i>
        </button>
      </nav>      
    </div>
  )
}

export default Navbar
