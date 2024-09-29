"use client";
import React, { useContext } from "react";
import {
    IFiltersContextValue,
    IFiltersProviderProps,
    IFiltersValues,
    IResponseBase,
} from "./types";

/** Непосредственно React-контекст фильтров. */
export const FiltersContext = React.createContext<IFiltersContextValue | null>(
    null,
);

/** Внутренняя версия хука useFilters, которая не выбрасывает ошибку, если вызвана вне FiltersProvider. */
export const useFiltersContextNullable = <V extends IFiltersValues>() => {
    const context = useContext(FiltersContext);

    return context as IFiltersContextValue<V> | null;
};

/**
 * Хук для получения значения контекста фильтров в компонентах, находящихся внутри FiltersProvider.
 * Если хук будет вызван вне FiltersProvider, будет выброшена ошибка.
 * @returns Значение контекста фильтров.
 */
export const useFiltersContext = <
    V extends IFiltersValues,
    T extends IResponseBase = IResponseBase,
>() => {
    const context = useFiltersContextNullable<V>();

    if (!context) {
        throw new Error(
            "useFiltersContext must be used inside FiltersProvider",
        );
    }

    return context as IFiltersContextValue<V, T>;
};

/**
 * Провайдер контекста фильтров.
 * Значение контекста можно получить с помощью хука useFilters.
 */
export const FiltersProvider = <V extends IFiltersValues>({
    children,
    contextValue,
}: IFiltersProviderProps<V>) => {
    return (
        <FiltersContext.Provider
            value={contextValue as IFiltersContextValue<IFiltersValues>}
        >
            {children}
        </FiltersContext.Provider>
    );
};
