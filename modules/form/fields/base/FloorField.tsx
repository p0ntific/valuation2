import { useField } from "@/lib/filters/hooks/useField";
import { Input } from "@/ui-kit/Input";
import { IFilters } from "../../types";

export const FloorField = () => {
    const { onChange, value, isError, isActive } = useField<IFilters, "floor">(
        "floor",
    );

    if (!isActive) {
        return null;
    }

    return (
        <Input
            label="Этаж"
            className="min-w-[150px] max-w-[150px]"
            value={value}
            type="number"
            onChange={onChange}
            errorMessage={isError && "Проверьте этаж"}
        />
    );
};
