import Layout from '@/components/layout/Layout'
import { userStore } from '@/store/userStore';
import '@/styles/globals.css'
import { Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material'
import type { AppProps } from 'next/app'
import {Open_Sans} from 'next/font/google'
import { useEffect } from 'react';



const openSans = Open_Sans({ subsets: ['latin', 'cyrillic']  })

const theme = createTheme({

  typography: {
      fontFamily: openSans.style.fontFamily,
    },
  });




export default function App({ Component, pageProps, ...appProps }: AppProps) {

  useEffect(()=>{
    if(localStorage.getItem('token')){
      userStore.checkAuth();
    }
  },[])


  const getContent = () => {
    if ([`/subscribe`].includes(appProps.router.pathname))
      return <Component {...pageProps} />;

  return (

    <ThemeProvider theme={theme}>
      <Layout className={openSans.className}>
          <Component {...pageProps} />
      </Layout>
    </ThemeProvider>

    )
  }
  return getContent()
}
