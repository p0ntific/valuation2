"use client";
import { createContext, useContext } from "react";

export const AVAILABLE_REGIONS = ["Москва", "Санкт-Петербург"] as const;

export type IRegion = (typeof AVAILABLE_REGIONS)[number];

export interface IRegionContext {
    region: IRegion;
    onChange: (region: IRegion) => void;
}

export const RegionContext = createContext<IRegionContext | null>(null);

export const useRegionNullable = () => {
    const context = useContext(RegionContext);
    return context as IRegionContext | null;
};

export const useRegionContext = () => {
    const context = useContext(RegionContext);

    if (!context) {
        throw new Error("useRegionContext must be used inside provider");
    }

    return context as IRegionContext;
};
