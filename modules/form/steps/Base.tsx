"use client";
import { useTranslation } from "@/lib/translation/useTranslation";
import { Text } from "@/ui-kit/Text";
import { translations } from "./i18n";
import { NextStepButton } from "../NextStepButton";
import { AddressField } from "@/shared/form/fields/base/AddressField";
import { AreaField } from "@/shared/form/fields/base/AreaField";
import { FloorField } from "@/shared/form/fields/base/FloorField";
import { RoomsTotalField } from "@/shared/form/fields/base/RoomsTotalField";

export const Base = () => {
    const t = useTranslation(translations);

    return (
        <div className="flex gap-12 w-full">
            <div className="w-1/2 flex flex-col gap-10">
                <Text variant="display-1">{t("title_base")}</Text>
                <div className="flex flex-col gap-6">
                    <AddressField />
                    <div className="flex gap-4 w-full">
                        <AreaField />
                        <FloorField />
                    </div>
                    <RoomsTotalField />
                </div>
            </div>
            <NextStepButton className="w-1/2" />
        </div>
    );
};
