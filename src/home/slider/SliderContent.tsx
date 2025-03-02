"use client";
import React, { useState, useEffect, lazy, Suspense } from "react";
import { SliderProvider } from "../../../src/utils/context/slider/SliderContext";
import SliderIntro from "./SliderContentIntro";
const SliderLazy = lazy(() => import("./SliderContentX"));

const SliderContent = () => {
    const [showSlider, setShowSlider] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSlider(true);
        }, 2800);

        return () => clearTimeout(timer);
    }, []);

    if (!showSlider) {
        return <SliderIntro />;
    }

    return (
        <Suspense fallback={<SliderIntro />}>
            <SliderProvider>
                <SliderLazy />
            </SliderProvider>
        </Suspense>
    );
};

export default SliderContent;
