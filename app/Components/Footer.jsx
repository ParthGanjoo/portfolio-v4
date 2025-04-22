import React from 'react';
import Image from 'next/image';
import {
  FaBehance,
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaSpotify,
} from 'react-icons/fa';

import signature from '../Assets/Title.png';

const Footer = () => {
  return (
    <div className="relative w-full h-[200px]">
      <div className="absolute bottom-[105px] left-1/2 transform -translate-x-1/2 z-10">
        <Image
          src={signature}
          alt="Signature"
          width={80}
          height={80}
          className="opacity-100"
        />
      </div>

      <div className="absolute bottom-[25px] left-1/2 transform -translate-x-1/2 z-10">
        <div
          className="bg-[#18181B]/80 backdrop-blur border border-[#262626] 
                     rounded-full px-[30px] py-[20px] flex gap-[32px] text-white z-50"
        >
          <a href="mailto:parth21342@iiitd.ac.in" aria-label="Email">
            <FaEnvelope
              size={22}
              className="hover:text-gray-400 transition duration-500"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/ganjoo/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin
              size={22}
              className="hover:text-gray-400 transition duration-500"
            />
          </a>
          <a
            href="https://www.behance.net/ganjoo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Behance"
          >
            <FaBehance
              size={22}
              className="hover:text-gray-400 transition duration-500"
            />
          </a>
          <a
            href="https://www.instagram.com/parthganjoophotography/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram
              size={22}
              className="hover:text-gray-400 transition duration-500"
            />
          </a>
          <a
            href="https://github.com/ParthGanjoo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub
              size={22}
              className="hover:text-gray-400 transition duration-500"
            />
          </a>
          <a
            href="https://open.spotify.com/user/dt1fhkj1i7gxqbeb9igv7anxf#login"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Spotify"
          >
            <FaSpotify
              size={22}
              className="hover:text-gray-400 transition duration-500"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
