import { useMutation } from "@/hooks/useMutation";
import { useUrl } from "@/hooks/useUrl";
import { useFiltersContext } from "@/lib/filters/context";
import { useRegionContext } from "@/lib/region/context";
import { useCallback, useEffect } from "react";
import { IGetPriceDto, IGetPriceResponse } from "../types";
import { getPrice } from "../api/getPrice";
import { IFilters } from "../types";

/**
 * Отправлять можно частично заполненные данные, остальное подставится в апи(../api/getPrice),
 * достаточно лишь базовых 4 филдов
 */
export const useSubmit = () => {
    const { navigate } = useUrl();
    const { values, setResponse, fieldsMeta } = useFiltersContext<IFilters>();
    const { region } = useRegionContext();

    const { mutate, isLoading, data } = useMutation<{
        data: IGetPriceResponse;
    }>(getPrice);

    const canSubmit =
        fieldsMeta.address.isTouched &&
        fieldsMeta.area.isTouched &&
        fieldsMeta.floor.isTouched &&
        fieldsMeta.roomsTotal.isTouched;

    useEffect(() => {
        if (data && !isLoading) {
            setResponse(data.data);
            navigate("/result");
        }
    }, [data, isLoading, mutate, navigate, setResponse]);

    const handleSubmit = useCallback(() => {
        const body: Partial<IGetPriceDto> = {
            address: region + " " + values.address,
            area: Number(values.area),
            cnt_rooms:
                values.roomsTotal === "5+" ? 5 : Number(values.roomsTotal),
            floor: Number(values.floor),
        };

        if (values.floors) {
            body.floors = Number(values.floors);
        }
        if (values.houseMaterial) {
            body.house_material = values.houseMaterial;
        }
        if (values.newFlat) {
            body.object_type = values.newFlat;
        }
        if (values.hasRenovation && values.renovationType) {
            body.repair =
                Number(values.renovationType) - 1 + ";" + values.hasRenovation;
        }

        mutate(body);
    }, [
        region,
        values.address,
        values.houseMaterial,
        values.area,
        values.roomsTotal,
        values.floor,
        values.floors,
        values.newFlat,
        values.hasRenovation,
        values.renovationType,
        mutate,
    ]);

    return {
        handleSubmit,
        canSubmit,
        isLoading,
    };
};
