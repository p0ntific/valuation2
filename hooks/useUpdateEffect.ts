import { useEffect, useRef } from "react";

export const useUpdateEffect = (
    ...args: Parameters<typeof useEffect>
): void => {
    const [effect, deps] = args;
    const isInitialMountRef = useRef(true);

    useEffect(() => {
        if (!isInitialMountRef.current) {
            effect();
        }
        isInitialMountRef.current = false;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
};
