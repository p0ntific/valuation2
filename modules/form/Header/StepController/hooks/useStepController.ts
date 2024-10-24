import {
    AVAILABLE_FORM_STEPS,
    useFormStepContext,
} from "@/lib/formStep/context";
import { useTranslation } from "@/lib/translation/useTranslation";
import { useMemo } from "react";
import { translations } from "../i18n";
import { useFiltersContext } from "@/lib/filters/context";
import { IFilters, IFiltersKeys } from "@/shared/form/types";

interface IStepOption {
    text: string;
    isActive: boolean;
    canGoToThisStep: boolean;
    number: number;
    onClick: () => void;
}

const BASE_FIELDS: IFiltersKeys[] = [
    "address",
    "area",
    "floor",
    "roomsTotal",
] as const;

export const useStepController = () => {
    const { fieldsMeta, values } = useFiltersContext<IFilters>();

    const {
        stepNumber,
        countSteps,
        onChange,
        step: currentStep,
    } = useFormStepContext();
    const t = useTranslation(translations);

    const isFirstStepCompleted: boolean = useMemo(() => {
        if (currentStep !== "BASE") {
            return true;
        }

        return BASE_FIELDS.every((field) => {
            return fieldsMeta[field].isTouched && values[field];
        });
    }, [fieldsMeta, currentStep, values]);

    const steps: IStepOption[] = useMemo(() => {
        return AVAILABLE_FORM_STEPS.map((step, i) => {
            const canGoToThisStep =
                AVAILABLE_FORM_STEPS.indexOf(currentStep) >= i - 1 &&
                isFirstStepCompleted;
            return {
                text: t(`label_${step}`),
                isActive:
                    (i < stepNumber && i !== 0) ||
                    (isFirstStepCompleted && i === 0),
                number: i + 1,
                canGoToThisStep,
                onClick: () => {
                    if (canGoToThisStep) onChange(step);
                },
            };
        });
    }, [currentStep, isFirstStepCompleted, onChange, stepNumber, t]);

    return { steps, countSteps };
};
