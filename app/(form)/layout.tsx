"use client";
import { FormStepContext } from "@/lib/formStep/context";
import { useFormStepController } from "@/lib/formStep/useFormStepController";
import { LangController } from "@/modules/langController";
import { Navbar } from "@/modules/navbar";
import { RegionController } from "@/modules/regionController";

export default function FormLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const formStepData = useFormStepController();

    return (
        <FormStepContext.Provider value={formStepData}>
            <div className="flex flex-col h-full min-h-[100vh]">
                <Navbar
                    rightAdorment={
                        <div className="flex items-center gap-2">
                            <LangController />
                            <RegionController />
                        </div>
                    }
                ></Navbar>
                {children}
            </div>
        </FormStepContext.Provider>
    );
}
