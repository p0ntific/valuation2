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
            className="min-w-[300px] max-w-[300px]"
            value={value}
            type="number"
            onChange={onChange}
            errorMessage={isError && "Проверьте этаж"}
        />
    );
};
