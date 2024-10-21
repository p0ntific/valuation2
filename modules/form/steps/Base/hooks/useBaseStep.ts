import { useFiltersContext } from "@/lib/filters/context";
import { useFormStepContext } from "@/lib/formStep/context";
import { IFilters } from "@/modules/form/types";
import { useCallback, useMemo, useState } from "react";

const BASE_FIELDS = ["address", "area", "floor", "roomsTotal"] as const;

export const useBaseStep = () => {
    const { fieldsMeta, values } = useFiltersContext<IFilters>();
    const [isNextButtonPressed, setIsNextButtonPressed] = useState(false);
    const { handleNextStep } = useFormStepContext();

    const canGoNextStep: boolean = useMemo(() => {
        return BASE_FIELDS.every((field) => {
            return fieldsMeta[field].isTouched && values[field];
        });
    }, [fieldsMeta, values]);

    const handleNextStepButton = useCallback(() => {
        setIsNextButtonPressed(true);
        handleNextStep(canGoNextStep);
    }, [canGoNextStep, handleNextStep]);

    return {
        canGoNextStep,
        isNextButtonPressed,
        setIsNextButtonPressed,
        handleNextStepButton,
    };
};
