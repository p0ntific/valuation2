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
            className="w-1/2"
            placeholder="10"
            value={value}
            type="number"
            onChange={onChange}
            errorMessage={isError && "Проверьте этаж"}
        />
    );
};
