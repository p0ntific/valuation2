import { defaultValues } from "../constants";
import { IFilters } from "../../../shared/form/types";

export const useGetInitialValues = () => {
    return defaultValues as IFilters;
};
