import { Any } from "@/types";
import { useEffect, useState } from "react";

export const useDebounce = (value: Any, delay: number) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        // Создаем таймер для обновления дебаунсированного значения
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        // Очищаем таймер при изменении значения или задержки
        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
};
