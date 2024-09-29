import { AnyFunction } from "@/types";
import { useCallback, useState } from "react";

/** хук для генерации фейковых запросов на сервер */
export const useFakeLoading = (delay: number, callback: AnyFunction) => {
    const [isLoading, setIsLoading] = useState(false);

    const delayedFunction = useCallback(() => {
        setIsLoading(true);
        const timeout = setTimeout(() => {
            setIsLoading(false);
            callback();
        }, delay);
        return () => clearTimeout(timeout);
    }, []);

    return { isLoading, delayedFunction };
};
