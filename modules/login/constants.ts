import { ILogin } from "./types";

export const defaultValues: ILogin = {
    username: "",
    password: "",
};

export const availableFields = Object.keys(defaultValues) as (keyof ILogin)[];
