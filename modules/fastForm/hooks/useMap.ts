import { useMap } from "@/hooks/useMap";
import { useField } from "@/lib/filters/hooks/useField";
import { useRegionContext } from "@/lib/region/context";
import { IFilters } from "@/shared/form/types";
import { MOSCOW_COORDINATES, SPB_COORDINATES } from "@/shared/map/consts";

import { useEffect, useMemo } from "react";

export const useFastForm = () => {
    const { region } = useRegionContext();
    const { onChange } = useField<IFilters, "address">("address");
    const defaultCenter = useMemo(() => {
        switch (region) {
            case "Москва":
                return MOSCOW_COORDINATES;
            case "Санкт-Петербург":
                return SPB_COORDINATES;
        }
    }, [region]);

    const { location, markerCoordinates, onUpdate, handleClick } = useMap({
        center: defaultCenter,
        isMultipleMarkers: false,
        shouldRestartMap: Boolean(region),
    });

    useEffect(() => {
        //fetch address
        if (markerCoordinates) {
            onChange("Лабораторный проспект дом 20 корпус 3");
        }
    }, [markerCoordinates, onChange]);

    return { location, onUpdate, handleClick, markerCoordinates };
};
