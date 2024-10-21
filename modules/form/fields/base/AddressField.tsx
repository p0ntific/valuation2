import { useField } from "@/lib/filters/hooks/useField";
import { Input } from "@/ui-kit/Input";
import { IFilters } from "../../types";

export const AddressField = () => {
    const { onChange, value, isError, isActive } = useField<
        IFilters,
        "address"
    >("address", {
        checkIsError: (value: string) => {
            return value.length < 10;
        },
    });

    if (!isActive) {
        return null;
    }

    return (
        <Input
            className="w-full"
            placeholder="Улица пушкина дом 2 к.3"
            label="Адрес"
            value={value}
            hint="Город указывать не нужно"
            onChange={onChange}
            errorMessage={isError && "Проверьте адрес"}
        />
    );
};
