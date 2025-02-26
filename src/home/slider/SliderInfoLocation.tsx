import React from "react";
import { sliderInfo } from "../../assets/data/content/info";

const SliderInfo = () => {
    return (
        <div className="sld-info_ctn">
            <p>{sliderInfo[0].info}</p>
        </div>
    );
};

export default SliderInfo;
