"use client";
import React, { useContext } from "react";
import { sliderContent } from "../../assets/data/content/slider";
import Space from "../../utils/Space";
import SliderArrow from "./SliderArrow";

import { SliderContext } from "../../utils/context/slider/SliderContext";
const SliderContent = () => {
    const sliderContext = useContext(SliderContext);

    if (!sliderContext) {
        throw new Error("Slider must be used within a SliderProvider");
    }

    const { nextSlide, prevSlide, getClass } = sliderContext;
    return (
        <>
            {sliderContent.map((slide, index) => (
                <div key={index + "C"} className={`slide ${getClass(index)}`}>
                    <div className="slider-content">
                        <div className="sld-card_title flx-c">
                            <h2>
                                {slide.h2}
                                <Space />
                                <span className="bold">{slide.h2bold}</span>
                                <span className="bold">{slide.h2bold2}</span>
                                <span className="bold">{slide.h2bold3}</span>
                            </h2>
                        </div>
                        <div className="banner-description">
                            <p>
                                <span className="bold">
                                    {slide.descriptionBold}
                                </span>
                                {slide.description}
                                <span className="bold">
                                    {slide.descriptionBoldEnd}
                                </span>
                            </p>
                            <p>
                                {slide.description2}
                                <span className="bold">
                                    {slide.descriptionBold2}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            ))}
            <SliderArrow prevSlide={prevSlide} nextSlide={nextSlide} />
        </>
    );
};

export default SliderContent;
