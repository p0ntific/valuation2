import { useMap } from "@/hooks/useMap";
import { ISimilarObject } from "@/shared/form/types";
import { Text } from "@/ui-kit/Text";
import { memo } from "react";
import {
    YMap,
    YMapDefaultMarker,
    YMapDefaultFeaturesLayer,
    YMapDefaultSchemeLayer,
} from "ymap3-components";

const SimilarObject = ({
    address,
    area,
    latitude,
    longitude,
    price,
}: ISimilarObject) => {
    const { markerCoordinates, location } = useMap({
        center: [longitude, latitude],
        marker: [longitude, latitude],
    });

    return (
        <div className="bg-gray-50 rounded-xl flex flex-col overflow-hidden">
            <div className="w-full h-[200px] ">
                <YMap location={location}>
                    <YMapDefaultSchemeLayer />
                    <YMapDefaultFeaturesLayer />
                    {markerCoordinates && (
                        <YMapDefaultMarker coordinates={markerCoordinates} />
                    )}
                </YMap>
            </div>
            <div className="px-4 py-4 flex flex-col gap-4">
                <Text variant="subheader-2" className="line-clamp-2">
                    {address}
                </Text>
                <Text variant="subheader-1">
                    Цена: {price / 1000000} млн. ₽
                </Text>
            </div>
        </div>
    );
};

const MemoizedSimilarObject = memo(SimilarObject);
export { MemoizedSimilarObject as SimilarObject };
