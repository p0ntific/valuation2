import { useField } from "@/lib/filters/hooks/useField";
import { Input } from "@/ui-kit/Input";
import { ILogin } from "../types";

export const PasswordField = () => {
    const { onChange, value, isError, isActive } = useField<ILogin, "password">(
        "password",
        {
            checkIsError: (value) => value.length < 4,
        },
    );

    if (!isActive) {
        return null;
    }

    return (
        <Input
            className="min-w-[400px] max-w-[400px]"
            label="Пароль"
            type="password"
            value={value}
            onChange={onChange}
            errorMessage={isError && "Слишком простой"}
        />
    );
};
