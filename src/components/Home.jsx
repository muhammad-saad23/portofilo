import React from 'react'
import img from '../assets/vector.png'
import pdf from '../assets/Muhammad_saad.pdf'
import { useState, useEffect } from 'react'
import 'animate.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
function Home(props) {
  useEffect(() => {
    AOS.init();
  }, [])


  const obj = {
    name: " Muhammad Saad",
    domain: 'Web developer',
    about: "A Web developer specializing in web with HTML, CSS ,Javascript and frameworks like Bootstrap, TailwindCSS and libary ReactJS, also I'am working in Backend technologies PHP and framework Laravel also database MYSQL",
  }

  return (
    <div className='mb-40'>
      <>
        <section
          id="home"
          className="flex justify-center items-center min-h-[75vh]  md:mx-10"
        >
          <div
            data-aos="fade-up"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="1000"
            className="w-full flex justify-center"
          >
            <div className="text-center text-white space-y-3 max-w-2xl">

              <h2 className="text-4xl md:text-5xl font-bold tracking-wide">
                Hi I'm
              </h2>

              <p className="text-5xl md:text-6xl font-bold text-indigo-400 drop-shadow-md">
                {obj.name}
              </p>

              <p className="uppercase text-lg md:text-xl text-indigo-300 tracking-widest font-medium">
                <span id="element">{obj.domain}</span>
              </p>

              <p className="leading-relaxed text-balance font-medium text-lg my-2 text-gray-300">
                {obj.about}
              </p>

              <div className="icons flex justify-center space-x-5 md:space-x-7 my-5">

                <a
                  href="https://github.com/muhammad-saad23/"
                  target="_blank"
                  className="text-lg md:text-xl px-5 py-2 bg-indigo-700 hover:bg-indigo-600 rounded-xl 
                     shadow-lg transition duration-300 flex items-center gap-2"
                >
                  Github
                  <i className="fa-brands fa-github text-xl"></i>
                </a>

                <a
                  href={pdf}
                  download
                  className="text-lg px-6 py-2 font-semibold border-2 border-indigo-500 text-indigo-400 
                     rounded-full transition duration-300 shadow-lg
                     hover:bg-indigo-600 hover:text-white hover:border-indigo-600"
                >
                  Get CV
                </a>

              </div>
            </div>
          </div>
        </section>


        {/* <div className="line mx-auto rounded-full w-[90%] my-3 bg-slate-500 h-2" data-aos="zoom-in"></div> */}
      </>
    </div>


  )
}



export default Home
