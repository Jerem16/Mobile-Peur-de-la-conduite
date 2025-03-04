"use client";
import React, { useState, useEffect, lazy, Suspense } from "react";

import HeaderGhost from "./HeaderGhost";
// import HeaderWarpProvider from "./HeaderWarpProvider";
const HeaderWarpProvider = lazy(() => import("./HeaderWarpProvider"));
const HeaderLazy = () => {
    const [showHeader, setShowHeader] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowHeader(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    if (!showHeader) {
        return <HeaderGhost />;
    }
    return (
        <Suspense fallback={<HeaderGhost />}>
            <HeaderWarpProvider />
        </Suspense>
    );
};

export default React.memo(HeaderLazy);
