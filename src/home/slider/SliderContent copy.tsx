// "use client";
// import React, { useState, useEffect } from "react";

// import SliderIntro from "./SliderContentIntro";
// import SliderContentX from "./SliderContentX";

// const SliderContent = () => {
//     const [showSlider, setShowSlider] = useState(false);

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setShowSlider(true);
//         }, 2800);

//         return () => clearTimeout(timer);
//     }, []);

//     if (!showSlider) {
//         return <SliderIntro />;
//     }

//     return <SliderContentX />;
// };

// export default SliderContent;
