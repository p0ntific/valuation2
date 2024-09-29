import { Any } from "@/types";

export const isEqual = (firstObject: Any, secondObject: Any) => {
    return JSON.stringify(firstObject) === JSON.stringify(secondObject);
};
