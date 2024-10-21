import { useFilters } from "@/lib/filters/hooks/useFilters";
import { IFiltersSubmitParams } from "@/lib/filters/types";
import { useCallback } from "react";
import { availableFields, defaultValues } from "../constants";
import { IRegistration } from "../types";
import { useGetInitialValues } from "./useGetInitialValues";

interface IUseRegistrationFiltersProps {
    onSubmit?: (values: IRegistration) => void | Promise<void>;
}

export const useRegistrationFilters = ({
    onSubmit,
}: IUseRegistrationFiltersProps | undefined = {}) => {
    const initialValues = useGetInitialValues();

    const submit = useCallback(
        (submitParams: IFiltersSubmitParams<IRegistration>) => {
            const { values } = submitParams;

            return onSubmit?.(values);
        },
        [onSubmit],
    );

    const filtersContextValue = useFilters({
        availableFields,
        initialValues,
        defaultValues,
        onSubmit: submit,
    });

    return filtersContextValue;
};
