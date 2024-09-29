"use client";
import { useFakeLoading } from "@/hooks/useFakeLoading";
import { useTranslation } from "@/lib/translation/useTranslation";
import { Button } from "@/ui-kit/Button";
import { Text } from "@/ui-kit/Text";
import { AddressField } from "../fields/base/AddressField";
import { AreaField } from "../fields/base/AreaField";
import { FloorField } from "../fields/base/FloorField";
import { RoomsTotalField } from "../fields/base/RoomsTotalField";
import { translations } from "./i18n";

interface IBaseProps {
    handleNextStep: () => void;
    handlePrevStep: () => void;
}

export const Base = ({ handleNextStep }: IBaseProps) => {
    const t = useTranslation(translations);

    const { isLoading, delayedFunction } = useFakeLoading(400, handleNextStep);

    return (
        <div className="flex flex-col gap-10">
            <Text variant="display-1">{t("title_base")}</Text>
            <div className="flex flex-col gap-6">
                <AddressField />
                <div className="flex gap-6">
                    <AreaField />
                    <FloorField />
                </div>
                <RoomsTotalField />
            </div>
            <Button
                isLoading={isLoading}
                onClick={delayedFunction}
                view="action"
                className="max-w-[300px] min-w-[300px]"
            >
                {t("nextStep")}
            </Button>
        </div>
    );
};
