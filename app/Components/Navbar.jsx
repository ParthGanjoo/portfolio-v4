import React from 'react'
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-[25px] left-1/2 transform -translate-x-1/2 
                    bg-[#18181B]/80 backdrop-blur border border-[#262626] 
                    rounded-full px-[30px] py-[20px] flex gap-[28px] 
                    z-50">
      <Link href="/">
        <span className="text-white hover:text-gray-300 cursor-pointer transition duration-500">Home</span>
      </Link>
      <Link href="/Work">
        <span className="text-white hover:text-gray-300 cursor-pointer transition duration-500">Work</span>
      </Link>
      <Link href="/Photography">
        <span className="text-white hover:text-gray-300 cursor-pointer transition duration-500">Photography</span>
      </Link>
      <Link href="/About">
        <span className="text-white hover:text-gray-300 cursor-pointer transition duration-500">About</span>
      </Link>
      {/* <a href="mailto:parth21342@iiitd.ac.in">
        <span className="text-white hover:text-gray-300 cursor-pointer transition duration-500">
          Contact
        </span>
      </a> */}

    </nav>
  );
}
