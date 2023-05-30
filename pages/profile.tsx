import React, { useState } from 'react';
import { Box, Container } from '@mui/material';
import MyInput from '@/components/features/myInput';
import MyText from '@/components/content/myText';
import MyButton from '@/components/buttons/myButton';
import { userStore } from '@/store/userStore';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';
import useRequest from '@/hooks/useRequest';

const profile = observer(() => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [login, setLogin] = useState<string>('');

    const Login = (login ,email, password) => {
        console.log(email)
        console.log(password)
        userStore.login(login, email, password)
   /*      userStore.getInfo() */
    }
    const register = (login ,email, password) => {
        userStore.register(login, email, password)
    }

    console.log(toJS(userStore.isAuth))
    console.log(toJS(userStore))

 /*    const url = 'http://localhost:3006/users/info'
    const data = useRequest(url)
    console.log(data) */
 

    return (
        <Container maxWidth={false} sx={{ width: '77.5rem', mb:'1rem' }}>


     
      {/*       <MyText text={userStore.isAuth ? `Пользователь авторизован ${userStore.user.email}` : 'Авторизуйтесь'}/> */}
            
        


            <MyText text={'логин'}/>
            <MyInput setState={setLogin} label={'login'}/>
            <MyInput setState={setEmail} label={'email'}/>
            <MyInput setState={setPassword} label={'password'}/>
           
            <MyButton text={'Вход'} func={() => Login(login ,email, password)}/>
            <MyButton text={'Регистрация'} func={() => register(login ,email, password)}/>
        </Container>
    )
});

export default profile
