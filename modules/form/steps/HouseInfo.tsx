"use client";
import { useTranslation } from "@/lib/translation/useTranslation";
import { Text } from "@/ui-kit/Text";

import { translations } from "./i18n";
import { NextStepButton } from "../NextStepButton";
import { HouseMaterialField } from "@/shared/form/fields/houseInfo/HouseMaterialField";
import { FloorsField } from "@/shared/form/fields/houseInfo/FloorsField";
import { ParkingTypeField } from "@/shared/form/fields/houseInfo/ParkingTypeField";

export const HouseInfo = () => {
    const t = useTranslation(translations);

    return (
        <div className="flex gap-12">
            <div className="flex flex-col gap-10 w-1/2">
                <Text variant="display-1">{t("title_houseInfo")}</Text>
                <div className="flex flex-col gap-6">
                    <FloorsField />
                    <HouseMaterialField />
                    <ParkingTypeField />
                </div>
            </div>
            <NextStepButton className="w-1/2" />
        </div>
    );
};
