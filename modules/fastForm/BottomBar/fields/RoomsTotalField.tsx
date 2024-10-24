import { useField } from "@/lib/filters/hooks/useField";
import { IFilters } from "@/shared/form/types";

import { RadioGroup } from "@/ui-kit/RadioGroup";
import { Select } from "@/ui-kit/Select";

const ROOMS_TOTAL_AVAILABLE_VALUES = ["0.7", "1", "2", "3", "4", "5+"] as const;

export type IRoomsTotalField =
    | (typeof ROOMS_TOTAL_AVAILABLE_VALUES)[number]
    | undefined;

const options = ROOMS_TOTAL_AVAILABLE_VALUES.map((el) => {
    let content: string = "";
    if (el === "0.7") {
        content = "Студия";
    } else if (el === "5+") {
        content = "5+ комнат";
    } else {
        content = el + " - комнатная";
    }
    return { value: el, content };
});

export const RoomsTotalField = () => {
    const { onChange, value, isActive } = useField<IFilters, "roomsTotal">(
        "roomsTotal",
    );

    if (!isActive) {
        return null;
    }

    return (
        <Select
            label="Количество комнат"
            placeholder="Студия"
            className="w-52 h-[72px]"
            onChange={onChange}
            options={options}
            value={value}
        />
    );
};
