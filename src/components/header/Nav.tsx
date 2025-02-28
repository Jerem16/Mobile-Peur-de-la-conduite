import React from "react";
import { MenuItem } from "../../assets/data/menuItems";
import NavLink from "./NavLink";
import { Menu, X } from "lucide-react";
import { useNavigation } from "../../utils/context/NavigationContext";

interface NavProps {
    menuItems: {
        mainLink?: MenuItem[];
    };
    onNavigationClick: (path: string) => void;
}

const Nav: React.FC<NavProps> = ({ menuItems, onNavigationClick }) => {
    const {
        hamburgerMenuIsOpen,
        openHamburgerMenu,
        closeHamburgerMenu,
        openSubMenu,
        setOpenSubMenu,
    } = useNavigation();
    const handleMenuClick = (menuItemId: string) => {
        setOpenSubMenu(openSubMenu === menuItemId ? null : menuItemId);
    };
    return (
        <>
            <button
                aria-label="ouvrir le menu"
                onClick={
                    hamburgerMenuIsOpen
                        ? () => closeHamburgerMenu(200)
                        : openHamburgerMenu
                }
                className="menu"
            >
                {hamburgerMenuIsOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div
                className={`head-flex absolute ${
                    hamburgerMenuIsOpen ? "open" : ""
                }`}
            >
                {hamburgerMenuIsOpen && menuItems.mainLink && (
                    <nav className="main-nav">
                        {menuItems.mainLink.map((menuItem) => (
                            <NavLink
                                key={menuItem.id}
                                menuItem={menuItem}
                                onNavigationClick={onNavigationClick}
                                isOpen={openSubMenu === menuItem.id}
                                handleMenuClick={handleMenuClick}
                            />
                        ))}
                    </nav>
                )}
            </div>
        </>
    );
};

export default Nav;
