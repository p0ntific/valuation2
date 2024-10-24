import { useRegionContext } from "@/lib/region/context";
import { MOSCOW_COORDINATES, SPB_COORDINATES } from "@/shared/map/consts";
import {
    DomEventHandler,
    LngLat,
    YMapLocationRequest,
} from "@yandex/ymaps3-types";
import { useCallback, useEffect, useMemo, useState } from "react";

const DEFAULT_ZOOM = 13;

export const useMap = () => {
    const { region } = useRegionContext();
    const [markerCoordinates, setMarkerCoordinates] = useState<LngLat | null>(
        null,
    );

    const defaultCenter = useMemo(() => {
        switch (region) {
            case "Москва":
                return MOSCOW_COORDINATES;
            case "Санкт-Петербург":
                return SPB_COORDINATES;
        }
    }, [region]);

    const defaultLocation: YMapLocationRequest = {
        zoom: DEFAULT_ZOOM,
        duration: 200,
        easing: "ease-in-out",
        center: defaultCenter,
    };

    const [location, setLocation] = useState(defaultLocation);

    const handleClick: DomEventHandler = useCallback((_, event) => {
        setMarkerCoordinates(event.coordinates);
    }, []);

    const onUpdate = useCallback(({ location, mapInAction }: any) => {
        if (!mapInAction) {
            setLocation({
                center: location.center,
                zoom: location.zoom,
            });
        }
    }, []);

    useEffect(() => {
        setLocation(defaultLocation);
        setMarkerCoordinates(null);
    }, [region]);

    const geocodedAddress = useMemo(() => {
        return "Лабораторный проспект дом 20 корпус 3";
    }, [markerCoordinates]);

    return { location, onUpdate, handleClick, markerCoordinates };
};
