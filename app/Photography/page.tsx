"use client";

import React from "react";
import Navbar from "../Components/Navbar";
import Photography from "../Components/Photography"
import Footer from "../Components/Footer";
import Particles from "../Components/UI/Particles";

export default function PhotographyPage() {
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
            <Photography />
            <Footer />
            
        </main>
    );
}
