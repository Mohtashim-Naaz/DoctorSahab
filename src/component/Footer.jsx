import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-20 mt-40 text-sm'>

        {/* --- left section --- */}
        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum libero ducimus nesciunt quisquam veritatis alias assumenda reprehenderit veniam aperiam voluptatum?</p>
        </div>

        {/* -- center section */}
        <div>
          <p className='text-lg font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2  text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy Policy</li>
          </ul>

        </div>

        {/* -- right section */}
        <div>
            <p className='text-lg font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2  text-gray-600'>
              <li>+91 7447276007</li>
              <li>naazcode@gmail.com</li>
            </ul>
        </div>

      </div>

      {/* --- copyrigth text */}
      <div>
        <hr />
        <p className='pt-5 text-gray-600 text-sm text-center'>Copyrigth 2024@ DoctorSahab - All Right Reserved.</p>
        <p className='pb-5 text-gray-600 text-sm text-center'>Powered by NAAZ</p>
      </div>
    </div>
  )
}

export default Footer