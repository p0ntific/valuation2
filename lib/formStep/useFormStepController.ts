"use client";
import { useCallback, useEffect, useState } from "react";
import { AVAILABLE_FORM_STEPS, IFormStep, IFormStepContext } from "./context";
import { useControlLocalStorage } from "@/hooks/useControlLocalStorage";

const LOCAL_STORAGE_NAME = "step";

export const useFormStepController = () => {
    const { localStorageValue, setLocalStorageValue } =
        useControlLocalStorage<IFormStep>(LOCAL_STORAGE_NAME);

    const [formStep, setFormStep] = useState<IFormStep>("BASE");

    useEffect(() => {
        setFormStep(localStorageValue ?? "BASE");
    }, [localStorageValue]);

    const onChange = useCallback(
        (step: IFormStep) => {
            setLocalStorageValue(step);
            setFormStep(step);
        },
        [setLocalStorageValue],
    );
    const handleNextStep = useCallback(
        (canGoOnNextStep?: boolean) => {
            if (canGoOnNextStep === false) {
                return;
            }
            console.log(formStep);
            if (formStep === "BASE") {
                onChange("HOUSE_INFO");
            } else if (formStep === "HOUSE_INFO") {
                onChange("RENOVATION");
            }
        },
        [formStep, onChange],
    );

    const handlePrevStep = useCallback(() => {
        if (formStep === "HOUSE_INFO") {
            onChange("BASE");
        } else if (formStep === "RENOVATION") {
            onChange("HOUSE_INFO");
        }
    }, [formStep, onChange]);

    return {
        step: formStep,
        onChange,
        handleNextStep,
        countSteps: AVAILABLE_FORM_STEPS.length,
        stepNumber: AVAILABLE_FORM_STEPS.indexOf(formStep) + 1,
        handlePrevStep,
    } as IFormStepContext;
};
