import { useField } from "@/lib/filters/hooks/useField";
import { Input } from "@/ui-kit/Input";
import { IFilters } from "../../types";

export const FloorsField = () => {
    const { onChange, value, isError, isActive } = useField<IFilters, "floors">(
        "floors",
    );

    if (!isActive) {
        return null;
    }

    return (
        <Input
            label="Этажность здания"
            placeholder="25"
            value={value}
            type="number"
            onChange={onChange}
            errorMessage={isError && "Проверьте этаж"}
        />
    );
};
