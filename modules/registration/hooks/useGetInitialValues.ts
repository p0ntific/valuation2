import { defaultValues } from "../constants";
import { ILogin } from "../types";

export const useGetInitialValues = () => {
    return defaultValues as ILogin;
};
