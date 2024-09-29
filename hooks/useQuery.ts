import { useCallback, useEffect, useState } from "react";

interface UseQueryResult<T> {
    data: T | null;
    isLoading: boolean;
    isError: boolean;
    refetch: () => void;
}

export const useQuery = <T>(
    asyncFunction: () => Promise<T>,
): UseQueryResult<T> => {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const fetchData = useCallback(async () => {
        setIsLoading(true);
        setIsError(false);
        try {
            const result = await asyncFunction();
            setData(result);
            setIsLoading(false);
        } catch (err) {
            setIsError(true);
            setIsLoading(false);
            console.error(err); // Обрабатываем ошибку
        }
    }, [asyncFunction]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return { data, isLoading, isError, refetch: fetchData };
};
