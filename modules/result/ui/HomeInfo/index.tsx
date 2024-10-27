import { useTranslation } from "@/lib/translation/useTranslation";
import { translations } from "./i18n";
import { useFiltersContext } from "@/lib/filters/context";
import { IFilters, IGetPriceResponse } from "@/shared/form/types";
import { Text } from "@/ui-kit/Text";
import { ReactNode } from "react";
import { Any } from "@/types";
import {
    YMap,
    YMapDefaultFeaturesLayer,
    YMapDefaultMarker,
    YMapDefaultSchemeLayer,
    YMapListener,
} from "ymap3-components";
import { useGetInfrastructure } from "./hooks/useGetInfrastructure";
import { RadioGroup } from "@/ui-kit/RadioGroup";

const HomeInfoChip = ({
    text,
    icon,
    value,
}: {
    text: string;
    icon: ReactNode;
    value: Any;
}) => {
    return (
        <div className="flex gap-2 items-center">
            <span className="py-2 px-6 rounded-full bg-gray-50 flex gap-2 items-center">
                {icon}
                <Text variant="subheader-2">{text}: </Text>
            </span>
            <Text variant="body-3" className="text-gray-500">
                {value ?? "информация отсутствует"}
            </Text>
        </div>
    );
};

export const HomeInfo = () => {
    const { response } = useFiltersContext<IFilters, IGetPriceResponse>();
    const t = useTranslation(translations);
    const { count_entrances, gas, hot_water, year } =
        response?.house_info ?? {};

    const {
        location,
        markerCoordinates,
        onUpdate,
        infrastructureOptions,
        currentInfrastructure,
        handleInfrastructureChange,
        intrastructureColor,
    } = useGetInfrastructure();

    return (
        <div className="flex flex-col gap-12">
            <Text variant="header-2">{t("title")}</Text>
            <div className="flex gap-12 w-full">
                <div className="w-full h-[500px] rounded-xl overflow-hidden">
                    <YMap location={location}>
                        <YMapDefaultSchemeLayer />
                        <YMapDefaultFeaturesLayer />
                        {markerCoordinates.map((coordinates, index) => {
                            console.log(coordinates, index);
                            return (
                                <YMapDefaultMarker
                                    key={coordinates.join(",")}
                                    coordinates={coordinates}
                                    color={intrastructureColor}
                                />
                            );
                        })}
                        <YMapListener onUpdate={onUpdate} />
                    </YMap>
                </div>
                <div className="flex flex-col gap-12 min-w-[560px]">
                    <div className="flex flex-col gap-6">
                        <Text variant="subheader-3">
                            {t("infrastructureTitle")}
                        </Text>
                        <RadioGroup
                            options={infrastructureOptions}
                            onChange={handleInfrastructureChange}
                            value={currentInfrastructure}
                        />
                    </div>
                    <div className="flex flex-col gap-6">
                        <Text variant="subheader-3">{t("about")}</Text>
                        <HomeInfoChip
                            text={t("count_entrances")}
                            value={count_entrances}
                            icon={
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
                                        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                                    />
                                </svg>
                            }
                        />

                        <HomeInfoChip
                            text={t("gas")}
                            value={gas ? "есть" : "отсутствует"}
                            icon={
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
                                        d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
                                    />
                                </svg>
                            }
                        />
                        <HomeInfoChip
                            text={t("year")}
                            value={year}
                            icon={
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
                                        d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z"
                                    />
                                </svg>
                            }
                        />
                        <HomeInfoChip
                            text={t("hot_water")}
                            value={hot_water ? "есть" : "отсутствует"}
                            icon={
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
                                        d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                                    />
                                </svg>
                            }
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
