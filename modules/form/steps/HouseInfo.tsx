"use client";
import { useFakeLoading } from "@/hooks/useFakeLoading";
import { useTranslation } from "@/lib/translation/useTranslation";
import { Button } from "@/ui-kit/Button";
import { Text } from "@/ui-kit/Text";

import { FloorsField } from "../fields/houseInfo/FloorsField";
import { HouseMaterialField } from "../fields/houseInfo/HouseMaterialField";
import { NewFlatField } from "../fields/houseInfo/NewFlatField";
import { ParkingTypeField } from "../fields/houseInfo/ParkingTypeField";
import { translations } from "./i18n";

interface IHouseInfoProps {
    handleNextStep: () => void;
    handlePrevStep: () => void;
}

export const HouseInfo = ({
    handleNextStep,
    handlePrevStep,
}: IHouseInfoProps) => {
    const t = useTranslation(translations);

    const { isLoading, delayedFunction } = useFakeLoading(400, handleNextStep);

    return (
        <div className="flex flex-col gap-10 mb-20">
            <div className="flex items-center gap-4">
                <button onClick={handlePrevStep}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                        />
                    </svg>
                </button>
                <Text variant="display-1">{t("title_houseInfo")}</Text>
            </div>
            <div className="flex flex-col gap-6">
                <HouseMaterialField />
                <FloorsField />
                <ParkingTypeField />
                <NewFlatField />
            </div>
            <div className="flex gap-6 max-w-[640px]">
                <Button
                    onClick={handleNextStep}
                    className="max-w-[300px] min-w-[300px] mx-auto"
                >
                    {t("skip")}
                </Button>
                <Button
                    isLoading={isLoading}
                    onClick={delayedFunction}
                    view="action"
                    className="max-w-[300px] min-w-[300px] mx-auto"
                >
                    {t("nextStep")}
                </Button>
            </div>
        </div>
    );
};
