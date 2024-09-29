"use client";
import { useCallback, useState } from "react";

import { isEqual } from "@/helpers/isEqual";
import { IFiltersFieldMeta, IFiltersValues, IUseFiltersProps } from "../types";

type IUseFieldsMetaProps<V extends IFiltersValues> = Pick<
    IUseFiltersProps<V>,
    "initialValues" | "defaultValues"
>;

/**
 * Внутренний хук, инкапсулирующий часть useFilters, связанную с мета-данными конкретных полей фильтров.
 */
export const useFieldsMeta = <V extends IFiltersValues>({
    defaultValues,
    initialValues,
}: IUseFieldsMetaProps<V>) => {
    const getInitialFieldsMeta = useCallback(() => {
        const fieldsMeta = Object.keys(defaultValues).reduce((acc, field) => {
            return {
                ...acc,
                [field]: {
                    isTouched: !isEqual(
                        initialValues?.[field],
                        defaultValues[field],
                    ),
                    isActive: true,
                },
            };
        }, {}) as Record<keyof V, IFiltersFieldMeta>;

        return fieldsMeta;
    }, [defaultValues, initialValues]);

    const [fieldsMeta, setFieldsMeta] = useState(getInitialFieldsMeta);

    const setFieldMeta = useCallback(
        (name: keyof V, meta: Partial<IFiltersFieldMeta>) => {
            setFieldsMeta((prevFieldsMeta) => {
                return {
                    ...prevFieldsMeta,
                    [name]: {
                        ...prevFieldsMeta[name],
                        ...meta,
                    },
                };
            });
        },
        [],
    );

    return { fieldsMeta, setFieldMeta, setFieldsMeta };
};
