import axios from "axios";

export interface IRegistrationDto {
    username: string;
    password: string;
    email?: string;
}

export const registration = async (body: IRegistrationDto) => {
    const result = await axios.post(
        process.env.NEXT_PUBLIC_API_URL + "users/",
        body,
    );
    return result;
};
