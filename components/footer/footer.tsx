import { Box, Grid,  Button, Link,  Container } from '@mui/material';
import { Mail, Phone} from "@mui/icons-material";
import MyLink from '../navigation/myLink';

import FooterLine from './footerLine';
import FooterTitle from './footerTitle';
import SmallButton from '../buttons/smallButton';
import MyButton from '../buttons/myButton';
import MyText from '../content/myText';

import React from 'react';
import mouthpiece from '../../public/icons/mouthpiece.svg'
import Hr from '../content/hr';

import { useTranslation } from 'react-i18next';
import '../translate/i18next';
import MyList from '../content/myList';
import TranslateButton from '../translateButton/translateButton';

const Footer = () => {
    const { t } = useTranslation();

    const firstColumnContent = [
        { link: 'https://corp.ivi.ru/', content: t('О компании') },
        { link: 'https://corp.ivi.ru/career/#career-vacancy-block', content: t('Вакансии') },
        { link: 'https://www.ivi.tv/pages/beta/', content: t('Программа бета-тестирования') },
        { link: 'https://www.ivi.tv/info/partners', content: t('Информация для партнёров') },
        { link: 'https://corp.ivi.ru/advertisers/', content: t('Размещение рекламы') },
        { link: 'https://www.ivi.tv/info/agreement', content: t('Пользовательское соглашение') },
        { link: 'https://www.ivi.tv/info/confidential', content: t('Политика конфиденциальности') },
        { link: 'https://www.ivi.tv/info/goryachaya-liniya-komplaens', content: t('Комплаенс') }
      ];
      const secondColumnContent = [
        { link: 'https://www.ivi.tv/', content: t('Мой Иви') },
        { link: 'https://www.ivi.tv/new', content: t('Что нового') },
        { link: 'https://www.ivi.tv/movies', content: t('Фильмы') },
        { link: 'https://www.ivi.tv/series', content: t('Сериалы') },
        { link: 'https://www.ivi.tv/animation', content: t('Мультфильмы') },
        { link: 'https://www.ivi.tv/tvplus', content: 'TV+' },
        { link: 'https://www.ivi.tv/goodmovies', content: t('Что посмотреть') },
        { link: 'https://www.ivi.tv/cert', content: t('Активация сертификата') }
      ];

    
    return(
        <Container maxWidth={false} sx={{ width: '77.5rem', mb:'1rem' }}>
            

        <Box component="footer" sx={{ flex:1,'@media (max-width: 1200px)': { display: 'none' } }}>
            <Hr/>
            <Grid container justifyContent="space-between" sx={{ mt: '48px', mb:'48px'}}>
                <Grid item>
                    <MyList title={t('О нас')} content={firstColumnContent}/>
                </Grid>
                <Grid item>
                    <MyList title={t('Разделы')} content={secondColumnContent}/>
                </Grid>
                <Grid item>
                    <Grid container direction="column" spacing={2}>
                        <Grid item>
                            <FooterTitle text={t('Разделы')}/>  
                        </Grid>
                        <Grid item>
                            <Box width={252} sx={{mt:'-10px'}}>
                                <MyText text={t('Мы всегда готовы вам помочь. Наши операторы онлайн 24/7')} align={'left'}/>
                            </Box>
                        </Grid>
                        <Grid item>
                            <MyButton  text={t('Написать в чате')} color='#1f1b2e' hoverColor='#3e3659'/>
                        </Grid>
                        <Grid item>
                            <Grid container spacing={1}>
                                <Grid item>
                                    <SmallButton icon={<Mail sx={{ color: "#fff", width:'16px' }} />}/>
                                </Grid>
                                <Grid item>
                                    <SmallButton icon={<Phone sx={{ color: "#fff", width:'16px' }}/>}/>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                        <Link
                            href="https://ask.ivi.ru"
                            sx={{
                                color: 'white',
                                textDecoration: 'none',
                                '&:hover': {
                                color: 'gray',
                                },
                            }}
                            >
                            ask.ivi.ru
                            </Link>
                        </Grid>
                        <Grid item sx={{mt:'-15px'}}>
                            <MyText text={t('Ответы на вопросы')} align={'left'}/>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item>
                    <Box display='flex' flexDirection='column' justifyContent={'center'}>
                        <Button 
                            sx={{
                                width: 104,
                                height: 104,
                                borderRadius: '20px',
                                margin: '0 auto',
                                background: 'linear-gradient(180deg, #A869F0 0%, #834CC2 100%)',
                                boxShadow: '0 0 104px #A869F0',
                                "&::before": {
                                    content: '""',
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    width: "70%",
                                  
                                    height: 2,
                                    backgroundColor: "#fff",
                                    transform: "translate(-50%, -50%) rotate(65deg)"
                                  },
                            
                                    }}>
                        {mouthpiece()} 
                        </Button>
                        <Box width={252} marginTop={'20px'}>
                            <MyText text={t('Смотрите фильмы, сериалы и мультфильмы без рекламы')} align={'center'}/>
                        </Box>
                        <TranslateButton />
                        <MyLink link={'/admin'} fontWeight={700} content={'Админка'}/>
                    </Box>
                </Grid>    
            </Grid>
            <Hr/>
            <FooterLine/>
            </Box>
        </Container>
       
    )
}


export default Footer;