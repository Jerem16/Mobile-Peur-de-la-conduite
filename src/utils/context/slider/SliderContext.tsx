"use client";
import React, { createContext, useState, ReactNode, useMemo } from "react";
import { sliderContent } from "../../../assets/data/content/slider";
import { useSlides } from "./useSlides";
import { useScrollListener } from "./useScrollListener";
import { useAutoSlide } from "./useAutoSlide";
import { createUseContext } from "../utils/createUseContext";
import { classGetter } from "./fnSliderContext";

// Définition de l'interface du contexte
interface SliderContextType {
    currentSlide: number;
    nextSlide: () => void;
    prevSlide: () => void;
    getClass: (index: number) => string;
}

// Création du SliderContext avec un type défini
export const SliderContext = createContext<SliderContextType | undefined>(
    undefined
);

export const SliderProvider = ({ children }: { children: ReactNode }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [stopTimerButton, setStopTimerButton] = useState(false);

    // Gestion des slides (next/prev)
    const { nextSlide, prevSlide } = useSlides(
        currentSlide,
        setCurrentSlide,
        setStopTimerButton,
        sliderContent.length
    );

    // Gestion du listener de scroll
    useScrollListener(setStopTimerButton, stopTimerButton);

    // Gestion du slide automatique
    useAutoSlide(
        stopTimerButton,
        setStopTimerButton,
        setCurrentSlide,
        sliderContent.length
    );

    // Calcul du contexte avec les valeurs à mémoriser
    const contextValue: SliderContextType = useMemo(
        () => ({
            currentSlide,
            nextSlide,
            prevSlide,
            getClass: (index: number) =>
                classGetter(
                    index,
                    currentSlide,
                    (currentSlide - 1 + sliderContent.length) %
                        sliderContent.length,
                    (currentSlide + 1) % sliderContent.length
                ),
        }),
        [currentSlide, nextSlide, prevSlide]
    );

    // Fournir le contexte aux enfants
    return (
        <SliderContext.Provider value={contextValue}>
            {children}
        </SliderContext.Provider>
    );
};

// Création du hook personnalisé pour consommer le contexte
export const useSlider = createUseContext(SliderContext, "useSlider");
