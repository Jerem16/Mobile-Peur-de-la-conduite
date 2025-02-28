import React from "react";
import { Metadata } from "next";
import ScrollSectionsWrapper from "./ScrollSectionsWrapper";
import Slider from "../src/home/slider/Slider";

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
            <HomeOut />
        </ScrollSectionsWrapper>
    );
}
