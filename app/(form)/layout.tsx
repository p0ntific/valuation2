"use client";
import { FiltersProvider } from "@/lib/filters/context";
import { AboutPanel } from "@/modules/aboutPanel";
import { useFormFilters } from "@/modules/form/hooks/useFormFilters";
import { LangController } from "@/modules/langController";
import { Navbar } from "@/modules/navbar";
import { RegionController } from "@/modules/regionController";

export default function FormLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const contextValue = useFormFilters();
    return (
        <FiltersProvider contextValue={contextValue}>
            <div className="flex flex-col h-full min-h-[100vh]">
                <Navbar
                    rightAdorment={
                        <div className="flex items-center gap-2">
                            <LangController />
                            <RegionController />
                        </div>
                    }
                ></Navbar>
                <AboutPanel title="Форма" />
                {children}
            </div>
        </FiltersProvider>
    );
}
