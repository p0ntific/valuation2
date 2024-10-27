"use client";
import { useCallback, useState } from "react";
import { AVAILABLE_FORM_STEPS, IFormStep, IFormStepContext } from "./context";

export const useFormStepController = () => {
    const [formStep, setFormStep] = useState<IFormStep>("BASE");

    const onChange = useCallback((step: IFormStep) => {
        setFormStep(step);
    }, []);

    const handleNextStep = useCallback(
        (canGoOnNextStep?: boolean) => {
            if (canGoOnNextStep === false) {
                return;
            }
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
