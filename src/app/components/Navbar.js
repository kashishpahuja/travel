import Link from 'next/link';
import React from 'react';
import { FaDollarSign } from "react-icons/fa";

function Navbar() {
  return (
    <div className='w-full h-auto bg-white'>
      <div className='flex items-center justify-between md:mx-4 lg:mx-20 p-4'>
        {/* Logo Section */}
        <div className='w-24 h-6 md:w-32 lg:w-40 md:h-12 lg:h-16'>
          <img
            className='w-full h-auto object-cover'
            src="https://matchmyflight.com/static/media/match_my_flight_logo_blue.eaa1c05cce254dc8c80a2db3a9859159.svg"
            alt="logo"
          />
        </div>

        {/* Navigation Links */}
        <div className='hidden lg:flex flex-row justify-center items-center gap-6 lg:gap-20 text-blue-500'>
          <Link href={'/'} className='flex gap-2 items-center'>
            <FaDollarSign className='text-lg lg:text-xl' />
            <h3 className='text-base lg:text-xl font-bold'>Earn while you travel</h3>
          </Link>
          <Link href={'/'} className='flex gap-2 items-center'>
            <FaDollarSign className='text-lg lg:text-xl' />
            <h3 className='text-base lg:text-xl font-bold'>Earn while you travel</h3>
          </Link>
        </div>

        {/* Login/Signup Button */}
        <div className='bg-blue-500 rounded-lg p-2 md:px-4 md:py-2 lg:px-6 lg:py-4 font-bold text-white text-xs md:text-sm lg:text-md '>
          Login / Signup
        </div>
      </div>
    </div>
  );
}

export default Navbar;
