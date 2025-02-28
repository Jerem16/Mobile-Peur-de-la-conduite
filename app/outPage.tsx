// Appelle `use client` pour ce fichier
"use client";

import dynamic from "next/dynamic";

// Chargement paresseux des composants
const AboutLazy = dynamic(() => import("../src/home/about/about"), {
    ssr: false,
    loading: () => <div>Chargement de la section...</div>,
});
const ServicesLazy = dynamic(() => import("../src/home/service/services"), {
    ssr: false,
    loading: () => <div>Chargement des services...</div>,
});
const ContactHomeLazy = dynamic(() => import("../src/home/contact-section"), {
    ssr: false,
    loading: () => <div>Chargement du contact...</div>,
});

export default function Home() {
    return (
        <>
            <section className="section about-bg" id="about">
                <div className="fixed-menu"></div>
                <AboutLazy />
            </section>
            <section className="section" id="services">
                <div className="fixed-menu"></div>
                <ServicesLazy />
            </section>
            <section className="section" id="contact">
                <div className="fixed-menu"></div>
                <ContactHomeLazy />
            </section>
        </>
    );
}
