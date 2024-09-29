import { useField } from "@/lib/filters/hooks/useField";

import { useTranslation } from "@/lib/translation/useTranslation";
import { RadioGroup } from "@/ui-kit/RadioGroup";
import { useMemo } from "react";
import { IFilters } from "../../types";
import { translations } from "./i18n";

const HOUSE_MATERIAL_AVAILABLE_VALUES = [
    "brc",
    "blc",
    "mnl",
    "pnl",
    "wdn",
    "stl",
    "brm",
] as const;

export type IHouseMaterialField =
    | (typeof HOUSE_MATERIAL_AVAILABLE_VALUES)[number]
    | undefined;

export const HouseMaterialField = () => {
    const { onChange, value, isActive } = useField<IFilters, "houseMaterial">(
        "houseMaterial",
    );

    const t = useTranslation(translations);

    const options = useMemo(
        () =>
            HOUSE_MATERIAL_AVAILABLE_VALUES.map((el) => {
                return {
                    value: el,
                    content: t(
                        `houseMaterial_label_${el}` as keyof (typeof translations)["ru"],
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
            title="Материал дома"
        />
    );
};
