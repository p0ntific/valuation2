"use client";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useCallback, useEffect, useState } from "react";
import { IRegion } from "./context";

export const useRegionController = () => {
    const { region: regionFromStorage, setRegion: setRegionFromStorage } =
        useLocalStorage();

    const [region, setRegion] = useState<IRegion>("Москва");

    useEffect(() => {
        setRegion(regionFromStorage ?? "Москва");
    }, []);

    const onChange = useCallback((region: IRegion) => {
        setRegionFromStorage(region);
        setRegion(region);
    }, []);

    return { region, onChange };
};
