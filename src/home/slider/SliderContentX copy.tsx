"use client";
import React, { useContext, Suspense } from "react";
import dynamic from "next/dynamic";
import { sliderContent } from "../../assets/data/content/slider";
import { SliderContext } from "../../utils/context/slider/SliderContext";
import SlideItem from "./SlideItem";

// Chargement dynamique des composants
const SliderArrow = dynamic(() => import("./SliderArrow"), { ssr: false });
// const SlideItem = dynamic(() => import("./SlideItem"), { ssr: false });

const SliderContentX = () => {
    const sliderContext = useContext(SliderContext);

    if (!sliderContext) {
        throw new Error("Slider must be used within a SliderProvider");
    }

    const { nextSlide, prevSlide, getClass } = sliderContext;

    return (
        <Suspense fallback={<div>Chargement...</div>}>
            {sliderContent.map((slide, index) => (
                <SlideItem
                    key={index + "slider"}
                    {...slide}
                    className={`slide ${getClass(index)}`}
                />
            ))}
            <SliderArrow prevSlide={prevSlide} nextSlide={nextSlide} />
        </Suspense>
    );
};

export default React.memo(SliderContentX);
