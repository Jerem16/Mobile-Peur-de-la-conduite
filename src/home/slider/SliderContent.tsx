"use client";
import React, { useState, useEffect, lazy, Suspense } from "react";

import SliderIntro from "./SliderContentIntro";

const ClientSldProvider = lazy(() => import("./ClientSldProvider"));
const SliderContent = () => {
    const [showSlider, setShowSlider] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSlider(true);
        }, 3200);

        return () => clearTimeout(timer);
    }, []);

    if (!showSlider) {
        return <SliderIntro />;
    }

    return (
        <Suspense fallback={<SliderIntro />}>
            <ClientSldProvider />
        </Suspense>
    );
};

export default SliderContent;
