"use client";
import { useFakeLoading } from "@/hooks/useFakeLoading";
import { useTranslation } from "@/lib/translation/useTranslation";
import { Button } from "@/ui-kit/Button";
import { Input } from "@/ui-kit/Input";
import { Text } from "@/ui-kit/Text";
import { useState } from "react";
import { translations } from "./i18n";

interface IEmailProps {
    handleNextStep: () => void;
    handlePrevStep: () => void;
}

export const Email = ({ handlePrevStep, handleNextStep }: IEmailProps) => {
    const t = useTranslation(translations);
    const [email, setEmail] = useState("");
    const { isLoading, delayedFunction } = useFakeLoading(400, handleNextStep);

    return (
        <div className="flex flex-col gap-10">
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
                <Text variant="display-1">{t("title_email")}</Text>
            </div>

            <div className="max-w-[600px] min-w-[600px]">
                <Input
                    label="Почта"
                    hint={t("description_email")}
                    value={email}
                    onChange={(value: string) => setEmail(value)}
                />
            </div>
            <div className="flex gap-6 max-w-[640px] ">
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
