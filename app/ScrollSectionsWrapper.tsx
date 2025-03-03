// ScrollSectionsWrapper.js

"use client";

import React from "react";
import { useScrollAnchors } from "../src/utils/scrollUtils";
import { sections } from "../src/assets/data/sections";
import { DrivingProvider } from "../src/utils/context/DrivingContext";
const ScrollSectionsWrapper = ({ children }) => {
    useScrollAnchors(sections);
    return <DrivingProvider>{children}</DrivingProvider>;
};
export default ScrollSectionsWrapper;
