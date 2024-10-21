"use client";
import { useMutation } from "@/hooks/useMutation";
import { useUrl } from "@/hooks/useUrl";
import { useFiltersContext } from "@/lib/filters/context";
import { useRegionContext } from "@/lib/region/context";
import { useCallback, useEffect, useMemo } from "react";
import { IGetPriceResponse } from "../result/types";
import { getPrice, IGetPriceDto } from "./api/getPrice";
import { Base } from "./steps/Base";
import { HouseInfo } from "./steps/HouseInfo";
import { Renovation } from "./steps/Renovation";
import { IFilters } from "./types";
import { useFormStepContext } from "@/lib/formStep/context";
import { Header } from "./Header";

export const Form = () => {
    const { navigate } = useUrl();
    const { values, setResponse } = useFiltersContext<IFilters>();
    const { step } = useFormStepContext();
    const { region } = useRegionContext();
    const { mutate, isLoading, data } = useMutation<{
        data: IGetPriceResponse;
    }>(getPrice);

    const handleSubmit = useCallback(() => {
        const body: Partial<IGetPriceDto> = {
            address: region + " " + values.address,
            house_material: values.houseMaterial,
            area: Number(values.area),
            cnt_rooms:
                values.roomsTotal === "5+" ? 5 : Number(values.roomsTotal),
            floor: Number(values.floor),
        };

        if (values.floors) {
            body.floors = Number(values.floors);
        }
        if (values.newFlat) {
            body.object_type = values.newFlat;
        }
        if (values.hasRenovation && values.renovationType) {
            body.repair = values.renovationType + ";" + values.hasRenovation;
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

    useEffect(() => {
        if (data && !isLoading) {
            setResponse(data.data);
            navigate("/result");
        }
    }, [data, isLoading, mutate, navigate, setResponse]);

    const stepComponent = useMemo(() => {
        switch (step) {
            case "BASE":
                return <Base />;
            case "HOUSE_INFO":
                return <HouseInfo />;
            case "RENOVATION":
                return (
                    <Renovation
                        isLoading={isLoading}
                        handleSubmit={handleSubmit}
                    />
                );
            default:
                return null;
        }
    }, [handleSubmit, isLoading, step]);

    return (
        <div className="w-[1000px] mx-auto flex flex-col gap-16 mt-32">
            <Header />
            {stepComponent}
        </div>
    );
};
