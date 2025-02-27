import React from "react";
import Image from "next/image";
interface SliderRoadProps {
    currentSlide: number;
}

const SliderRoad: React.FC<SliderRoadProps> = () => {
    return (
        <div className="sld-container">
            <Image
                className="sld-road-med"
                src="/img/slider/slider-road-medium.svg"
                alt="Slider Road Background"
                width={1635}
                height={528}
                priority
            />
        </div>
    );
};

export default SliderRoad;
