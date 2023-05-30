import { User } from "./user";

export interface AuthResponce{
    accessToken:string;
    refreshToken: string;
    user: User;
}
