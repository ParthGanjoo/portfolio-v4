import React from "react";
import Image from "next/image";
import FullMoonUnlit from "../Assets/FullMoonUnlit.png";
import FullMoonLit from "../Assets/FullMoonLit.png";
import { motion } from "framer-motion";
import AnimatePage from "./AnimatePage";

export default function Moon() {
  return (
    <AnimatePage>
    <section className="relative h-[450px] flex items-start justify-center hidden sm:flex">
      <motion.div
        className="absolute -top-90 flex justify-center w-full group"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <Image
          src={FullMoonLit}
          alt="Lit Moon"
          width={750}
          height={750}
          className="object-cover absolute z-0 pointer-events-none"
        />

        <Image
          src={FullMoonUnlit}
          alt="Unlit Moon"
          width={750}
          height={750}
          className="object-cover z-10 transition-opacity duration-800 ease-in-out group-hover:opacity-0 "
        />
      </motion.div>
    </section>
    </AnimatePage>
  );
}
