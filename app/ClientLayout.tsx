import { lazy, Suspense } from "react";

const ClientLayout2 = lazy(() => import("./ClientLayout2"));

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Suspense fallback={"Loading..."}>
            <ClientLayout2>{children}</ClientLayout2>
        </Suspense>
    );
};

export default ClientLayout;
