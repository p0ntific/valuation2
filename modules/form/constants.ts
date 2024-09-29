import { IGetPriceDto } from "./api/getPrice";
import { IFilters } from "./types";

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

export const defaultValuesToServer: IGetPriceDto = {
    address: "Санкт-петербург, кондратьевский проспект дом 12 ",
    area: 0,
    cnt_rooms: 1,
    floor: 1,
    floors: 1,
    has_lift: 1,
    house_material: "brc",
    object_type: "1",
    parking_type: "0",
    repair: "0;0",
    text: "text",
};
