import { useFiltersContext } from "@/lib/filters/context";
import { useTranslation } from "@/lib/translation/useTranslation";
import { IFilters, IGetPriceResponse } from "@/shared/form/types";
import { Text } from "@/ui-kit/Text";
import { translations } from "./i18n";
import { Button } from "@/ui-kit/Button";

const DEFAULT_HEIGHT = 350;

export const Price = () => {
    const { response } = useFiltersContext<IFilters, IGetPriceResponse>();
    const t = useTranslation(translations);

    const height_real = DEFAULT_HEIGHT;
    const height_market = DEFAULT_HEIGHT * 0.8;

    return (
        <div className="flex flex-col gap-16">
            <Text variant="header-2">{t("title")}</Text>
            <div className="w-full flex gap-12 items-center">
                <div className="flex items-end w-full gap-12">
                    <div
                        style={{ height: height_real }}
                        className="pt-16 pb-6 px-8 basis-1/2 text-center rounded-xl bg-gray-100  transition  flex flex-col gap-4 items-center justify-start "
                    >
                        <Text variant="header-1"> {t("real_price")}:</Text>
                        <Text variant="display-2">
                            {((response?.price ?? 0) / 1000000).toFixed(2)} млн.
                            ₽
                        </Text>
                        <Text variant="body-1" className="mt-auto">
                            {t("real_price_description")}
                        </Text>
                    </div>
                    <div
                        style={{ height: height_market }}
                        className="pt-16 pb-6 px-8 basis-1/2 text-center rounded-xl bg-gray-100 transition  flex flex-col gap-4 items-center justify-start "
                    >
                        <Text variant="header-1"> {t("market_price")}:</Text>
                        <Text variant="display-2">
                            {(
                                ((response?.price ?? 0) * 0.97) /
                                1000000
                            ).toFixed(2)}{" "}
                            млн. ₽
                        </Text>
                        <Text variant="body-1" className="mt-auto">
                            {t("market_price_description")}
                        </Text>
                    </div>
                </div>
                <div className="flex flex-col gap-6 max-w-[560px] w-full">
                    <Text variant="header-2">{t("more")}</Text>
                    <Text variant="body-3">{t("description1")}</Text>
                    <Text variant="body-3">{t("description2")}</Text>
                    <Button className="w-fit" view="flat-info">
                        Подробнее о модели
                    </Button>
                </div>
            </div>
        </div>
    );
};
