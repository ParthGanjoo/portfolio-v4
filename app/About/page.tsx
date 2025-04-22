"use client";

import React from "react";
import BigAbout from "../Components/BigAbout";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Particles from "../Components/UI/Particles";

export default function AboutPage() {
    return (
        <main className="relative w-full min-h-screen flex flex-col">
            <Particles
                quantityDesktop={350}
                quantityMobile={100}
                ease={50}
                color={"#FFFFFF"}
                refresh
            />
            <Navbar />
            <div className="flex-grow">
                <BigAbout />
            </div>
            <Footer />
        </main>
    );
}
