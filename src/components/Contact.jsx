import React from 'react'

function Contact() {
  const icons = [
    { iconName: 'github', link: 'https://github.com/muhammad-saad23/' },
    { iconName: 'linkedin', link: 'https://www.linkedin.com/in/muhammad-saad-ab7879279/' },
  ]

  const contact = [
    { icon: "fa-regular fa-envelope", title: "Email", text: "Ms22458881@gmail.com" },
    { icon: "fa-solid fa-phone", title: "Phone", text: "+92 3152458881" },
    { icon: "fa-solid fa-location-dot", title: "Location", text: "Karachi, Pakistan" }
  ]

  const name = "Muhammad Saad";
 const about="Got a project idea or looking for a collaborator? Let’s connect. I’m open to new opportunities and offer services such as web development."

  return (
    <>
      <section
        className="py-10 contact border-y-gray-600 bg-gradient-to-r from-[#0b0f1f] via-[#09122C] to-[#0b0f1f] "
        id="contact"
      >
        <h1
          className="text-center text-4xl font-bold text-white mb-5"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          Get In <span className="text-purple-500">Touch</span>
        </h1>
        <p className="text-balance text-center text-white mb-10 px-4 max-w-2xl mx-auto">
          {about}
          </p>

        <div className="flex flex-col md:flex-row justify-between mx-10 gap-10" data-aos="fade-up" data-aos-duration="1000">

          {/* Contact Information */}
          <div className="contact-info flex-1 space-y-5">
            <h2 className="text-gray-300 text-center text-[1.7rem] font-semibold mb-3">Contact Information</h2>

            {contact.map((item, idx) => (
              <div
                key={idx}
                className="info-box flex items-center bg-gradient-to-br from-[#231f2b] to-[#211e2e]  p-4 rounded-lg shadow-lg shadow-black transform transition-all duration-300 hover:scale-105 hover:translate-x-4"
              >
                <div className="icon bg-gradient-to-r from-indigo-500 to-purple-500 text-gray-300 p-3 rounded-full mr-4 flex items-center justify-center text-xl">
                  <i className={item.icon}></i>
                </div>
                <div>
                  <p className="font-semibold text-white">{item.title}</p>
                  <p className="text-gray-300">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Connect With Me */}
          <div className="flex justify-center flex-col items-center connect-me flex-1 text-center md:text-left">
            <h2 className="text-gray-300 text-[1.7rem] font-semibold mb-7">Connect With Me</h2>
            <div className="flex justify-center md:justify-start gap-4">
              {icons.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  className="w-20 h-20 bg-gradient-to-br from-[#231f2b] to-[#211e2e]  flex items-center justify-center text-gray-200 rounded-lg shadow-lg shadow-black text-4xl transform transition-all duration-300 hover:-translate-y-2 hover:scale-105 "
                >
                  <i className={`fa-brands fa-${item.iconName}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        <footer className="mt-16 pb-9 relative bg-gradient-to-r from-[#0b0f1f] via-[#09122C] to-[#0b0f1f] text-gray-300 border-t border-slate-700">

          <div className="flex justify-center items-center gap-6 mt-10 pb-5">
            {icons.map((items) => (
              <a key={items.iconName} href={items.link} target="_blank" className="box flex justify-center items-center text-3xl rounded-full bg-gradient-to-br from-[#231f2b] to-[#211e2e] shadow-lg shadow-black transform transition-all duration-300 w-16 h-16 hover:-translate-y-2 hover:scale-105 cursor-pointer">

                <button  className="transition-colors duration-300">
                  <i className={`fa-brands fa-${items.iconName}`}></i>
                </button>
              </a>

            ))}
          </div>

          <p className="text-[1.7rem] text-center font-semibold hover:transition-colors duration-300">
            {name}
          </p>

          <p className="text-center text-sm mt-5">
            © 2024 All Rights Reserved
          </p>
        </footer>

      </section>




    </>
  )
}

export default Contact
