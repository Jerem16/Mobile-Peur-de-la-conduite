import React, { useMemo } from "react";

const SldTitle = ({ h2, h2bold, h2bold2, h2bold3 }) => {
    // Mémorisation des titres pour éviter le recalcul
    const boldTexts = useMemo(
        () => [h2bold, h2bold2, h2bold3].filter(Boolean),
        [h2bold, h2bold2, h2bold3]
    );

    return (
        <div className="sld-card_title flx-c">
            <h2>
                {h2}
                {boldTexts.map((text, index) => (
                    <span key={index + "sldTitle"} className="bold">
                        {text}
                    </span>
                ))}
            </h2>
        </div>
    );
};

// Optimisation avec React.memo pour éviter les re-rendus inutiles
export default React.memo(SldTitle);
