import React from 'react'

function Contact() {
  const icons=[
    {iconName:'github',link:'https://github.com/muhammad-saad23/'},
    {iconName:'linkedin',link:'https://www.linkedin.com/in/muhammad-saad-ab7879279/'},
  ]
  return (
    <>
    <div className="line mx-auto rounded-full w-[90%] my-5 bg-slate-500 h-2" data-aos="zoom-in"></div>
    <section className='contact my-5' id='contact'>
      <h1 className='text-center text-4xl uppercase text-white mb-7' data-aos="zoom-in" data-aos-duration="1000">Contact</h1>
      <div className="row text-[#fff]  rounded-sm  px-2 mx-10 pb-4 pt-2" data-aos="fade-up" data-aos-duration="1000">
        <div className="detail mb-3 flex items-baseline">
          <p className='text-[1.2rem] text-center'>I am currently working on some projects if you are interested in hiring me so please use one of them to contact me or you can Mail me(ms22458881@gmail.com)</p>
        </div>
        <div className="box flex justify-center my-5">
          {icons.map((item)=>(
          <div className="icon shadow-lg shadow-black bg-[#1c1a1a] text-5xl mr-5 rounded-lg transition ease-in-out duration-300 hover:-translate-y-2">
           <a href={`${item.link}`} target='_blank'><i className={`fa-brands fa-${item.iconName} px-6 py-5`}></i></a>
          </div>

          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact
