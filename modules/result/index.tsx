"use client";
import { useFiltersContext } from "@/lib/filters/context";
import { useTranslation } from "@/lib/translation/useTranslation";
import { Text } from "@/ui-kit/Text";
import { IFilters } from "../form/types";
import { translations } from "./i18n";
import { IGetPriceResponse } from "./types";

export const Result = () => {
    const t = useTranslation(translations);
    const { response } = useFiltersContext<IFilters, IGetPriceResponse>();
    return (
        <div className="flex flex-col gap-16 mt-16">
            <Text variant="display-1">{t("title")}</Text>
            <div className="w-full grid grid-cols-2 gap-16">
                <div className="py-16 px-8 rounded-xl bg-blue-50 border-blue-400 border flex flex-col items-center justify-center text-center">
                    <Text variant="display-1" className="flex flex-col gap-4">
                        <span>{t("real_price")}: </span>
                        <span>
                            {((response?.price ?? 0) / 1000000).toFixed(2)} млн.
                            ₽
                        </span>
                    </Text>
                </div>
                <div className="py-16 px-8 rounded-xl bg-blue-50 border-blue-400 border flex flex-col items-center justify-center text-center">
                    <Text variant="display-1" className="flex flex-col gap-4">
                        <span>{t("market_price")}:</span>
                        <span>
                            {(
                                ((response?.price ?? 0) * 0.97) /
                                1000000
                            ).toFixed(2)}{" "}
                            млн. ₽
                        </span>
                    </Text>
                </div>
            </div>
        </div>
    );
};
