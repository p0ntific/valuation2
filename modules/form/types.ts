// стоит заполнять все поля без ?:
// для лучшей контролируемости

import { IRoomsTotalField } from "./fields/base/RoomsTotalField";
import { IHouseMaterialField } from "./fields/houseInfo/HouseMaterialField";
import { INewFlatField } from "./fields/houseInfo/NewFlatField";
import { IParkingTypeField } from "./fields/houseInfo/ParkingTypeField";
import { IHasRenovationField } from "./fields/renovation/HasRenovationField";
import { IRenovationTypeField } from "./fields/renovation/RenovationType";

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
