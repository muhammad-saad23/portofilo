import React from 'react'
import img from '../assets/vector.png'
import { useState,useEffect } from 'react'

function Skill() {
    // skills
const fronted=[        
        {title:'HTML5'},
        {title:'CSS3'},
        {title:'Javascript'},
        {title:'Bootstrap'},
        {title:'TailwindCSS'},
        {title:'ReactJS'},
    ]
    const backend=[
      {title:"PHP"},
      {title:"Laravel"},
      {title:"MYSQL"}
    ]
    const other=[
      {title:"Github"},
      {title:"Netlify"}
    ]

    const data=()=>{
      console.log(fronted)
    }
  
    useEffect(()=>{
      data();
    })

  return (
    <div>
      <>
      <section className="skills mb-10" id='skill'>
        <h1 className="text-center text-4xl uppercase text-white mb-7" data-aos="zoom-in" data-aos-duration="1000">skills</h1>
        <div data-aos="fade-up" data-aos-duration="1000">
          <div className="flex justify-center flex-wrap gap-5">
            <div className="col w-[22rem] mx-2 bg-[#201c1c] shadow-lg shadow-black lg:px-2 pb-12  rounded-md transition duration-300 ease-in-out transform hover:-translate-y-2">
              <h1 className='text-2xl text-white ml-5 my-5'>Fronted</h1>
              <div className="grid grid-cols-3 ml-2 gap-4 ">
                {fronted.map((item)=>(
                  <p className='cursor-pointer rounded-full bg-[#3c3030] text-[#d1bebe] w-fit px-3 font-[600] text-center'>{item.title}</p>
                ))}
              </div>
            </div>                                                           
            <div className="col w-[22rem] mx-2 bg-[#201c1c] shadow-lg shadow-black lg:px-2 pb-8 rounded-md transition duration-300 ease-in-out transform hover:-translate-y-2">
              <h1 className='text-2xl text-white ml-5 my-5'>Backend & Database</h1>
              <div className="grid grid-cols-4 ml-2 gap-4">
                {backend.map((item)=>(
                  <p className='cursor-pointer rounded-full bg-[#3c3030] text-[#d1bebe] w-fit px-3 font-[600] text-center'>{item.title}</p>
                ))}
              </div>
            </div>                                                           
            <div className="col w-[22rem] mx-2 bg-[#201c1c] shadow-lg shadow-black lg:px-2 pb-8 rounded-md transition duration-300 ease-in-out transform hover:-translate-y-2">
              <h1 className='text-2xl text-white ml-5 my-5'>Others</h1>
              <div className="grid grid-cols-4 ml-2 gap-4 ">
                {other.map((item)=>(
                  <p className='cursor-pointer rounded-full bg-[#3c3030] text-[#d1bebe] w-fit px-3 font-[600] text-center'>{item.title}</p>
                ))}
              </div>
            </div>                                                                                                                      
          </div>       
        </div>
      </section>
      <div className="line mx-auto rounded-full w-[90%] my-5 bg-slate-500 h-2" data-aos="zoom-in"></div>
      </>
    </div>
  )
}

export default Skill
