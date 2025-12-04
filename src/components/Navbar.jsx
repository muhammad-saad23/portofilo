import React, { useState } from 'react'
import { Link } from 'react-scroll';
function Navbar() {
  const [open,setOpen]=useState();

  const link=[
    {title:'About',link:"home",offset:-200},
    {title:'skills',link:"skill",offset:-200},
    {title:'project',link:"project",offset:-200},
    {title:'contact',link:"contact",offset:-200},
  ]

  const navbar=()=>{
    setOpen(!open);
    // console.log(open)
  } 

  return (
    <div className='w-full z-10 sticky top-0 md:border-b-slate-500 py-0.5'>
      <nav className={`text-gray-100 md:flex flex-row justify-between items-baseline mx-5 my-2`}>
        <div className="logo font-semibold capitalize ">
          <p className='text-3xl text-shadow-lg '>Saad <span className='text-indigo-400'>Portfolio</span></p>
        </div>
        <ul className={`${open ? 'w-full mt-5 ':'hidden'} md:flex flex-row justify-end items-center font-[600] text-lg `}>
          {link.map((item)=>(
            <li className='mb-3'><Link to={item.link} spy={true} smooth={true} offset={item.offset} duration={1000} className=' cursor-pointer transition-all ease-in-out mr-5 hover:text-indigo-400 capitalize'>{item.title}</Link></li>
          ))}
          {/* <li className='mb-3'><Link to="skill" spy={true} smooth={true} offset={-200} duration={1000} className='cursor-pointer transition-all ease-in-out mr-5 hover:underline underline-offset-4 decoration-2'>Skills</Link></li>
          <li className='mb-3'><Link to="project" spy={true} smooth={true} offset={-200} duration={1000} className='cursor-pointer transition-all ease-in-out mr-5 hover:underline underline-offset-4 decoration-2'>Project</Link></li>
          <li className='mb-3'><Link to="contact" spy={true} smooth={true} offset={-200} duration={1000} className='cursor-pointer transition-all ease-in-out mr-5 hover:underline underline-offset-4 decoration-2'>Contact</Link></li> */}
        </ul>
        <button type='button' onClick={navbar} className="absolute right-2 top-6 md:hidden">
        <i class="fa-solid fa-bars text-xl"></i>
        </button>
      </nav>      
    </div>
  )
}

export default Navbar
