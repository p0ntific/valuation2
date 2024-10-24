import { useUrl } from "@/hooks/useUrl";
import { useFilters } from "@/lib/filters/hooks/useFilters";
import { IFiltersSubmitParams } from "@/lib/filters/types";
import { useCallback } from "react";
import { availableFields, defaultValues } from "../constants";
import { IFilters } from "../../../shared/form/types";
import { useGetInitialValues } from "./useGetInitialValues";

interface IUseFormFiltersProps {
    onSubmit?: (values: IFilters) => void | Promise<void>;
}

export const useFormFilters = ({
    onSubmit,
}: IUseFormFiltersProps | undefined = {}) => {
    const initialValues = useGetInitialValues();
    const { origin, navigate } = useUrl();

    const submit = useCallback(
        (submitParams: IFiltersSubmitParams<IFilters>) => {
            const { values } = submitParams;

            return onSubmit?.(values);
        },
        [navigate, onSubmit, origin],
    );

    const filtersContextValue = useFilters({
        availableFields,
        initialValues,
        defaultValues,
        onSubmit: submit,
    });

    return filtersContextValue;
};
