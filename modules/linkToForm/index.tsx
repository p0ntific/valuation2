"use client";
import bg from "@/assets/linkToForm.webp";
import { useFakeLoading } from "@/hooks/useFakeLoading";
import { useUrl } from "@/hooks/useUrl";
import { useTranslation } from "@/lib/translation/useTranslation";
import { Button } from "@/ui-kit/Button";
import { Text } from "@/ui-kit/Text";
import Image from "next/image";
import { useCallback } from "react";
import { translations } from "./i18n";

export const LinkToForm = () => {
    const t = useTranslation(translations);
    const { navigate } = useUrl();

    const handleNavigate = useCallback(() => {
        navigate("/form");
    }, [navigate]);

    const { isLoading, delayedFunction } = useFakeLoading(1000, handleNavigate);

    return (
        <div className="mb-16 mt-8 relative">
            <Image className="w-full h-auto rounded-xl" src={bg} alt="фон" />
            <div className="max-w-[450px] text-center absolute absoluteTop text-white bg-blue-400 rounded-xl py-8 gap-6 flex flex-col px-8">
                <Text variant="display-2">{t("title")}</Text>
                <Button
                    isLoading={isLoading}
                    onClick={delayedFunction}
                    view="flat-action"
                >
                    {t("button")}
                </Button>
            </div>
        </div>
    );
};
