"use client";
import { useCallback } from "react";

import { useDebounce } from "@/hooks/useDelay";
import { useFiltersContextNullable } from "../context";
import { IFieldInfo, IFiltersContextValue, IFiltersValues } from "../types";

interface IUseFieldParams<V extends IFiltersValues, N extends keyof V> {
    onChange?: (value?: V[N]) => void;
    /**
     * Передача контекста извне, минуя использование FiltersProvider.
     * Полезно, когда нужно инициализировать контекст и поля фильтров внутри одного и того же компонента.
     */
    externalContextValue?: IFiltersContextValue<V>;
    checkIsError?: (value: V[N]) => boolean;
}

/**
 * Хук для удобной работы с отдельным полем фильтров.
 * Берет значения из контекста (см. FiltersProvider) или извне (см. externalContextValue).
 */
export const useField = <V extends IFiltersValues, N extends keyof V>(
    name: N,
    params: IUseFieldParams<V, N> = {},
): IFieldInfo<V, N> => {
    const { externalContextValue, onChange, checkIsError } = params;
    const internalContextValue = useFiltersContextNullable<V>();

    const contextValue = externalContextValue ?? internalContextValue;

    if (!contextValue) {
        throw new Error(
            "Provide either FiltersProvider or externalContextValue to useField hook",
        );
    }

    const {
        defaultValues,
        fieldsMeta,
        handleFieldChange,
        handleFieldChangeMeta,
        values,
    } = contextValue;

    const handleChange = useCallback(
        (value: V[N]) => {
            handleFieldChange(name, value);
            onChange?.(value);
        },
        [handleFieldChange, name, onChange],
    );

    const setActive = useCallback(
        (value?: boolean) => {
            handleFieldChangeMeta(name, { isActive: value ?? true });
        },
        [handleFieldChangeMeta, name],
    );

    const isError = useDebounce(
        Boolean(
            checkIsError?.(values[name]) &&
                fieldsMeta[name].isTouched &&
                fieldsMeta[name].isActive,
        ),
        2000,
    );

    return {
        isError,
        isActive: fieldsMeta[name].isActive,
        isTouched: fieldsMeta[name].isTouched,
        setActive,
        defaultValue: defaultValues[name],
        meta: fieldsMeta[name],
        onChange: handleChange,
        value: values[name],
    };
};
