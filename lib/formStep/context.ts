"use client";
import { createContext, useContext } from "react";

export const AVAILABLE_FORM_STEPS = [
    "BASE",
    "HOUSE_INFO",
    "RENOVATION",
] as const;

export type IFormStep = (typeof AVAILABLE_FORM_STEPS)[number];

export interface IFormStepContext {
    step: IFormStep;
    stepNumber: number;
    countSteps: number;
    handlePrevStep: () => void;
    handleNextStep: (canGoNextStep?: boolean) => void;
    onChange: (step: IFormStep) => void;
}

export const FormStepContext = createContext<IFormStepContext | null>(null);

export const useFormStepNullable = () => {
    const context = useContext(FormStepContext);
    return context as IFormStepContext | null;
};

export const useFormStepContext = () => {
    const context = useContext(FormStepContext);

    if (!context) {
        throw new Error("useFormStepContext must be used inside provider");
    }

    return context as IFormStepContext;
};
