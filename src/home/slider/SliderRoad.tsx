import React from "react";

interface SliderRoadProps {
    currentSlide: number;
}

const SliderRoad: React.FC<SliderRoadProps> = () => {
    return (
        <div className="sld-container">
            <img
                className="sld-road-med"
                src="/img/slider/slider-road-medium.svg"
                alt="Slider Road Background"
                width="1635"
                height="528"
            />
        </div>
    );
};

export default SliderRoad;
