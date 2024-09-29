import axios from "axios";

export interface ILoginDto {
    username: string;
    password: string;
}

export const login = async (body: ILoginDto) => {
    const result = await axios.post(
        process.env.NEXT_PUBLIC_API_URL + "users/token/login/",
        body,
    );
    return result;
};
