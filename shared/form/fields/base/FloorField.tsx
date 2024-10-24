import { useField } from "@/lib/filters/hooks/useField";
import { Input } from "@/ui-kit/Input";
import { IBaseFieldProps, IFilters } from "../../types";

export const FloorField = ({ className }: IBaseFieldProps) => {
    const { onChange, value, isError, isActive } = useField<IFilters, "floor">(
        "floor",
    );

    if (!isActive) {
        return null;
    }

    return (
        <Input
            label="Этаж"
            className={className}
            placeholder="10"
            value={value}
            type="number"
            onChange={onChange}
            errorMessage={isError && "Проверьте этаж"}
        />
    );
};
