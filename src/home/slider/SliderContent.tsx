
import React, { lazy, Suspense } from "react";

import SliderIntro from "./SliderContentIntro";
import { SliderProvider } from "../../../src/utils/context/slider/SliderContext";

const SliderLazy = lazy(() => import("./SliderContentX"));

const SliderContent = () => {
    return (
        <Suspense fallback={<SliderIntro />}>
            <SliderProvider>
                <SliderLazy />
            </SliderProvider>
        </Suspense>
    );
};

export default SliderContent;
