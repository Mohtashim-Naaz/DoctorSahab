import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      
      <div className='text-center text-2xl pt-10 text-gray-600'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12 border border-black p-5'>
        <img className='w-full max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 w-2/4 text-lg text-gray-600'>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nulla maiores facilis deleniti sed earum sunt! Impedit alias odit tempore?</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad consequuntur harum quis? Mollitia, cum error consectetur, laudantium fugit perspiciatis vero cumque fugiat delectus libero quos labore numquam expedita eaque.</p>
          <b className='text-gray-700'>Our Vision</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptates deleniti rerum itaque cupiditate. Pariatur?</p>
        </div>
      </div>

      <div className='text-xl my-14'>
        <p>CONTACT <span className='text-gray-700 font-bold' >INFORMATION</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300'>
          <b>LINKED IN</b>
          <a href="https://www.linkedin.com/in/mohtashim-naaz-19a15b217">https://www.linkedin.com/in/mohtashim-naaz-19a15b217</a>
        </div >
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300'>
          <b>GIT HUB</b>
          <a href="https://github.com/Mohtashim-Naaz?tab=repositories">https://github.com/Mohtashim-Naaz?tab=repositories</a>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300'>
          <b>INSTAGRAM</b>
          <a href="https://www.instagram.com/mohtashim_naaz/">https://www.instagram.com/mohtashim_naaz/  </a>
        </div>
      </div>      

    </div>
  )
}

export default About