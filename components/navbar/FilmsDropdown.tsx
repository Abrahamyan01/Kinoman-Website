import { Box, Button, List, ListItem, Stack, Typography } from '@mui/material'
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import React from 'react'
import dropdown from '@/store/Dropdown';
import { observer } from 'mobx-react-lite';
import DropdownSlider from './DropdownSlider';
import DropdownSliderToRight from './DropdownSliderToRight';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const FilmsDropdown = observer(() => {
    const { t } = useTranslation();
    return (
        <Box
            sx={{
                position: "absolute",
                zIndex: "1000",
                width: "1220px",
                margin: "0 auto",
                height: "380px",
                background: "#1f1b2e",
                top: "84px",
                borderTop: "1px solid rgba(255,255,255,.2)",
                borderRadius: "0px 0px 20px 20px",
                padding: "30px 30px"
            }}
            onMouseLeave={() => { dropdown.changeHandler(false) }}
        >
            <Stack direction={"row"} gap={"100px"}>
                <Box sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "6vw"
                }}>
                    <Box>
                        <Typography sx={{ fontSize: "15px", fontWeight: "700", color: "white", marginBottom: "10px" }}>{t('Жанры')}</Typography>
                        <Stack direction={'row'} gap={"5vw"}>
                            <List disablePadding>
                                {dropdown.genres.map((g, i, a) => {
                                    if (i < a.length / 2)
                                        return <ListItem key={i} disablePadding sx={{ marginBottom: "10px" }}>
                                            <Typography sx={{
                                                color: "rgba(255,255,255,.48)", fontSize: "12px", fontWeight: "700", ":hover": {
                                                    color: "white"
                                                }
                                            }}>{t(`${g}`)}</Typography>
                                        </ListItem>
                                })}
                            </List>
                            <List disablePadding>
                                {dropdown.genres.map((g, i, a) => {
                                    if (i >= a.length / 2)
                                        return <ListItem key={i} disablePadding sx={{ marginBottom: "10px" }}>
                                            <Typography sx={{
                                                color: "rgba(255,255,255,.48)", fontSize: "12px", fontWeight: "700", ":hover": {
                                                    color: "white"
                                                }
                                            }}>{t(`${g}`)}</Typography>
                                        </ListItem>
                                })}
                            </List>
                        </Stack>
                    </Box>
                    <Box>
                        <Box>
                            <Typography sx={{ fontSize: "15px", fontWeight: "700", color: "white", marginBottom: "10px" }}>{t('Страны')}</Typography>
                            <List disablePadding>
                                {dropdown.countries.map((c, i) => {
                                    return <ListItem key={i} disablePadding sx={{ marginBottom: "10px" }}>
                                        <Typography sx={{
                                            color: "rgba(255,255,255,.48)", fontSize: "12px", fontWeight: "700", ":hover": {
                                                color: "white"
                                            }
                                        }}>{t(`${c}`)}</Typography>
                                    </ListItem>
                                })}
                            </List>
                        </Box>
                        <Box>
                            <Typography sx={{ fontSize: "15px", fontWeight: "700", color: "white", marginBottom: "10px", marginTop: "30px" }}>{t('Годы')}</Typography>
                            <List disablePadding>
                                {dropdown.dates.map((d, i) => {
                                    return <ListItem key={i} disablePadding sx={{ marginBottom: "10px" }}>
                                        <Typography sx={{
                                            color: "rgba(255,255,255,.48)", fontSize: "12px", fontWeight: "700", ":hover": {
                                                color: "white"
                                            }
                                        }}>{d}</Typography>
                                    </ListItem>
                                })}
                            </List>
                        </Box>
                    </Box>
                </Box >
                <Box sx={{
                    display: "flex",
                    gap: "4vw"
                }}>
                    <Box sx={{
                        borderLeft: "1px solid rgba(255,255,255,.2)",
                    }}>
                        {dropdown.features.map((f, i) => {
                            return <Typography sx={{
                                color: "rgba(255,255,255,.48)",
                                fontSize: "14px",
                                fontWeight: "600",
                                marginBottom: "10px",
                                paddingLeft: "20px",
                                ":hover": {
                                    color: "white",
                                    borderLeft: "2px solid white"
                                }
                            }} key={i}>{t(`${f}`)}</Typography>
                        })}
                        <Link href="https://www.ivi.ru/pages/tvsmart/"> <Button
                            startIcon={<DesktopWindowsIcon />}
                            sx={{
                                color: "white",
                                fontSize: "10px",
                                textTransform: "capitalize",
                                padding: "0",
                                paddingLeft: "20px",
                                margin: "20px 0 0 0",
                                height: "40px",
                                width: "150px",
                                borderRadius: "5px",
                                background: "#1f1b2e"
                            }}
                        >
                            {t('Смотреть на SmartTV')}
                        </Button>
                        </Link>
                    </Box>
                    <Box sx={{
                        maxWidth: "300px",
                        overflow: "hidden",
                    }}>
                        <DropdownSlider />
                        <DropdownSliderToRight />
                        <DropdownSlider />
                    </Box>
                </Box>
            </Stack >
        </Box >
    )
})

export default FilmsDropdown