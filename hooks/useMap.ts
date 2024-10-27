import {
    DomEventHandler,
    LngLat,
    MapEventUpdateHandler,
    YMapLocationRequest,
} from "@yandex/ymaps3-types";
import { useCallback, useEffect, useMemo, useState } from "react";

interface IUseMapBase {
    shouldRestartMap?: boolean;
    zoom?: number;
    center: LngLat;
}

interface IUseMapMultiple extends IUseMapBase {
    marker?: LngLat[];
    isMultipleMarkers: true;
}

interface IUseMapSingle extends IUseMapBase {
    marker?: LngLat;
    isMultipleMarkers?: false | undefined;
}

type IUseMap = IUseMapMultiple | IUseMapSingle;

const DEFAULT_ZOOM = 13;

interface UseMapResultBase {
    location: YMapLocationRequest;
    setLocation: React.Dispatch<React.SetStateAction<YMapLocationRequest>>;
    handleClick: DomEventHandler;
    onUpdate: MapEventUpdateHandler;
}

interface UseMapResultMultiple extends UseMapResultBase {
    markerCoordinates: LngLat[];
}

interface UseMapResultSingle extends UseMapResultBase {
    markerCoordinates: LngLat | null;
}

// Function overload declarations
export function useMap(options: IUseMapMultiple): UseMapResultMultiple;
export function useMap(options: IUseMapSingle): UseMapResultSingle;

// Function implementation
export function useMap(
    options: IUseMap,
): UseMapResultMultiple | UseMapResultSingle {
    const {
        center,
        shouldRestartMap = false,
        marker,
        zoom = DEFAULT_ZOOM,
        isMultipleMarkers = false,
    } = options;

    // Separate state variables for single and multiple markers
    const [markers, setMarkers] = useState<LngLat[]>([]);

    const [markerCoordinate, setMarkerCoordinate] = useState<LngLat | null>(
        null,
    );

    useEffect(() => {
        if (isMultipleMarkers) {
            setMarkers(marker as LngLat[]);
        } else {
            setMarkerCoordinate(marker as LngLat);
        }
    }, [marker, isMultipleMarkers]);

    const defaultLocation: YMapLocationRequest = useMemo(
        () => ({
            zoom: zoom,
            duration: 200,
            easing: "ease-in-out",
            center,
        }),
        [center, zoom],
    );

    const [location, setLocation] = useState(defaultLocation);

    const handleClick: DomEventHandler = useCallback(
        (_, event) => {
            const coordinates: LngLat = event.coordinates;

            if (isMultipleMarkers) {
                setMarkers((prevMarkers) => [...prevMarkers, coordinates]);
            } else {
                setMarkerCoordinate(coordinates);
            }
        },
        [isMultipleMarkers],
    );

    const onUpdate: MapEventUpdateHandler = useCallback(
        ({ location, mapInAction }) => {
            if (!mapInAction) {
                setLocation({
                    center: location.center,
                    zoom: location.zoom,
                });
            }
        },
        [],
    );

    useEffect(() => {
        if (shouldRestartMap) {
            setLocation(defaultLocation);
            if (isMultipleMarkers) {
                setMarkers((marker as LngLat[]) ?? []);
            } else {
                setMarkerCoordinate((marker as LngLat) ?? null);
            }
        }
    }, [defaultLocation, shouldRestartMap, marker, isMultipleMarkers]);

    // Return the appropriate marker coordinates based on isMultipleMarkers
    if (isMultipleMarkers) {
        return {
            markerCoordinates: markers,
            location,
            setLocation,
            handleClick,
            onUpdate,
        } as UseMapResultMultiple;
    } else {
        return {
            markerCoordinates: markerCoordinate,
            location,
            setLocation,
            handleClick,
            onUpdate,
        } as UseMapResultSingle;
    }
}
