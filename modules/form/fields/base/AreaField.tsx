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
            className="w-1/2"
            placeholder="35"
            label="Площадь, м²"
            value={value}
            onChange={onChange}
            errorMessage={isError && "Проверьте площадь"}
        />
    );
};
