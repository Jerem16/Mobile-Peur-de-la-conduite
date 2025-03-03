import React from "react";
import { Metadata } from "next";
import Slider from "../src/home/slider/Slider";
import About from "../src/home/about/about";

export const metadata: Metadata = {
    title: "Accueil | Peur de la conduite",
};
import HomeOut from "./outPage";
export default function Home() {
    return (
        <>
            {/* <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin=""
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Nunito:wght@700&family=Roboto+Flex:opsz@8..144&display=swap"
                    fetchPriority="low"
                />
            </head> */}

            <>
                <section className="section slider-bg" id="slider">
                    <Slider />
                </section>
                <section className="section about-bg" id="about">
                    <div className="fixed-menu"></div>
                    <React.Suspense fallback={<div>Chargement...</div>}>
                        <About />
                    </React.Suspense>
                </section>
                <HomeOut />
            </>
        </>
    );
}
