import React, {
    createContext,
    useContext,
    useState,
    useMemo,
    useCallback,
    useEffect,
} from "react";
import { useRouter, usePathname } from "next/navigation";

interface NavigationContextType {
    currentRoute: string;
    updateRoute: (path: string) => void;
    openSubMenu: string | null;
    setOpenSubMenu: (subMenuId: string | null) => void;
    showNavLinks: boolean;
    setShowNavLinks: (showNavLinks: boolean) => void;
    resetDisplayStyles: () => void;
    hamburgerMenuIsOpen: boolean;
    openHamburgerMenu: () => void;
    closeHamburgerMenu: (delay?: number) => void;
}

const NavigationContext = createContext<NavigationContextType | null>(null);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const router = useRouter();
    const pathname = usePathname();
    const [currentRoute, setCurrentRoute] = useState(pathname || "/");
    const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
    const [showNavLinks, setShowNavLinks] = useState<boolean>(true);
    const [hamburgerMenuIsOpen, sethamburgerMenuIsOpen] = useState(false);

    // Ouvre le menu
    const openHamburgerMenu = useCallback(() => {
        sethamburgerMenuIsOpen(true);
    }, []);

    // Ferme le menu avec un délai personnalisé
    const closeHamburgerMenu = useCallback((delay: number = 0) => {
        setTimeout(() => {
            sethamburgerMenuIsOpen(false);
        }, delay);
    }, []);

    // Réinitialise les styles et ferme les sous-menus
    const resetDisplayStyles = useCallback(() => {
        setOpenSubMenu(null);
    }, []);

    useEffect(() => {
        setCurrentRoute(pathname || "/");
    }, [pathname]);

    const updateRoute = useCallback(
        (path: string) => {
            setCurrentRoute(path);
            router.push(path);
        },
        [router]
    );

    const contextValue = useMemo(
        () => ({
            currentRoute,
            updateRoute,
            openSubMenu,
            setOpenSubMenu,
            resetDisplayStyles,
            showNavLinks,
            setShowNavLinks,
            hamburgerMenuIsOpen,
            openHamburgerMenu,
            closeHamburgerMenu,
        }),
        [
            currentRoute,
            updateRoute,
            openSubMenu,
            resetDisplayStyles,
            showNavLinks,
            hamburgerMenuIsOpen,
            openHamburgerMenu,
            closeHamburgerMenu,
        ]
    );

    return (
        <NavigationContext.Provider value={contextValue}>
            {children}
        </NavigationContext.Provider>
    );
};

export const useNavigation = () => {
    const context = useContext(NavigationContext);
    if (!context) {
        throw new Error(
            "useNavigation must be used within a NavigationProvider"
        );
    }
    return context;
};
