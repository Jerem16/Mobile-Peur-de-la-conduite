import React from "react";
import { sliderInfo } from "../../assets/data/content/info";
import LocationP1 from "./svg/LocationP1";
import LocationP2 from "./svg/LocationP2";

const SliderInfo = () => {
    return (
        <div className="sld-info_ctn">
            <p>{sliderInfo[0].info}</p>
            <div className="icon-position">
                <LocationP2 />
                <LocationP1 />
            </div>
        </div>
    );
};

export default SliderInfo;
