"use client";

import dynamic from "next/dynamic";
const IconPosition = () => {
    const LocationP1 = dynamic(() => import("./svg/LocationP1"), {
        ssr: false,
    });
    const LocationP2 = dynamic(() => import("./svg/LocationP2"), {
        ssr: false,
    });
    return (
        <>
            <LocationP2 />
            <LocationP1 />
        </>
    );
};

export default IconPosition;
