import React from 'react'
import img from '../assets/vector.png'
import { useState, useEffect } from 'react'

function Skill() {

  const skills = [
    { title: "HTML5", type: "frontend" },
    { title: "CSS3", type: "frontend" },
    { title: "Javascript", type: "frontend" },
    { title: "Bootstrap", type: "frontend" },
    { title: "Tailwind", type: "frontend" },
    { title: "ReactJS", type: "frontend" },
    { title: "PHP", type: "backend" },
    { title: "Laravel", type: "backend" },
    { title: "MYSQL", type: "backend" },
    { title: "Github", type: "other" },
    { title: "Netlify", type: "other" },
  ];


  const categories = [
    { name: "Frontend", type: "frontend" },
    { name: "Backend & Database", type: "backend" },
    { name: "Others", type: "other" },
  ];

  // const data = () => {
  //   console.log(fronted)
  // }

  // useEffect(() => {
  //   data();
  // })

  return (
    <div >
      <>
        <section className="skills mb-40" id="skill">
          <h1
            className="text-center text-4xl capitalize font-bold tracking-wide text-transparent bg-clip-text text-white mb-10"
            
          >
           My Skills
          </h1>

          <div
            className="flex flex-wrap justify-center gap-8"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {categories.map((category, idx) => {
              const filter = skills.filter(s => s.type === category.type)
              return (
                <div key={idx} className="w-[22rem] bg-gradient-to-br from-[#231f2b] to-[#211e2e] shadow-lg  p-6 rounded-xl transition duration-300 transform hover:-translate-y-2 hover:shadow-indigo-700/40">
                  <h2 className="text-2xl text-gray-300 font-semibold mb-5">{category.name}</h2>
                  <div className="grid grid-cols-3 gap-3">
                    {filter.map((item, index) => (
                      <p
                        key={item.type}
                        className="cursor-pointer bg-gradient-to-r from-indigo-500 to-purple-500 text-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-center transition hover:scale-105"
                      >
                        {item.title}
                      </p>
                    ))}
                  </div>
                </div>

              )
            })}
          </div>
         

        </section>


        {/* <div className="line mx-auto rounded-full w-[90%] my-5 bg-slate-500 h-2" data-aos="zoom-in"></div> */}
      </>
    </div>
  )
}

export default Skill
