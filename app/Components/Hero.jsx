'use client';
import React from 'react';
import Image from 'next/image';
import nameImage from '../Assets/Title.png';
import { motion } from 'framer-motion';
import AnimatePage from './AnimatePage';

export default function Hero() {
  return (
    <AnimatePage>
    <section className="h-screen flex items-center justify-center">
      <motion.div
        className="mt-0 md:mt-[-150px] lg:mt-[-240px]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <div className="w-[240px] sm:w-[220px] md:w-[280px] mx-auto">
          <Image
            src={nameImage}
            alt="Parth Ganjoo"
            className="rounded-lg w-full h-auto"
          />
        </div>
      </motion.div>
    </section>
    </AnimatePage>
  );
}
