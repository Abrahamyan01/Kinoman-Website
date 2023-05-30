import { makeAutoObservable } from 'mobx';
import { User } from '@/components/interfaces/user';
import AuthService from '@/components/services/auth';
import axios from  'axios';
import { AuthResponce } from '@/components/interfaces/AuthResponse';

class UserStore{
    user = {} as User;
    isAuth = false;

 

    constructor(){
        makeAutoObservable(this)
    }

    setAuth(bool:boolean){
        this.isAuth = bool;
    }

    setUser(user: User){
        this.user = user

    }

    async login(login:string, email:string, password: string) {
        try{
            const response = await AuthService.login(login, email, password);
            localStorage.setItem('token', response.data.accessToken)
            
            this.getInfo();
        /*     this.setUser(response.data.user) */

        } catch (e: any) {
            console.log('login error', e);
          }
    }
    async register(login:string, email:string, password: string) {
        try{
            const response = await AuthService.registration(login, email, password);
            localStorage.setItem('token', response.data.accessToken)
            this.getInfo();
        /*     this.setUser(response.data.user) */
        }catch (e: any) {
            console.log('register error', e);
          }
    }
    async logout() {
        try{
            const response = await AuthService.logout();
            localStorage.removeItem('token')
            this.setAuth(false);
            this.setUser({} as User)
        } catch (e: any) {
            console.log('logout  error', e);
          }
    }

    async checkAuth() {
       
        try{
            console.log('ca trig')

            const response = await axios.get<AuthResponce>('http://localhost:3006/auth/refresh', {withCredentials:true})

            console.log('checkauth trig ')

            localStorage.setItem('token', response.data.accessToken)
           
            this.getInfo();

        } catch (e: any) {
            console.log('checkAuth error', e);
          }
    }
    async getInfo(){
        try{
            const token = localStorage.getItem('token');
            const response = await axios.get('http://localhost:3006/users/info', {
            headers: {
                Authorization: `Bearer ${token}`
            }
           
            });
            /* 
            console.log('ssssdada') */
            console.log(response)

            this.setUser(response.data)
   /*          console.log(this.user) */
            this.setAuth(true);

        } catch (e:any){
            console.log(e)
        }
    
    }
}


export const userStore = new UserStore();