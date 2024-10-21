import { IRegion } from "@/lib/region/context";
import { useCallback } from "react";

// TODO Переписать на хук, передавать туда параметры c дженериком)
export const useLocalStorage = () => {
    const isLocalStorageExist = typeof window !== "undefined";
    const setToken = useCallback(
        (token: string) => {
            if (isLocalStorageExist) localStorage.setItem("token", token);
        },
        [isLocalStorageExist],
    );

    const token =
        isLocalStorageExist && (localStorage.getItem("token") as string | null);

    const region = isLocalStorageExist
        ? (localStorage.getItem("region") as IRegion | null)
        : null;

    const setRegion = useCallback(
        (region: IRegion) => {
            if (isLocalStorageExist) localStorage.setItem("region", region);
        },
        [isLocalStorageExist],
    );

    return { token, setToken, region, setRegion };
};
