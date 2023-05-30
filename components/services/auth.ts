import $api from "../http";
import {AxiosResponse} from 'axios'; 
import { AuthResponce } from "../interfaces/AuthResponse";

export default class AuthService {
    static async login(login:string, email:string ,password: string): Promise<AxiosResponse<AuthResponce>>{
        return $api.post<AuthResponce>('auth/signin', {login, email,  password})
    }
    static async registration(login:string, email:string , password: string): Promise<AxiosResponse<AuthResponce>>{
        return $api.post<AuthResponce>('auth/signup', {login, email,  password})
    }
    static async logout(): Promise<void>{
        return $api.post('auth/logout')
    }

}