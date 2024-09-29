import { useField } from "@/lib/filters/hooks/useField";

import { useTranslation } from "@/lib/translation/useTranslation";
import { RadioGroup } from "@/ui-kit/RadioGroup";
import { useMemo } from "react";
import { IFilters } from "../../types";
import { translations } from "./i18n";

const PARKING_TYPE_AVAILABLE_VALUES = [
    "0",
    "mlt",
    "grn",
    "orf",
    "und",
] as const;

export type IParkingTypeField =
    | (typeof PARKING_TYPE_AVAILABLE_VALUES)[number]
    | undefined;

export const ParkingTypeField = () => {
    const { onChange, value, isActive } = useField<IFilters, "parkingType">(
        "parkingType",
    );

    const t = useTranslation(translations);

    const options = useMemo(
        () =>
            PARKING_TYPE_AVAILABLE_VALUES.map((el) => {
                return {
                    value: el,
                    content: t(
                        `parking_label_${el}` as keyof (typeof translations)["ru"],
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
            title="Парковка"
        />
    );
};
