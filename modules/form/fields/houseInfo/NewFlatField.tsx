import { useField } from "@/lib/filters/hooks/useField";

import { useTranslation } from "@/lib/translation/useTranslation";
import { RadioGroup } from "@/ui-kit/RadioGroup";
import { useMemo } from "react";
import { IFilters } from "../../types";
import { translations } from "./i18n";

const NEW_FLAT_AVAILABLE_VALUES = ["1", "2"] as const;

export type INewFlatField =
    | (typeof NEW_FLAT_AVAILABLE_VALUES)[number]
    | undefined;

export const NewFlatField = () => {
    const { onChange, value, isActive } = useField<IFilters, "newFlat">(
        "newFlat",
    );

    const t = useTranslation(translations);

    const options = useMemo(
        () =>
            NEW_FLAT_AVAILABLE_VALUES.map((el) => {
                return {
                    value: el,
                    content: t(
                        `newFlat_label_${el}` as keyof (typeof translations)["ru"],
                    ),
                };
            }),
        [],
    );

    if (!isActive) {
        return null;
    }

    return (
        <RadioGroup
            options={options}
            onChange={onChange}
            value={value}
            title="Тип дома"
        />
    );
};
