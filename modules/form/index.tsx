"use client";
import { useMemo } from "react";
import { Base } from "./steps/Base";
import { HouseInfo } from "./steps/HouseInfo";
import { Renovation } from "./steps/Renovation";

import { Header } from "./Header";
import { useFormStepContext } from "@/lib/formStep/context";
import { useSubmit } from "@/shared/form/hooks/useSubmit";

export const Form = () => {
    const { step } = useFormStepContext();
    const { isLoading, handleSubmit } = useSubmit();

    const stepComponent = useMemo(() => {
        switch (step) {
            case "BASE":
                return <Base />;
            case "HOUSE_INFO":
                return <HouseInfo />;
            case "RENOVATION":
                return (
                    <Renovation
                        isLoading={isLoading}
                        handleSubmit={handleSubmit}
                    />
                );
            default:
                return null;
        }
    }, [handleSubmit, isLoading, step]);

    return (
        <div className="w-[1200px] mx-auto flex flex-col gap-16 my-24">
            <Header />
            {stepComponent}
        </div>
    );
};
