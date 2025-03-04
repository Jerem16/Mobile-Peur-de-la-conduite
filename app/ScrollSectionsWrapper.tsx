// ScrollSectionsWrapper.js

"use client";
// import { lazy, Suspense } from "react";
import dynamic from "next/dynamic";
import { useScrollAnchors } from "../src/utils/scrollUtils";
import { sections } from "../src/assets/data/sections";
// import DrivingProvider from "../src/utils/context/DrivingContext";

const DrivingProvider = dynamic(
    () => import("../src/utils/context/DrivingContext"),
);

// const DrivingProvider = lazy(() =>
//     import("../src/utils/context/DrivingContext")
// );
const ScrollSectionsWrapper = ({ children }) => {
    useScrollAnchors(sections);
    return <DrivingProvider>{children}</DrivingProvider>;
};
export default ScrollSectionsWrapper;
