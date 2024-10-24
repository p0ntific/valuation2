import { useField } from "@/lib/filters/hooks/useField";

import { useTranslation } from "@/lib/translation/useTranslation";
import { RadioGroup } from "@/ui-kit/RadioGroup";
import { useMemo } from "react";
import { IFilters } from "../../types";
import { translations } from "./i18n";

const HAS_RENOVATION_AVAILABLE_VALUES = ["0", "1", "2"];

export type IHasRenovationField =
    | (typeof HAS_RENOVATION_AVAILABLE_VALUES)[number]
    | undefined;

export const HasRenovationField = () => {
    const { onChange, value, isActive } = useField<IFilters, "hasRenovation">(
        "hasRenovation",
    );

    const t = useTranslation(translations);

    const options = useMemo(
        () =>
            HAS_RENOVATION_AVAILABLE_VALUES.map((el) => {
                return {
                    value: el,
                    content: t(
                        `has_renovation_label_${el}` as keyof (typeof translations)["ru"],
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
            title="Наличие ремонта"
        />
    );
};
