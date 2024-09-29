import { IRegistration } from "./types";

export const defaultValues: IRegistration = {
    username: "",
    password: "",
    email: "",
};

export const availableFields = Object.keys(
    defaultValues,
) as (keyof IRegistration)[];
