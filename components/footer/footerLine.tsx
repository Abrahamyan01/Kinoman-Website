import React from 'react';
import { Grid, Box } from '@mui/material';
import MyButton from '../buttons/myButton';
import SmallButton from '../buttons/smallButton';

import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';
import HomeMaxIcon from '@mui/icons-material/HomeMax';
import DevicesIcon from '@mui/icons-material/Devices';

import vkIcon from '../../public/icons/vk.svg';
import odnoklassnikIcon from '../../public/icons/odnoklassniki.svg';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useTranslation } from 'react-i18next';

const FooterLine = () => {
    const { t } = useTranslation();
    return(
        <Grid container justifyContent="space-between" sx={{mt:'48px'}}>
            <Grid item>
                <Box display="flex">
                    <Box sx={{ margin: 1 }}>
                        <MyButton text={'App Store'} smallText={`${t('Загрузить в')}`} color='#1f1b2e' hoverColor='#3e3659' icon={<AppleIcon />} width={'9.5rem'}/>
                    </Box>
                    <Box sx={{ margin: 1 }}>
                        <MyButton text={'Google Play'} smallText={`${t('Доступно в')}`} color='#1f1b2e' hoverColor='#3e3659' icon={<GoogleIcon />} width={'9.5rem'}/>
                    </Box>
                    <Box sx={{ margin: 1 }}>
                        <MyButton text={'Smart TV'} smallText={`${t('Смотрите на')}`} color='#1f1b2e' hoverColor='#3e3659' icon={<HomeMaxIcon />} width={'9.5rem'}/>
                    </Box>
                    <Box sx={{ margin: 1 }}>
                        <MyButton text={t('Все устройства')} color='#1f1b2e' hoverColor='#3e3659' icon={<DevicesIcon />} width={'11rem'}/>
                    </Box>
                </Box>
            </Grid>
            <Grid item>
                <Box display="flex">
                    <Box sx={{ margin: 1 }}>
                        <SmallButton icon={vkIcon} isCircle={true} />
                    </Box>
                    <Box sx={{ margin: 1 }}>
                        <SmallButton icon={odnoklassnikIcon} isCircle={true} />
                    </Box>
                    <Box sx={{ margin: 1 }}>
                        <SmallButton
                        icon={<PhoneForwardedIcon sx={{ color: '#fff', width: '16px' }} />}
                        isCircle={true}
                        />
                    </Box>
                    <Box sx={{ margin: 1 }}>
                        <SmallButton
                        icon={<TelegramIcon sx={{ color: '#fff', width: '16px' }} />}
                        isCircle={true}
                        />
                    </Box>
                    <Box sx={{ margin: 1 }}>
                        <SmallButton
                        icon={<TwitterIcon sx={{ color: '#fff', width: '16px' }} />}
                        isCircle={true}
                        />
                    </Box>
                    <Box sx={{ margin: 1 }}>
                        <SmallButton
                        icon={<LinkedInIcon sx={{ color: '#fff', width: '16px' }} />}
                        isCircle={true}
                        />
                    </Box>
                </Box>
            </Grid>
        </Grid>    
    )
}


export default FooterLine;