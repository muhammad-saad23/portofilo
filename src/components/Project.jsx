import React, { useEffect } from 'react'
import img1 from '../assets/zyrawear.jpg'
import img2 from '../assets/electro.jpg'
import img3 from '../assets/ecommerce_brand.jpg'
import img4 from '../assets/business_nexus.jpg'


function Project() {
  
  const projects=[    
    {
      img:img1,
      title:"ZyraWear",
      des:"Zyrawear is my first eCommerce web application built using React. It features a modern UI, dynamic product listings, cart functionality, and responsive design ",
      link:"https://zyrawear-project.vercel.app/",
    },
    {
      img:img2,
      title:"Electro – eCommerce Website",
      des:"My Laravel E-commerce project on 'Electro' where the user order electronic products and also admin panel integrated where products, categories user details order details are saved also total products categories are define on dashboard",
      link:"https://www.linkedin.com/posts/muhammad-saad-ab7879279_laravel-reactjs-php-activity-7258818334094204928-X5ev?utm_source=share&utm_medium=member_desktop"
    },
    {
      img:img3,
      title:"Brand – eCommerce Website",
      des:"Brand is a modern eCommerce platform developed using Laravel (backend), React.js (frontend), and Inertia.js for seamless single-page application behavior.",
      link:"https://www.linkedin.com/posts/muhammad-saad-ab7879279_e-commerce-web-application-built-with-activity-7360982592021553152-Vn4r?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEPwKesBrEHebWerHM1jcVjG5iKOcp9mPgk"
    },
    {
      img:img4,
      title:"Business Nexus portal ",
      des:"Business Nexus is an interactive platform designed to bridge the gap between investors and entrepreneurs. It provides a collaborative space where startups can showcase their ideas and connect with potential investors, while investors can discover promising ventures—all within a streamlined, user-friendly panel.",
      link:"https://www.linkedin.com/posts/muhammad-saad-ab7879279_business-nexus-collaboration-platform-activity-7370884634924015616-00LI?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEPwKesBrEHebWerHM1jcVjG5iKOcp9mPgk"
    },
    
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
