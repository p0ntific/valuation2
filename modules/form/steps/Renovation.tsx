"use client";
import { useTranslation } from "@/lib/translation/useTranslation";
import { Text } from "@/ui-kit/Text";
import { translations } from "./i18n";
import { NextStepButton } from "../NextStepButton";
import { NewFlatField } from "@/shared/form/fields/renovation/NewFlatField";
import { HasRenovationField } from "@/shared/form/fields/renovation/HasRenovationField";
import { RenovationTypeField } from "@/shared/form/fields/renovation/RenovationType";

interface IRenovationProps {
    handleSubmit: () => void;
    isLoading?: boolean;
}

export const Renovation = (props: IRenovationProps) => {
    const t = useTranslation(translations);

    return (
        <div className="flex gap-12">
            <div className="flex flex-col gap-10 w-1/2">
                <Text variant="display-1">{t("title_renovation")}</Text>

                <div className="flex flex-col gap-6">
                    <NewFlatField />
                    <HasRenovationField />
                    <RenovationTypeField />
                </div>
            </div>
            <NextStepButton {...props} className="w-1/2" />
        </div>
    );
};
