// стоит заполнять все поля без ?:
// для лучшей контролируемости

import { IRoomsTotalField } from "./fields/base/RoomsTotalField";
import { IHouseMaterialField } from "./fields/houseInfo/HouseMaterialField";
import { INewFlatField } from "./fields/renovation/NewFlatField";
import { IParkingTypeField } from "./fields/houseInfo/ParkingTypeField";
import { IHasRenovationField } from "./fields/renovation/HasRenovationField";
import { IRenovationTypeField } from "./fields/renovation/RenovationType";
import { LngLat } from "@yandex/ymaps3-types";

export interface IFilters {
    address: string;
    area: string;
    floor: string;
    floors: string;
    roomsTotal: IRoomsTotalField;
    houseMaterial: IHouseMaterialField;
    parkingType: IParkingTypeField;
    newFlat: INewFlatField;
    renovationType: IRenovationTypeField;
    hasRenovation: IHasRenovationField;
}

export type IFiltersKeys = keyof IFilters;

export interface IBaseFieldProps {
    className?: string;
}

export interface IGetPriceDto {
    address: string;
    area: number;
    cnt_rooms: number;
    floor: number;
    floors: number;
    has_lift: 0 | 1;
    house_material: IHouseMaterialField;
    object_type: INewFlatField;
    parking_type: IParkingTypeField;
    repair: string;
    text: string;
}

export interface IInfrustructureItem {
    name: string;
    point: LngLat;
}
export interface IHouseInfo {
    count_entrances: number | null;
    gas: boolean | null;
    hot_water: boolean | null;
    year: number | null;
    price: number;
    latitude: number;
    longitude: number;
}

export interface ISimilarObject extends IGetPriceDto, IHouseInfo {}

export interface IGetPriceResponse {
    price: number;
    house_info: IHouseInfo;
    infrastructure: {
        cafes: {
            count: number;
            items: IInfrustructureItem[];
        };
        cinemas: { count: number; items: IInfrustructureItem[] };
        kindergartens: { count: number; items: IInfrustructureItem[] };
        landmarks: { count: number; items: IInfrustructureItem[] };
        polyclinics: { count: number; items: IInfrustructureItem[] };
        schools: { count: number; items: IInfrustructureItem[] };
        shopping_malls: { count: number; items: IInfrustructureItem[] };
    };
    latitude: number;
    longitude: number;
    similar_objects: ISimilarObject[];
}
