import { useField } from "@/lib/filters/hooks/useField";
import { Input } from "@/ui-kit/Input";
import { ILogin } from "../types";

export const UsernameField = () => {
    const { onChange, value, isError, isActive } = useField<ILogin, "username">(
        "username",
        {
            checkIsError: (value) => value.length < 5,
        },
    );

    if (!isActive) {
        return null;
    }

    return (
        <Input
            className="min-w-[400px] max-w-[400px]"
            label="Имя пользователя"
            value={value}
            onChange={onChange}
            errorMessage={isError && "Проверьте имя пользователя"}
        />
    );
};
