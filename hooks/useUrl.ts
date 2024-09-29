import { usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";

export const useUrl = () => {
    const router = useRouter();
    const pathName = usePathname();

    const origin =
        typeof window !== "undefined" && window.location.origin
            ? window.location.origin
            : "";

    const url = `${origin}${pathName}`;

    const navigate = useCallback((url: string) => router.push(url), [router]);
    const reloadPage = useCallback(() => {
        if (window) {
            window.location.reload();
        }
    }, []);
    return { url, origin, navigate, reloadPage };
};
