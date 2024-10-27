import { useMap } from "@/hooks/useMap";
import { useFiltersContext } from "@/lib/filters/context";
import { IFilters, IGetPriceResponse } from "@/shared/form/types";
import { LngLat } from "@yandex/ymaps3-types";
import { useCallback, useMemo, useState } from "react";

export const INFRASTRUCTURE_VALUES = [
    "HOUSE",
    "CAFES",
    "KINDERGARTENS",
    "CINEMAS",
    "LANDMARKS",
    "POLYCLINICS",
    "SCHOOLS",
    "SHOPPING_MALLS",
] as const;

type IInfrastructure = (typeof INFRASTRUCTURE_VALUES)[number];

// с бэка приходят не в том порядке
const swapLatLon = (point: LngLat): LngLat => [point[1], point[0]];

export const useGetInfrastructure = () => {
    const { response } = useFiltersContext<IFilters, IGetPriceResponse>();

    const [currentInfrastructure, setCurrentInfrastructure] =
        useState<IInfrastructure>("HOUSE");

    const infrastructure: { [k in IInfrastructure]: LngLat[] } = useMemo(() => {
        return {
            HOUSE: response
                ? [[response.longitude ?? 0, response.latitude ?? 0]]
                : [],
            CAFES: response
                ? response.infrastructure.cafes.items.map((item) =>
                      swapLatLon(item.point),
                  )
                : [],
            KINDERGARTENS: response
                ? response.infrastructure.kindergartens.items.map((item) =>
                      swapLatLon(item.point),
                  )
                : [],
            CINEMAS: response
                ? response.infrastructure.cinemas.items.map((item) =>
                      swapLatLon(item.point),
                  )
                : [],
            LANDMARKS: response
                ? response.infrastructure.landmarks.items.map((item) =>
                      swapLatLon(item.point),
                  )
                : [],
            POLYCLINICS: response
                ? response.infrastructure.polyclinics.items.map((item) =>
                      swapLatLon(item.point),
                  )
                : [],
            SCHOOLS: response
                ? response.infrastructure.schools.items.map((item) =>
                      swapLatLon(item.point),
                  )
                : [],
            SHOPPING_MALLS: response
                ? response.infrastructure.shopping_malls.items.map((item) =>
                      swapLatLon(item.point),
                  )
                : [],
        };
    }, [response]);

    const intrastructureColor = useMemo(() => {
        switch (currentInfrastructure) {
            case "HOUSE":
                return "#ef4444";
            case "CAFES":
                return "#f97316";
            case "KINDERGARTENS":
                return "#facc15";
            case "CINEMAS":
                return "#a3e635";
            case "LANDMARKS":
                return "#4ade80";
            case "POLYCLINICS":
                return "#2dd4bf";
            case "SCHOOLS":
                return "#38bdf8";
            case "SHOPPING_MALLS":
                return "#c084fc";
        }
    }, [currentInfrastructure]);
    const { location, markerCoordinates, onUpdate } = useMap({
        isMultipleMarkers: true,
        center: infrastructure[currentInfrastructure][0] ?? [0, 0],
        zoom: 15,
        marker: infrastructure[currentInfrastructure] ?? [],
    });

    const handleInfrastructureChange = useCallback(
        (infrastructure?: IInfrastructure) => {
            setCurrentInfrastructure(infrastructure ?? "HOUSE");
        },
        [],
    );

    const infrastructureOptions = useMemo(() => {
        return INFRASTRUCTURE_VALUES.map((value) => {
            let content: string = "Дом";
            switch (value) {
                case "HOUSE":
                    content = "Дом";
                    break;
                case "CAFES":
                    content = "Кафе";
                    break;
                case "KINDERGARTENS":
                    content = "Детские сады";
                    break;
                case "CINEMAS":
                    content = "Кинотеатры";
                    break;
                case "LANDMARKS":
                    content = "Здания";
                    break;
                case "POLYCLINICS":
                    content = "Поликлиники";
                    break;
                case "SCHOOLS":
                    content = "Школы";
                    break;
                case "SHOPPING_MALLS":
                    content = "Магазины";
                    break;
                default:
                    return value;
            }
            return {
                value,
                content,
            };
        });
    }, []);

    return {
        location,
        markerCoordinates,
        onUpdate,
        currentInfrastructure,
        handleInfrastructureChange,
        intrastructureColor,
        infrastructureOptions,
    };
};
