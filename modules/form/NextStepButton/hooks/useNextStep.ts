import { useFiltersContext } from "@/lib/filters/context";
import { useFormStepContext } from "@/lib/formStep/context";
import { IFilters, IFiltersKeys } from "@/shared/form/types";
import { useCallback, useMemo, useState } from "react";

const BASE_FIELDS: IFiltersKeys[] = [
    "address",
    "area",
    "floor",
    "roomsTotal",
] as const;

export const useNextStep = () => {
    const { fieldsMeta, values } = useFiltersContext<IFilters>();
    const [isNextButtonPressed, setIsNextButtonPressed] = useState(false);
    const { handleNextStep, step, stepNumber, countSteps } =
        useFormStepContext();

    const canGoNextStep: boolean = useMemo(() => {
        if (step !== "BASE") {
            return true;
        }

        return BASE_FIELDS.every((field) => {
            return fieldsMeta[field].isTouched && values[field];
        });
    }, [fieldsMeta, step, values]);

    const handleNextStepButton = useCallback(() => {
        setIsNextButtonPressed(true);
        handleNextStep(canGoNextStep);
    }, [canGoNextStep, handleNextStep]);

    return {
        canGoNextStep,
        isNextButtonPressed,
        setIsNextButtonPressed,
        handleNextStepButton,
        stepNumber,
        countSteps,
    };
};
