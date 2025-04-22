"use client";

import React from "react";
import BigWork from "../Components/BigWork";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Particles from "../Components/UI/Particles";

export default function WorkPage() {
    return (
        <main className="relative w-full lg:h-screen ">
            <Particles
                quantityDesktop={350}
                quantityMobile={100}
                ease={50}
                color={"#FFFFFF"}
                refresh
            />

            <Navbar />
            <BigWork />
            <Footer />
            
        </main>
    );
}
