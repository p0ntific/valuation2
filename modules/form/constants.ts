import { IFilters } from "../../shared/form/types";

export const defaultValues: IFilters = {
    address: "",
    area: "",
    roomsTotal: undefined,
    floor: "",
    floors: "",
    parkingType: undefined,
    houseMaterial: undefined,
    newFlat: undefined,
    renovationType: undefined,
    hasRenovation: undefined,
};

export const availableFields = Object.keys(defaultValues) as (keyof IFilters)[];
