import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Nav from "./Nav";
import Logo from "../svg_Icon/Logo";
import { useScrollContext } from "../../utils/context/ScrollContext";
import { useNavigation } from "../../utils/context/NavigationContext";
import { MenuItem, menuItems } from "../../assets/data/menuItems";
import { updateMenuClasses } from "../../utils/updateMenuUtils";
import { handleScrollClick, handleNavClick } from "../../utils/fnScrollUtils";
import { useInitialScroll } from "../../utils/scrollUtils";

interface NavProps {
    menuItems: MenuItem[];
    onNavigationClick: (path: string) => void;
    openButton: boolean;
    openMainButton: boolean;
    tabletMain: boolean;
    bigMenu: boolean;
    setBigMenu: React.Dispatch<React.SetStateAction<boolean>>;
    setOpenMainButton: React.Dispatch<React.SetStateAction<boolean>>;
    setTabletMain: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<NavProps> = () => {
    const pathname = usePathname();
    const { currentRoute, updateRoute } = useNavigation();
    const { activeSection } = useScrollContext();

    useInitialScroll(pathname);

    const handleNavigationClick = (path: string) => {
        handleNavClick(path, currentRoute, updateRoute, handleScrollClick);
    };

    const updatedMenuItems = updateMenuClasses(
        menuItems.mainLink,
        menuItems.reservation,
        menuItems.search,
        menuItems.connection,
        activeSection,
        currentRoute
    );

    return (
        <div className="header">
            <Link
                href="/#slider"
                aria-label="Retour à la page d'accueil : Peur de la conduite"
                className="logo-link"
            >
                <Logo />
            </Link>
            <Nav
                menuItems={updatedMenuItems}
                onNavigationClick={handleNavigationClick}
            />
        </div>
    );
};

export default Header;
