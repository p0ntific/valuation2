"use client";
import { useMutation } from "@/hooks/useMutation";
import { useUrl } from "@/hooks/useUrl";
import { useFiltersContext } from "@/lib/filters/context";
import { useRegionContext } from "@/lib/region/context";
import { useCallback, useEffect, useMemo, useState } from "react";
import { IGetPriceResponse } from "../result/types";
import { getPrice, IGetPriceDto } from "./api/getPrice";
import { Base } from "./steps/Base";
import { Email } from "./steps/Email";
import { HouseInfo } from "./steps/HouseInfo";
import { Renovation } from "./steps/Renovation";
import { IFilters } from "./types";

const steps = ["base", "email", "houseInfo", "renovation"] as const;

type IStep = (typeof steps)[number];

export const Form = () => {
    const { navigate } = useUrl();
    const { values, setResponse } = useFiltersContext<IFilters>();
    const [currentStep, setCurrentStep] = useState<IStep>("base");
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
    }, [values, region]);

    useEffect(() => {
        if (data && !isLoading) {
            setResponse(data.data);
            navigate("/result");
        }
    }, [data, isLoading, mutate]);

    const handleNextStep = () => {
        if (currentStep === "base") {
            setCurrentStep("email");
        } else if (currentStep === "email") {
            setCurrentStep("houseInfo");
        } else if (currentStep === "houseInfo") {
            setCurrentStep("renovation");
        }
    };

    const handlePrevStep = () => {
        if (currentStep === "email") {
            setCurrentStep("base");
        } else if (currentStep === "houseInfo") {
            setCurrentStep("email");
        } else if (currentStep === "renovation") {
            setCurrentStep("houseInfo");
        }
    };

    const stepProps = { handleNextStep, handlePrevStep };

    const stepComponent = useMemo(() => {
        switch (currentStep) {
            case "base":
                return <Base {...stepProps} />;
            case "email":
                return <Email {...stepProps} />;
            case "houseInfo":
                return <HouseInfo {...stepProps} />;
            case "renovation":
                return (
                    <Renovation
                        isLoading={isLoading}
                        handleSubmit={handleSubmit}
                        {...stepProps}
                    />
                );
            default:
                return null;
        }
    }, [currentStep, stepProps]);
    return <div className="mt-12">{stepComponent}</div>;
};
