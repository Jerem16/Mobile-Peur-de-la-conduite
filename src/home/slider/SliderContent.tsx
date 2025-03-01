"use client";
import React, { useContext, useState, useEffect } from "react";
import { sliderContent } from "../../assets/data/content/slider"; // Assure-toi que ce tableau existe bien
import SliderArrow from "./SliderArrow";
import { SliderContext } from "../../utils/context/slider/SliderContext";
import SlideItem from "./SlideItem";
import SliderIntro from "./SliderContentIntro";

const SliderContent = () => {
    const sliderContext = useContext(SliderContext);
    const [showSlider, setShowSlider] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSlider(true);
        }, 2800);

        return () => clearTimeout(timer);
    }, []);

    if (!sliderContext) {
        throw new Error("Slider must be used within a SliderProvider");
    }

    const { nextSlide, prevSlide, getClass } = sliderContext;

    if (!showSlider) {
        return <SliderIntro />;
    }

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

export default SliderContent;
