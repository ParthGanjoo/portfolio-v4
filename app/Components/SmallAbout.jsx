'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function SmallAbout() {
  return (
    <motion.section
      className="flex flex-col items-center justify-center py-2 px-6 sm:py-20 sm:px-8 text-white"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.4 }}
    >
      <div className="max-w-[90%] sm:max-w-[500px] md:max-w-[500px] lg:max-w-[500px] text-center">
        <p className="text-white font-medium text-xl sm:text-base md:text-2xl lg:text-2xl leading-relaxed">
          I’m Parth, a 21 year old Computer Science and Design student at IIIT Delhi.
          I am a product designer, developer and photographer.
        </p>

        <div className="flex gap-4 sm:gap-4 justify-center mt-5 flex-wrap">
          <Link href="/About">
            <button className=" cursor-pointer px-[28px] py-[14px] sm:px-[32px] sm:py-[14px] rounded-full border border-[#262626] 
                               bg-[#18181B]/80 backdrop-blur text-white 
                               hover:bg-[#1f1f1f] hover:border-[#35353A] transition duration-500 text-md sm:text-base">
              More about me
            </button>
          </Link>

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
        </div>
      </div>
    </motion.section>
  );
}
