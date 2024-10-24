"use client";
import { memo } from "react";
import {
    YMap,
    YMapComponentsProvider,
    YMapDefaultFeaturesLayer,
    YMapDefaultSchemeLayer,
    YMapListener,
    YMapDefaultMarker,
} from "ymap3-components";
import { useMap } from "./hooks/useMap";
import { Text } from "@/ui-kit/Text";
import { useTranslation } from "@/lib/translation/useTranslation";
import { translations } from "./i18n";
import { BottomBar } from "./BottomBar";

const FastForm = () => {
    const { location, onUpdate, handleClick, markerCoordinates } = useMap();
    const t = useTranslation(translations);

    return (
        <div className="flex flex-col gap-8 mb-32">
            <Text variant="display-2">{t("title")}</Text>
            <div className="w-full h-[750px] relative rounded-xl shadow overflow-hidden">
                <YMapComponentsProvider
                    apiKey={process.env.NEXT_PUBLIC_YANDEX_MAP_API_KEY}
                >
                    <YMap location={location}>
                        <YMapDefaultSchemeLayer />
                        <YMapDefaultFeaturesLayer />
                        {markerCoordinates && (
                            <YMapDefaultMarker
                                coordinates={markerCoordinates}
                            />
                        )}
                        <YMapListener
                            onUpdate={onUpdate}
                            onClick={handleClick}
                        />
                    </YMap>
                </YMapComponentsProvider>
                <BottomBar className="absolute left-0 bottom-0" />
            </div>
        </div>
    );
};

const MemoizedFastForm = memo(FastForm);
export { MemoizedFastForm as FastForm };
