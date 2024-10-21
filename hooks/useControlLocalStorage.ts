import { useCallback } from "react";

export const useControlLocalStorage = <T extends string>(name: string) => {
    const isLocalStorageExist = typeof window !== "undefined";

    const localStorageValue = isLocalStorageExist
        ? (localStorage.getItem(name) as T | null)
        : null;

    const setLocalStorageValue = useCallback(
        (value: T) => {
            if (isLocalStorageExist) localStorage.setItem(name, value);
        },
        [isLocalStorageExist, name],
    );

    return { localStorageValue, setLocalStorageValue };
};
