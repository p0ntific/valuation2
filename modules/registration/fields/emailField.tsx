import { useField } from "@/lib/filters/hooks/useField";
import { Input } from "@/ui-kit/Input";
import { IRegistration } from "../types";

export const EmailField = () => {
    const { onChange, value, isError, isActive } = useField<
        IRegistration,
        "email"
    >("email", {
        checkIsError: (value) => value.length < 5 && value.includes("@"),
    });

    if (!isActive) {
        return null;
    }

    return (
        <Input
            className="min-w-[400px] max-w-[400px]"
            label="Почта"
            value={value}
            onChange={onChange}
            errorMessage={isError && "Проверьте почту"}
        />
    );
};
