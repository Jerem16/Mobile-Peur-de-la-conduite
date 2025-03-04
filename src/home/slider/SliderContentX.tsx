"use client";
import React from "react";
import { sliderContent } from "../../assets/data/content/slider";
import dynamic from "next/dynamic";
import { useSlider } from "../../utils/context/slider/SliderContext";
import SlideItem from "./sliderItem/SlideItem";

// Dynamique importation de l'arrow
const SliderArrow = dynamic(() => import("./SliderArrow"), { ssr: false });

const SliderContentX = () => {
    const { nextSlide, prevSlide, getClass } = useSlider();

    return (
        <>
            {sliderContent.map((slide, index) => (
                <SlideItem
                    key={index + "slider"}
                    {...slide}
                    className={`slide ${getClass(index)}`}
                />
            ))}
            <SliderArrow prevSlide={prevSlide} nextSlide={nextSlide} />
        </>
    );
};

export default SliderContentX;
