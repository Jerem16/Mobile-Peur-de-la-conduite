import { useCallback } from "react";
export const useSlides=(currentSlide:number,setCurrentSlide:React.Dispatch<React.SetStateAction<number>>,setStopTimerButton:React.Dispatch<React.SetStateAction<boolean>>,sliderContentLength:number)=>{const nextSlide=useCallback(()=>{sessionStorage.removeItem("slideRef");const nextValue=(currentSlide+1)%sliderContentLength;setStopTimerButton(true);setCurrentSlide(nextValue)},[setStopTimerButton,currentSlide,setCurrentSlide,sliderContentLength]);const prevSlide=useCallback(()=>{sessionStorage.removeItem("slideRef");const prevValue=(currentSlide-1+sliderContentLength)%sliderContentLength;setStopTimerButton(true);setCurrentSlide(prevValue)},[currentSlide,setStopTimerButton,setCurrentSlide,sliderContentLength]);return{nextSlide,prevSlide}};