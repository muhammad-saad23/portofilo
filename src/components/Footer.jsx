import React from 'react';
// import * as fa from 'react-icons/fa';

function Footer() {
  const name = "Muhammad Saad";

  return (
    <footer className="my-7 relative bg-gradient-to-r from-[#0b0f1f] via-[#09122C] to-[#0b0f1f] text-gray-300 border-t border-slate-700">
      
      <div className="flex justify-center gap-6 mt-4">
        <a href="https://github.com" target="_blank" className="hover:text-purple-500 transition-colors duration-300 text-2xl">
          <i className='fa-brands fa-github'></i>
        </a>
        <a href="https://linkedin.com" target="_blank" className="hover:text-purple-500 transition-colors duration-300 text-2xl">
        <i className='fa-brands fa-linkedin'></i>
        </a>
       
      </div>

      <p className="text-2xl text-center font-semibold hover:text-purple-500 transition-colors duration-300">
        {name}
      </p>

      <p className="text-center text-sm mt-5">
        © 2024 All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer;
