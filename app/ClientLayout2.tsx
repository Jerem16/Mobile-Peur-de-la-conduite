"use client";

import dynamic from "next/dynamic";
import { ScrollProvider } from "../src/utils/context/ScrollContext";

const LazyScrollSectionsWrapper = dynamic(
    () => import("./ScrollSectionsWrapper"),
    {
        loading: () => <div>Chargement des sections...</div>,
    }
);

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <ScrollProvider>
            <LazyScrollSectionsWrapper>{children}</LazyScrollSectionsWrapper>
        </ScrollProvider>
    );
};

export default ClientLayout;