import { Box, Button, Stack, Typography } from '@mui/material'
import VideocamIcon from '@mui/icons-material/Videocam';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import DevicesIcon from '@mui/icons-material/Devices';
import ExtensionOffIcon from '@mui/icons-material/ExtensionOff';
import React from 'react'
import DropdownSlider from '../../navbar/DropdownSlider';
import DropdownSliderToRight from '../../navbar/DropdownSliderToRight';
import Link from 'next/link';
import { observer } from 'mobx-react-lite';
import MyLink from '../../navigation/myLink';
import MyButton from '../../buttons/myButton';
import TileItem from '../../content/tileItem';

const SubscribeDropdownContent = observer(() => {
    return (
        <Box sx={{
            position: "absolute",
            zIndex: "1000",

            margin: "0 auto",
            
            background: "#1f1b2e",
            top: "84px",
            borderTop: "1px solid rgba(255,255,255,.2)",
            borderRadius: "0px 0px 20px 20px",
            padding: "30px 30px",
            display: "flex",
            gap: "100px"
        }}
        >
            <Box>
                <Typography sx={{
                    fontSize: "32px",
                    color: "white",
                    fontWeight: "700"
                }}>Подписка иви</Typography>
                <Typography sx={{
                    fontSize: "16px",
                    color: "rgba(255,255,255,.48)"
                }}>Стоимость 2.99 $ в месяц, продление автоматическое</Typography>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "20px",
                    margin: "30px 0 30px 0"
                }}>
                    <Stack direction={"row"} alignItems={"center"} gap={"20px"}>
                        <TileItem 
                            text={'Новинки сериалов и фильмов'}
                            icon={<VideocamIcon sx={{ color: "rgba(255,255,255,.48)" }} /> }
                            width={'13.75rem'}
                        />
                        <TileItem  
                            text={'Еженедельное пополнение каталога фильмами и сериалами со всего мира'}
                            icon={<VideocamIcon sx={{ color: "rgba(255,255,255,.48)" }} /> }
                            width={'28.75rem'}
                        />
                    </Stack>
                    <Stack direction={"row"} alignItems={"center"} gap={"20px"}>
                        <TileItem 
                            text={'Фильмы и сериалы без рекламы'}
                            icon={<ExtensionOffIcon sx={{ color: "rgba(255,255,255,.48)" }} />}
                            width={'13.75rem'}
                        />
                        <TileItem 
                            text={'Семейный аккаунт на 5 устройствах'}
                            icon={<DevicesIcon sx={{ color: "rgba(255,255,255,.48)" }} />}
                            width={'13.75rem'}
                        
                        />
                        <TileItem 
                            text={'Загрузка на мобильные устройства'}
                            icon={<FileDownloadIcon sx={{ color: "rgba(255,255,255,.48)" }} />}
                            width={'13.75rem'}
                        />
                    </Stack>
                </Box>
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "20px"
                }}>
                    
                    <MyLink link='/subscribe' content={
                        <MyButton text='Попробовать 30 дней бесплатно' color='#ea003d'/>
                    }/>

                    <Typography sx={{
                        fontSize: "12px",
                        color: "rgba(255,255,255,.48)"
                    }}>Отключить можно<br />
                        в любой момент</Typography>
                </Box>
            </Box>
            <Box sx={{ position: "relative" }}>
                <DropdownSlider />
                <DropdownSliderToRight />
                <Link style={{
                    textDecoration: "underline", color: "rgba(255,255,255,.48)",
                    position: "absolute", bottom: "20px", right: "0"
                }}
                    href="https://www.ivi.ru/profile/subscriptions">Другие подписки</Link>
            </Box>
        </Box>
    )
})
export default SubscribeDropdownContent;
