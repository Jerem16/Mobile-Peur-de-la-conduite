import React from "react";
import { Metadata } from "next";
import ScrollSectionsWrapper from "./ScrollSectionsWrapper";
import Slider from "../src/home/slider/Slider";
import About from "../src/home/about/about";
import { SliderProvider } from "../src/utils/context/slider/SliderContext";

export const metadata: Metadata = {
    title: "Accueil | Peur de la conduite",
};
import HomeOut from "./outPage";
export default function Home() {
    return (
        <ScrollSectionsWrapper>
            <section className="section slider-bg" id="slider">
                <SliderProvider>
                    <Slider />
                </SliderProvider>
            </section>
            <section className="section about-bg" id="about">
                <div className="fixed-menu"></div>
                <React.Suspense fallback={<div>Chargement...</div>}>
                    <About />
                </React.Suspense>
            </section>
            <HomeOut />
        </ScrollSectionsWrapper>
    );
}
