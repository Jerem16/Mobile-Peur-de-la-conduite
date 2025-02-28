import { sliderInfo } from "../../assets/data/content/info";
import IconPosition from "./IconPosition";

const SliderInfo = () => {
    return (
        <>
            <div className="sld-info_ctn">
                <div className="icon-position">
                    <IconPosition />
                </div>
            </div>
            <p className="p-info_ctn">{sliderInfo[0].info}</p>
        </>
    );
};

export default SliderInfo;
