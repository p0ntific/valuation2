import { useField } from "@/lib/filters/hooks/useField";
import { Input } from "@/ui-kit/Input";
import { IFilters } from "../../types";

export const AreaField = () => {
    const { onChange, value, isError, isActive } = useField<IFilters, "area">(
        "area",
    );

    if (!isActive) {
        return null;
    }

    return (
        <Input
            type="number"
            className="min-w-[150px] max-w-[150px]"
            label="Площадь"
            value={value}
            onChange={onChange}
            errorMessage={isError && "Проверьте площадь"}
        />
    );
};
