import React from "react";
import Image from "next/image";
import { aboutContent } from "../../assets/data/content/about";
import ButtonLink from "../../components/button/ButtonLink";
import { menuItems } from "../../assets/data/menuItems";
const About = () => {
    return (
        <div className="about content-wrapper flx-c">
            <div className="ab-img_info">
                <img
                    src="/img/about/INFO.svg"
                    alt="Info Icon"
                    width="540"
                    height="540"
                />
            </div>
            {aboutContent.map((content, index) => (
                <div className="segment" key={index + "ab-card"}>
                    <div className="card_header flx-c">
                        <h3>
                            {content.cardIdentity.firstName}
                            <span>{content.cardIdentity.name}</span>
                        </h3>
                        <Image
                            className="ab-img_head"
                            src="/img/about/avatar.webp"
                            alt={`Avatar de ${content.cardIdentity.firstName}`}
                            width={225}
                            height={225}
                            priority={true}
                        />
                        <p className="profession">
                            {content.cardIdentity.profession}
                        </p>
                    </div>
                    <div className="card_content">
                        {content.cardContent.description.map((line, i) => (
                            <p
                                key={i + "ab"}
                                dangerouslySetInnerHTML={{ __html: line }}
                            />
                        ))}
                    </div>
                    {menuItems.mainLink?.[4] && (
                        <ButtonLink href={menuItems.mainLink[4].path}>
                            Contactez-moi
                        </ButtonLink>
                    )}
                </div>
            ))}
        </div>
    );
};

export default About;
