// import React from "react";
// import { Metadata } from "next";
// import ScrollSectionsWrapper from "./ScrollSectionsWrapper";
// import Slider from "../src/home/slider/Slider";

// import { SliderProvider } from "../src/utils/context/slider/SliderContext";

// export const metadata: Metadata = {
//     title: "Accueil | Peur de la conduite",
// };
// import HomeOut from "./outPage";
// export default function Home() {
//     const About = React.lazy(() => import("../src/home/about/about"));
//     const Services = React.lazy(() => import("../src/home/service/services"));
//     const ContactHome = React.lazy(() => import("../src/home/contact-section"));

//     return (
//         <ScrollSectionsWrapper>
//             <section className="section slider-bg" id="slider">
//                 <SliderProvider>
//                     <Slider />
//                 </SliderProvider>
//             </section>
//             <section className="section about-bg" id="about">
//                 <div className="fixed-menu"></div>
//                 <React.Suspense fallback={<div>Chargement...</div>}>
//                     <About />
//                 </React.Suspense>
//             </section>
//             <section className="section" id="services">
//                 <div className="fixed-menu"></div>
//                 <React.Suspense fallback={<div>Chargement...</div>}>
//                     <Services />
//                 </React.Suspense>
//             </section>
//             <section className="section" id="contact">
//                 <div className="fixed-menu"></div>
//                 <React.Suspense fallback={<div>Chargement...</div>}>
//                     <ContactHome />
//                 </React.Suspense>
//             </section>
//         </ScrollSectionsWrapper>
//     );
// }
