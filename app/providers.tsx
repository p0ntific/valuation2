"use client";
import { RegionContext } from "@/lib/region/context";
import { useRegionController } from "@/lib/region/useRegionController";
import { LangContext } from "@/lib/translation/context";
import { useLangController } from "@/lib/translation/useLangController";
import { ThemeProvider } from "@gravity-ui/uikit";

export default function Providers({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const langData = useLangController();
    const regionData = useRegionController();

    return (
        <LangContext.Provider value={langData}>
            <RegionContext.Provider value={regionData}>
                <ThemeProvider theme="light">{children}</ThemeProvider>
            </RegionContext.Provider>
        </LangContext.Provider>
    );
}
