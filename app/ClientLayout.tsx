import { lazy, Suspense } from "react";

const LazyClientLayout = lazy(() => import("./ClientLayout2"));

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Suspense fallback={"Loading..."}>
            <LazyClientLayout>{children}</LazyClientLayout>
        </Suspense>
    );
};

export default ClientLayout;
