"use client";
import { useFakeLoading } from "@/hooks/useFakeLoading";
import { useTranslation } from "@/lib/translation/useTranslation";
import { Button } from "@/ui-kit/Button";
import { Text } from "@/ui-kit/Text";

import { HasRenovationField } from "../fields/renovation/HasRenovationField";
import { RenovationTypeField } from "../fields/renovation/RenovationType";
import { translations } from "./i18n";

interface IRenovationProps {
    handleSubmit: () => void;
    handlePrevStep: () => void;
    isLoading?: boolean;
}

export const Renovation = ({
    isLoading,
    handleSubmit,
    handlePrevStep,
}: IRenovationProps) => {
    const t = useTranslation(translations);
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
                <Text variant="display-1">{t("title_renovation")}</Text>
            </div>
            <div className="flex flex-col gap-6">
                <HasRenovationField />
                <RenovationTypeField />
            </div>

            <Button
                isLoading={isLoading}
                onClick={handleSubmit}
                view="action"
                className="max-w-[300px] min-w-[300px] "
            >
                {t("final")}
            </Button>
        </div>
    );
};
