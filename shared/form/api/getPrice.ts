import axios from "axios";
import { defaultValuesToServer } from "./consts";
import { IGetPriceDto } from "../types";

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
