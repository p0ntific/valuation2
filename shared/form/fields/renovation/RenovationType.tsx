import { useField } from "@/lib/filters/hooks/useField";

import { useFiltersContext } from "@/lib/filters/context";
import { useTranslation } from "@/lib/translation/useTranslation";
import { RadioGroup } from "@/ui-kit/RadioGroup";
import { useMemo } from "react";
import { IFilters } from "../../types";
import { translations } from "./i18n";

const RENOVATION_TYPE_AVAILABLE_VALUES = ["1", "2", "3", "4"] as const;

export type IRenovationTypeField =
    | (typeof RENOVATION_TYPE_AVAILABLE_VALUES)[number]
    | undefined;

export const RenovationTypeField = () => {
    const {
        values: { hasRenovation },
    } = useFiltersContext<IFilters>();
    const { onChange, value, isActive } = useField<IFilters, "renovationType">(
        "renovationType",
    );

    const renovationTypeAvailableValues =
        hasRenovation === "0"
            ? RENOVATION_TYPE_AVAILABLE_VALUES.slice(0, 3)
            : RENOVATION_TYPE_AVAILABLE_VALUES;

    const t = useTranslation(translations);

    const options = useMemo(
        () =>
            renovationTypeAvailableValues.map((el) => {
                const content =
                    hasRenovation === "0"
                        ? t(
                              `noRenovationType_label_${el}` as keyof (typeof translations)["ru"],
                          )
                        : t(
                              `renovationType_label_${el}` as keyof (typeof translations)["ru"],
                          );
                return { value: el, content };
            }),
        [renovationTypeAvailableValues],
    );

    if (!isActive) {
        return null;
    }

    return (
        <RadioGroup
            options={options}
            onChange={onChange}
            value={value}
            title="Тип ремонта"
        />
    );
};
