'use client'


import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero"
import Moon from "./Components/Moon"
import SmallAbout from "./Components/SmallAbout"
import Work from "./Components/Work"
// import BigAbout from "./Components/BigAbout";
import Footer from "./Components/Footer"
import Particles from "./Components/UI/Particles"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Moon />
      <SmallAbout />
      <Work />
      {/* <BigAbout /> */}
      <Footer />
      <Particles
        quantityDesktop={350}
        quantityMobile={100}
        ease={50}
        color={"#FFFFFF"}
        refresh
      />
    </>
  );
}
