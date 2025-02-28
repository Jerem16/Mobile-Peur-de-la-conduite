"use client";

import React from "react";
import { Metadata } from "next";
import ScrollSectionsWrapper from "./ScrollSectionsWrapper";
import Slider from "../src/home/slider/Slider";
import { SliderProvider } from "../src/utils/context/slider/SliderContext";
import { useInView } from "react-intersection-observer";
import dynamic from "next/dynamic";

// Lazy Loading des composants
const AboutLazy = dynamic(() => import("../src/home/about/about"), {
    ssr: false,
});
const ServicesLazy = dynamic(() => import("../src/home/service/services"), {
    ssr: false,
});

export const metadata: Metadata = {
    title: "Accueil | Peur de la conduite",
};

export default function Home() {
    // Observer si la section "about" est visible
    const { ref: aboutRef, inView: aboutVisible } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    return (
        <ScrollSectionsWrapper>
            <section className="section slider-bg" id="slider">
                <SliderProvider>
                    <Slider />
                </SliderProvider>
            </section>

            {/* Section About avec Intersection Observer */}
            <section className="section about-bg" id="about" ref={aboutRef}>
                <div className="fixed-menu"></div>
                {aboutVisible && <AboutLazy />}
            </section>

            {/* Charger Services uniquement quand About est visible */}
            {aboutVisible && (
                <section className="section" id="services">
                    <div className="fixed-menu"></div>
                    <ServicesLazy />
                </section>
            )}
        </ScrollSectionsWrapper>
    );
}
