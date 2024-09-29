import { defaultValues } from "../constants";
import { IFilters } from "../types";

export const useGetInitialValues = () => {
    return defaultValues as IFilters;
};
