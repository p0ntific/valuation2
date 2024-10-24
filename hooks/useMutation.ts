import { Any, AnyAsyncFunction } from "@/types";
import { useCallback, useState } from "react";
import toast from "react-hot-toast";

// Определим интерфейс для возвращаемого значение
interface UseMutationResult<T> {
    mutate: (...args: Parameters<AnyAsyncFunction>) => Promise<void>;
    isLoading: boolean;
    isError: boolean;
    data: T | null;
}

// Реализация самого хука
export const useMutation = <T>(
    asyncFunction: AnyAsyncFunction,
): UseMutationResult<T> => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [data, setData] = useState<T | null>(null);

    const mutate = useCallback(
        async (...args: Parameters<AnyAsyncFunction>) => {
            setIsLoading(true);
            setIsError(false);
            try {
                const result = await asyncFunction(...args);
                setData(result); // Сохраняем данные результата запроса
                setIsLoading(false);
            } catch (err: Any) {
                setIsError(true);
                setIsLoading(false);
                toast.error(err?.message);
            }
        },
        [asyncFunction],
    );

    return { mutate, isLoading, isError, data };
};
