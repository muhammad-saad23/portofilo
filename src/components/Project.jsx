import React, { useEffect } from 'react'
import img1 from '../assets/quick_calligraphy.jpg'
import img2 from '../assets/electro.jpg'
import img3 from '../assets/zyrawear.jpg'


function Project() {
  
  const projects=[
    {
      img:img1,
      title:"quick calligraphy",
      des:"My Fronted project where different categories calligraphy designs are available for kids and adult category and information given as well. ",
      link:"http://std1431528.aptech-students.com/"
    },
    {
      img:img2,
      title:"Electro",
      des:"My Laravel E-commerce project on 'Electro' where the user order electronic products and also admin panel integrated where products, categories user details order details are saved also total products categories are define on dashboard",
      link:"https://www.linkedin.com/posts/muhammad-saad-ab7879279_laravel-reactjs-php-activity-7258818334094204928-X5ev?utm_source=share&utm_medium=member_desktop"
    },
    {
      title:"ZyraWear",
      des:"My first react E-commerce project where I create my own api and fetch products in categories wise also login/signup page with local storage ",
      link:"https://zyrawear-project.vercel.app/",
      img:img2,
    }
    
  ]
    const data=()=>{
      console.log(projects)
    }

    useEffect(()=>{
      data();
    })

  return (
    <div>
      <>
        <section className='project' id='project'>
            <h1 className='text-center text-4xl uppercase text-white mb-7' data-aos="zoom-in" data-aos-duration="1000">projects</h1>
            <div data-aos="fade-up" data-aos-duration="1000">
              <div className="row grid grid-cols-1 gap-5 mx-10 my-7 lg:grid-cols-3  md:grid-cols-2"> 
                {projects.map((items)=>(
                <div className="col text-white transition ease-in-out duration-300 shadow-xl shadow-[black] hover:-translate-y-2">
                      <div className="box p-6 h-fit bg-[#201c1c] rounded-lg" >
                        <div className="image mb-4">
                          <img src={items.img}  className='rounded-lg mx-auto' alt="img" />
                        </div>
                        <div className="text">
                          <h5 className='my-2 text-2xl capitalize font-[500]'>{items.title}</h5>
                          <p>{items.des.slice(0,130)}...</p>
                          <a href={items.link} target='_blank' className='underline'>view</a>
                        </div>
                      </div>
                  </div>
                ))}                
              </div>
            </div>
        
        </section>
      </>
    </div>
  )
}

export default Project
