"use client";
import { FiltersProvider } from "@/lib/filters/context";
import { RegionContext } from "@/lib/region/context";
import { useRegionController } from "@/lib/region/useRegionController";
import { LangContext } from "@/lib/translation/context";
import { useLangController } from "@/lib/translation/useLangController";
import { useFormFilters } from "@/modules/form/hooks/useFormFilters";
import { ThemeProvider } from "@gravity-ui/uikit";
import { Toaster } from "react-hot-toast";

export default function Providers({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const langData = useLangController();
    const regionData = useRegionController();
    const contextValue = useFormFilters();

    return (
        <LangContext.Provider value={langData}>
            <RegionContext.Provider value={regionData}>
                <FiltersProvider contextValue={contextValue}>
                    <ThemeProvider theme="light">
                        {children}
                        <Toaster />
                    </ThemeProvider>
                </FiltersProvider>
            </RegionContext.Provider>
        </LangContext.Provider>
    );
}
