import React from 'react'
import img from '../assets/vector.png'
import pdf from '../assets/Muhammad_saad.pdf'
import { useState,useEffect } from 'react'
import 'animate.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
function Home(props) {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div>
      <>
      <section id='home' className="flex justify-between mx-10 items-center my-40 ">
          <div data-aos="fade-up"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="1000">
            <div className="text-white ">
                <h2 className="text-4xl pb-2">Hi My name is </h2>
                <p className="text-5xl ">Muhammad Saad</p>
                <p className="uppercase text-xl my-3"><span id="element" > web developer</span></p>            
                <p className=" max-w-2xl">A Web developer specializing in web with HTML, CSS ,Javascript and frameworks like Bootstrap, TailwindCSS and libary ReactJS, also I'am working in Backend technologies PHP and framework Laravel also database MYSQL</p>
                <div className="icons flex space-x-7 my-3">
                  <a href='https://github.com/muhammad-saad23/' target='_black' className='text-xl p-2 px-3 bg-indigo-800 cursor-pointer rounded-md transition ease-in-out hover:bg-indigo-700'>Github<i class="fa-brands fa-github ps-2"></i></a>
                  <a href={pdf} target='_black' className='text-[1.2em] p-2 px-5 border-white border cursor-pointer rounded-full transition ease-in-out hover:bg-[#292727]'>Get CV</a>
                </div>
            </div>

          </div>
        
        <div data-aos="fade-up"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="1000">
          <div className="img hidden lg:block animate-pulse" >
              <img className="w-[100%] " src={img} alt=""/>
          </div>
        </div>
        
      </section>
      <div className="line mx-auto rounded-full w-[90%] my-3 bg-slate-500 h-2" data-aos="zoom-in"></div>
      </>
    </div>

    
  )
}   
    
     

export default Home
