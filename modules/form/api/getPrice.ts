import axios from "axios";
import { defaultValuesToServer } from "../constants";
import { IHouseMaterialField } from "../fields/houseInfo/HouseMaterialField";
import { INewFlatField } from "../fields/houseInfo/NewFlatField";
import { IParkingTypeField } from "../fields/houseInfo/ParkingTypeField";

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

export const getPrice = async (body: Partial<IGetPriceDto>) => {
    const result = await axios.post(
        process.env.NEXT_PUBLIC_API_URL + "estate/price/",
        {
            ...defaultValuesToServer,
            ...body,
        },
        {
            headers: {
                Authorization: "Token " + localStorage.getItem("token"),
            },
        },
    );
    return result;
};
