import { useField } from "@/lib/filters/hooks/useField";
import { Input } from "@/ui-kit/Input";
import { IBaseFieldProps, IFilters } from "../../types";

export const AreaField = ({ className }: IBaseFieldProps) => {
    const { onChange, value, isError, isActive } = useField<IFilters, "area">(
        "area",
    );

    if (!isActive) {
        return null;
    }

    return (
        <Input
            type="number"
            className={className}
            placeholder="35"
            label="Площадь, м²"
            value={value}
            onChange={onChange}
            errorMessage={isError && "Проверьте площадь"}
        />
    );
};
