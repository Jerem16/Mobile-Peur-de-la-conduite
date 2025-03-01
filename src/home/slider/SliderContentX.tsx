"use client";
import React, { useContext } from "react";
import { sliderContent } from "../../assets/data/content/slider";
// import SliderArrow from "./SliderArrow";
import dynamic from "next/dynamic";
import { SliderContext } from "../../utils/context/slider/SliderContext";
import SlideItem from "./SlideItem";
const SliderArrow = dynamic(() => import("./SliderArrow"), { ssr: false });


const SliderContentX = () => {
    const sliderContext = useContext(SliderContext);

    if (!sliderContext) {
        throw new Error("Slider must be used within a SliderProvider");
    }

    const { nextSlide, prevSlide, getClass } = sliderContext;

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
