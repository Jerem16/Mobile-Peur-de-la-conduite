import React from "react";
import { sliderContent } from "../../assets/data/content/slider";
import Space from "../../utils/Space";
import SliderCTA from "./SliderCTA";
import SliderArrow from "./SliderArrow";
// import SliderInfoLocation from "./SliderInfoLocation";
// import SliderIconLocation from "./SliderIconLocation";
import SliderInfo from "./SliderInfo";
interface SliderContentProps {
    getClass: (index: number) => string;
    nextSlide: (event?: React.MouseEvent | React.KeyboardEvent) => void;
    prevSlide: () => void;
}
const SliderContent: React.FC<SliderContentProps> = ({
    nextSlide,
    prevSlide,
    getClass,
}) => {
    return (
        <div className="slider">
            <div className="content-wrapper">
                {sliderContent.map((slide, index) => (
                    <div
                        key={index + "C"}
                        className={`slide ${getClass(index)}`}
                    >
                        <div className="slider-content">
                            <div className="sld-card_title flx-c">
                                <h2>
                                    {slide.h2}
                                    <Space />
                                    <span className="bold">{slide.h2bold}</span>
                                    <span className="bold">
                                        {slide.h2bold2}
                                    </span>
                                    <span className="bold">
                                        {slide.h2bold3}
                                    </span>
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
                <div className="flx-c info">
                    <SliderCTA />
                    <SliderInfo />
                </div>
            </div>
        </div>
    );
};

export default SliderContent;
