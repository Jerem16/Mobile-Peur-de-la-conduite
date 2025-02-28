import React from "react";
import { sliderInfo } from "../../assets/data/content/info";
import LocationP1 from "./svg/LocationP1";
import LocationP2 from "./svg/LocationP2";

const SliderInfo = () => {
    return (
        <>
            <div className="sld-info_ctn">
                <div className="icon-position">
                    <LocationP2 />
                    <LocationP1 />
                </div>
            </div>
            <p className="p-info_ctn">{sliderInfo[0].info}</p>
        </>
    );
};

export default SliderInfo;
