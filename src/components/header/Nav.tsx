import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { MenuItem } from "../../assets/data/menuItems";
import { useMenuBehavior } from "../../utils/updateMenuUtils";
import NavLinkShow from "./navLink/NavLinkShow";
import { useNavigation } from "../../utils/context/NavigationContext";
import Link from "next/link";

interface MobileMenuProps {
    menuItems: {
        mainLink?: MenuItem[];
        reservation?: MenuItem[];
        search?: MenuItem[];
        connection?: MenuItem[];
    };
    onNavigationClick: (path: string) => void;
    openButton: boolean;
    openMainButton: boolean;
    tabletMain: boolean;
    bigMenu: boolean;
    setOpenMainButton: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
    menuItems,
    onNavigationClick,
    openButton,
    openMainButton,
    setOpenMainButton,
    tabletMain,
    bigMenu,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

    const toggleMenu = () => setIsOpen(!isOpen);
    const toggleSubMenu = (id: string) =>
        setOpenSubMenu(openSubMenu === id ? null : id);

    return (
        <nav className="relative">
            <button
                onClick={toggleMenu}
                className="p-2 text-white bg-gray-800 rounded-md"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            {isOpen && menuItems.mainLink && (
                <div className="absolute top-12 left-0 w-full bg-white shadow-lg rounded-lg p-4">
                    <ul className="space-y-2">
                        {menuItems.mainLink.map((item) => (
                            <li key={item.id} className="border-b py-2">
                                {item.subItems ? (
                                    <>
                                        <button
                                            onClick={() =>
                                                toggleSubMenu(item.id)
                                            }
                                            className="flex justify-between w-full text-left cursor-pointer py-2 text-gray-700 hover:text-blue-500"
                                        >
                                            {item.title}
                                            <span>
                                                {openSubMenu === item.id
                                                    ? "▲"
                                                    : "▼"}
                                            </span>
                                        </button>
                                        {openSubMenu === item.id && (
                                            <ul className="pl-4 space-y-1 mt-2">
                                                {item.subItems.map((sub) => (
                                                    <li key={sub.id}>
                                                        <Link
                                                            href={sub.AnchorId}
                                                            className="block py-1 text-gray-700 hover:text-blue-500"
                                                        >
                                                            {sub.title}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </>
                                ) : (
                                    <Link
                                        href={item.path}
                                        className="block py-2 text-gray-700 hover:text-blue-500"
                                    >
                                        {item.title}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default MobileMenu;
