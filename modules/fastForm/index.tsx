"use client";
import { memo } from "react";
import {
    YMap,
    YMapDefaultFeaturesLayer,
    YMapDefaultSchemeLayer,
    YMapListener,
    YMapDefaultMarker,
} from "ymap3-components";
import { Text } from "@/ui-kit/Text";
import { useTranslation } from "@/lib/translation/useTranslation";
import { translations } from "./i18n";
import { BottomBar } from "./BottomBar";
import { useSubmit } from "@/shared/form/hooks/useSubmit";
import { useFastForm } from "./hooks/useMap";

const FastForm = () => {
    const { location, onUpdate, handleClick, markerCoordinates } =
        useFastForm();
    const t = useTranslation(translations);
    const submit = useSubmit();

    return (
        <div className="flex flex-col gap-8 mb-32">
            <Text variant="display-2">{t("title")}</Text>
            <div className="w-full h-[750px] relative rounded-xl shadow overflow-hidden">
                <YMap location={location}>
                    <YMapDefaultSchemeLayer />
                    <YMapDefaultFeaturesLayer />
                    {markerCoordinates && (
                        <YMapDefaultMarker coordinates={markerCoordinates} />
                    )}
                    <YMapListener onUpdate={onUpdate} onClick={handleClick} />
                </YMap>
                <BottomBar {...submit} className="absolute left-0 bottom-0" />
            </div>
        </div>
    );
};

const MemoizedFastForm = memo(FastForm);
export { MemoizedFastForm as FastForm };
