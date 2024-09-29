import axios from "axios";

export interface IGetInfoResponse {
    username: string;
    email: string;
}

export const getInfo = async () => {
    const result = await axios.get<IGetInfoResponse[]>(
        process.env.NEXT_PUBLIC_API_URL + "users/",
        {
            headers: {
                Authorization: "Token " + localStorage.getItem("token"),
            },
        },
    );
    return result;
};
