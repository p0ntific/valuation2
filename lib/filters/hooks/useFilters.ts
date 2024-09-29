"use client";
import { isEqual } from "@/helpers/isEqual";
import { Any, AnyObject } from "@/types";
import { useCallback, useMemo, useState } from "react";
import {
    IFiltersContextValue,
    IFiltersFieldMeta,
    IFiltersValues,
    IResponseBase,
    IUseFiltersProps,
} from "../types";
import { useFieldsMeta } from "./useFieldsMeta";

/**
 * Основной хук для работы с фильтрами.
 * @returns Значение контекста фильтров, которое затем можно передать в FiltersProvider.
 */
export const useFilters = <V extends IFiltersValues, T extends IResponseBase>({
    availableFields,
    defaultValues,
    onSubmit,
    initialValues,
}: IUseFiltersProps<V>): IFiltersContextValue<V, T> => {
    const [values, setValues] = useState(initialValues ?? defaultValues);
    const [response, setResponse] = useState<T | null>(null);

    const setFieldValue = useCallback((name: keyof V, value: V[keyof V]) => {
        setValues((prevValues) => {
            return {
                ...prevValues,
                [name]: value,
            };
        });
    }, []);

    const { fieldsMeta, setFieldMeta, setFieldsMeta } = useFieldsMeta({
        defaultValues,
        initialValues,
    });

    const handleFieldChange = useCallback(
        (name: keyof V, value: V[keyof V]) => {
            setFieldValue(name, value);
            setFieldMeta(name, {
                isTouched: !isEqual(value, defaultValues[name]),
            });
        },
        [defaultValues, setFieldMeta, setFieldValue],
    );

    const handleFieldChangeMeta = useCallback(
        (name: keyof V, meta: Partial<IFiltersFieldMeta>) => {
            setFieldMeta(name, { ...meta, ...fieldsMeta[name] });
        },
        [setFieldMeta, fieldsMeta],
    );

    const handleSubmit = useCallback(() => {
        onSubmit?.({ fieldsMeta, values });
    }, [fieldsMeta, onSubmit, values]);

    const handleFormSubmit = useCallback(
        (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();

            return handleSubmit();
        },
        [handleSubmit],
    );

    const handleReset = useCallback(() => {
        setValues(defaultValues);
        setFieldsMeta((prevFieldsMeta) => {
            return availableFields.reduce(
                (acc, field) => {
                    return {
                        ...acc,
                        [field]: {
                            ...prevFieldsMeta[field],
                            isTouched: false,
                        },
                    };
                },
                {} as typeof prevFieldsMeta,
            );
        });
    }, [availableFields, defaultValues, setFieldsMeta]);

    const handleFormReset = useCallback(
        (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();

            return handleReset();
        },
        [handleReset],
    );

    const contextValue = useMemo(() => {
        return {
            response,
            setResponse,
            defaultValues,
            fieldsMeta,
            handleFieldChange,
            handleFieldChangeMeta,
            handleFormReset,
            handleFormSubmit,
            handleReset,
            handleSubmit,
            values,
        };
    }, [
        response,
        setResponse,
        defaultValues,
        fieldsMeta,
        handleFieldChange,
        handleFieldChangeMeta,
        handleFormReset,
        handleFormSubmit,
        handleReset,
        handleSubmit,
        values,
    ]);

    return contextValue;
};
