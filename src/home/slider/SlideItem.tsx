import React from "react";

// 📌 Définition des props pour le slide
interface SlideProps {
    h2: string;
    h2bold?: string;
    h2bold2?: string;
    h2bold3?: string;
    description: string;
    descriptionBold?: string;
    descriptionBoldEnd?: string;
    description2?: string;
    descriptionBold2?: string;
    className?: string;
    // isActive?: boolean; // Ajout du prop isActive
}
const SlideItem: React.FC<SlideProps> = ({
    className = "",
    // isActive = false,
    ...props
}) => {
    return (
        <div className={` ${className}`}>
            <div className="slider-content intro-message">
                <div className="sld-card_title flx-c">
                    <h2>
                        {props.h2} <span className="bold">{props.h2bold}</span>
                        <span className="bold">{props.h2bold2}</span>
                        <span className="bold">{props.h2bold3}</span>
                    </h2>
                </div>
                <div className="banner-description">
                    <p>
                        <span className="bold">{props.descriptionBold}</span>
                        {props.description}
                        <span className="bold">{props.descriptionBoldEnd}</span>
                    </p>
                    <p>
                        {props.description2}
                        <span className="bold">{props.descriptionBold2}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SlideItem;
