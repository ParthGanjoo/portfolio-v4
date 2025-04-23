'use client';

import React from 'react';
import Image from 'next/image';
import about1 from '../Assets/FinalFinal.png'; 
import AnimatePage from "../Components/AnimatePage"


export default function BigAbout() {
  return (
    <AnimatePage>
      <div className="px-4 pt-30 pb-15 flex justify-center">

        <div className="max-w-[1100px] w-full flex flex-col items-center text-zinc-300 gap-8">
          {/* Top: Image */}
          <div className="w-full h-[400px] relative rounded-xl overflow-hidden">
            <Image
              src={about1}
              alt="About Me Photo"
              fill
              className="object-cover"
              placeholder="blur"
            />
          </div>

          <div className=" w-full text-left">
            <p className="mb-4 text-base md:text-lg leading-relaxed">
              Hi, I’m Parth Ganjoo, a 21 year old Computer Science and Design student at IIIT Delhi. I’m a passionate Product Designer, a hands on Frontend and XR Developer, and a lifelong Wildlife Photographer.          </p>
            <p className="mb-4 text-base md:text-lg leading-relaxed">
              Design has always been at the heart of everything I do. From obsessively sketching cars and houses as a kid to building odd inventions from scrap during summer holidays, I was constantly exploring how things looked, felt, and worked. I chose this degree that I'm pursuing because I knew I didn’t want design to just remain a passion, I wanted to take it to a professional level and make real impact through it, helping me build a designer’s eye and a developer’s mindset.          </p>
              <p className="mb-4 text-base md:text-lg leading-relaxed">
            Alongside design, I’ve been birdwatching since 2011 and photographing wildlife since 2018. I am always enthusiastic about going out in the wild and taking photos. Being in the wild shaped my observational skills and attention to detail, which are qualities that naturally flow into my design process.
          </p>
            <p className="mb-4 text-base md:text-lg leading-relaxed">
              When I’m not designing or building things, you’ll probably find me chasing birds with my camera, singing and playing my guitar, or listening to old rock! (P.S. The Moon on the homepage? Shot by me on my terrace!)
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              If you're up for collaborating on a design project, heading out for a photowalk, or even starting a rock band, hit me up!
            </p>


          </div>
          {/* <div className="justify-center">
            <a
              href="mailto:parth21342@iiitd.ac.in" // You can replace this with Google Drive or any other external link
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="cursor-pointer px-[28px] py-[14px] sm:px-[32px] sm:py-[14px] rounded-full border border-[#262626] 
                               bg-[#18181B]/80 backdrop-blur text-white 
                               hover:bg-[#1f1f1f] hover:border-[#35353A] transition duration-500 text-md sm:text-base">
                Let's connect!
              </button>
            </a>
          </div> */}
          <div className="flex gap-4 sm:gap-4 justify-center  flex-wrap">
          
          <a
            href="https://drive.google.com/file/d/11xhBpk2pHLHiOV_RFwstZw9YaFOqG0Mg/view?usp=sharing" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="cursor-pointer px-[28px] py-[14px] sm:px-[32px] sm:py-[14px] rounded-full border border-[#262626] 
                               bg-[#18181B]/80 backdrop-blur text-white 
                               hover:bg-[#1f1f1f] hover:border-[#35353A] transition duration-500 text-md sm:text-base">
              See my resume
            </button>
          </a>
          <a
            href="mailto:parth21342@iiitd.ac.in" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="cursor-pointer px-[28px] py-[14px] sm:px-[32px] sm:py-[14px] rounded-full border border-[#262626] 
                               bg-[#18181B]/80 backdrop-blur text-white 
                               hover:bg-[#1f1f1f] hover:border-[#35353A] transition duration-500 text-md sm:text-base">
              Let's connect!
            </button>
          </a>
        </div>
        </div>
      </div>
    </AnimatePage>
  );
}
