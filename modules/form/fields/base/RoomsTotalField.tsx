import { useField } from "@/lib/filters/hooks/useField";

import { RadioGroup } from "@/ui-kit/RadioGroup";
import { IFilters } from "../../types";

const ROOMS_TOTAL_AVAILABLE_VALUES = ["0.7", "1", "2", "3", "4", "5+"] as const 

export type IRoomsTotalField =
    | (typeof ROOMS_TOTAL_AVAILABLE_VALUES)[number]
    | undefined;

const options = ROOMS_TOTAL_AVAILABLE_VALUES.map((el) => {
    const content = el === "0.7" ? "Студия" : el;
    return { value: el, content };
});

export const RoomsTotalField = () => {
    const { onChange, value, isError, isActive } = useField<
        IFilters,
        "roomsTotal"
    >("roomsTotal");

    if (!isActive) {
        return null;
    }

    return (
        <RadioGroup
            options={options}
            onChange={onChange}
            value={value}
            title="Количество комнат"
        />
    );
};
