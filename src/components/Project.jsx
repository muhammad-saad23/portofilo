import React, { useEffect } from 'react'
import img1 from '../assets/zyrawear.jpg'
import img2 from '../assets/electro.jpg'
import img3 from '../assets/ecommerce_brand.jpg'
import img4 from '../assets/business_nexus.jpg'


function Project() {

  const projects = [
    {
      img: img1,
      language: ["Tailwind", "ReactJS"],
      title: "ZyraWear",
      des: "Zyrawear is my first eCommerce web application built using React. It features a modern UI, dynamic product listings, cart functionality, and responsive design ",
      link: "https://zyrawear-project.vercel.app/",
    },
    {
      img: img2,
      language: ["Laravel", "JQuery"],
      title: "e-Commerce Website",
      des: "My Laravel E-commerce project on 'Electro' where the user order electronic products and also admin panel integrated where products, categories user details order details are saved also total products categories are define on dashboard",
      link: "https://www.linkedin.com/posts/muhammad-saad-ab7879279_laravel-reactjs-php-activity-7258818334094204928-X5ev?utm_source=share&utm_medium=member_desktop"
    },
    {
      img: img3,
      language: ["Laravel", "ReactJS", "InertiaJs"],
      title: "e-Commerce Website",
      des: "Brand is a modern eCommerce platform developed using Laravel (backend), React.js (frontend), and Inertia.js for seamless single-page application behavior.",
      link: "https://www.linkedin.com/posts/muhammad-saad-ab7879279_e-commerce-web-application-built-with-activity-7360982592021553152-Vn4r?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEPwKesBrEHebWerHM1jcVjG5iKOcp9mPgk"
    },
    {
      img: img4,
      language: ["Laravel", "ReactJS", "InertiaJs"],
      title: "Business Nexus portal ",
      des: "Business Nexus is an interactive platform designed to bridge the gap between investors and entrepreneurs. It provides a collaborative space where startups can showcase their ideas and connect with potential investors, while investors can discover promising ventures—all within a streamlined, user-friendly panel.",
      link: "https://www.linkedin.com/posts/muhammad-saad-ab7879279_business-nexus-collaboration-platform-activity-7370884634924015616-00LI?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEPwKesBrEHebWerHM1jcVjG5iKOcp9mPgk"
    },

  ]

  const data = () => {
    console.log(projects)
  }

  useEffect(() => {
    data();
  })

  return (
    <div>
      <>
        <section className="project mb-16" id="project">
          <h1
            className="text-center text-4xl uppercase font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 mb-12"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            Projects
          </h1>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-6 md:mx-10"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {projects.map((item, index) => (
              <div
                key={index}
                className=" bg-gradient-to-r  from-[#211d2b] to-[#231c3a] rounded-2xl shadow-xl shadow-black/60 overflow-hidden transition transform hover:-translate-y-3 hover:shadow-indigo-500/50"
              >
                <div className="overflow-hidden rounded-t-2xl">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-48 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                  />
                </div>

                <div className="flex justify-center items-center min-h-10 flex-wrap gap-2.5">
                  {item.language.map((lang, idx) => (
                    <span
                      key={idx}
                      className="text-xs text-indigo-400 border-[1.5px] border-indigo-400 mt-3 rounded-full px-3 py-1"
                    >
                      {lang}
                    </span>
                  ))}
                </div>

                <div className="p-6 flex flex-col gap-4">
                  <h3 className="text-2xl text-center font-semibold text-gray-300 capitalize">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{item.des.slice(0, 130)}...</p>
                  <a
                    href={item.link}
                    target="_blank"
                    className="mx-auto self-start bg-gradient-to-r from-indigo-500 to-purple-500 text-gray-300 px-4 py-2 rounded-full text-sm font-semibold shadow-md transition hover:scale-105 hover:shadow-indigo-400/50"
                  >
                    View &#10141;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

      </>
    </div>
  )
}

export default Project
