import { Box, Button, Container, IconButton, Stack, Typography } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'


const subscribe = () => {

    return (
        <>
            <Box sx={{
                position: "relative",
            }}>
                <Box sx={{
                    position: "absolute",
                    zIndex: "1000",
                    left: "20%",
                    top: "1%",
                    "@media (max-width:1200px)": {
                        left: "50px",
                        top: "10px"
                    }
                }}>
                    <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                    }}>
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            width={85}
                            height={65}
                            style={{ background: "transparent" }}
                        />
                        <Link href="/"> <Typography sx={{
                            color: "white",
                            fontSize: "24px",
                            fontWeight: "700",
                            position: "absolute",
                            left: "40px",
                            bottom: "17px",
                            cursor: "pointer",
                            opacity: ".7",
                            "@media (max-width:420px)": {
                                fontSize: "20px",
                            }
                        }}>Кино<span style={{ color: "#00b0ff" }}>Ман</span></Typography></Link>
                    </Box>
                    <Button
                        startIcon={<ArrowBackIosNewIcon sx={{ color: "white", }} />}
                        sx={{ margin: "30px 0 0 30px" }}
                    >
                        <Link href="/"><Typography sx={{
                            color: "rgba(255,255,255,.48)",
                            fontSize: "16px",
                            textTransform: "capitalize",
                            fontWeight: "700",
                            ":hover": {
                                color: "white",
                                transition: "all .5s ease-in-out"
                            }
                        }}>
                            Назад
                        </Typography>
                        </Link>
                    </Button>
                </Box>
                <video loop autoPlay
                    muted
                    style={{
                        width: "100%", height: "auto",
                        borderRadius: "10px",
                        opacity: ".3"
                    }}
                    src="https://dfs-dtln-17.dfs.ivi.ru/mp4-shq/mbNqw9MH9soTQEjDQHj__w,4832410625/storage23/contents/3/9/6294a4ba40bb06f0409e6c769c82d0.mp4?redirected=1&redirected_total=1"></video>
                <Box sx={{
                    position: 'absolute',
                    boxShadow: "inset 0px 80px 160px 110px rgba(16,14,25,1)",
                    width: "100%",
                    height: "1070px",
                    top: "0",
                }}></Box>
                <Box sx={{
                    position: "absolute",
                    bottom: "5%",
                    left: "35%"
                }}>
                    <Typography
                        sx={{
                            color: "white",
                            fontSize: "60px",
                            fontWeight: "800"
                        }}
                    >Подписка иви</Typography>
                    <Typography
                        sx={{
                            color: "white",
                            fontSize: "24px",
                            fontWeight: "600",
                            marginTop: "10px"
                        }}
                    >Подключай и смотри новые фильмы и сериалы <br />
                        со всего мира в отличном качестве и без рекламы</Typography>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "10px",
                        marginTop: "50px"
                    }}>
                        <Button
                            sx={{
                                color: "white",
                                fontSize: "16px",
                                background: "#00b0ff",
                                textTransform: "capitalize",
                                height: "56px",
                                width: "670px",
                                borderRadius: "8px",
                                fontWeight: "600"
                            }}
                        >
                            Попробовать 30 дней бесплатно
                        </Button>
                        <Typography
                            sx={{
                                color: "rgba(255,255,255,.48)",
                                fontSize: "15px",
                            }}
                        >Отменить можно в любой момент</Typography>
                        <IconButton>
                            <ExpandMoreIcon sx={{ color: "white", fontSize: "50px" }} />
                        </IconButton>
                    </Box>
                </Box>
            </Box >
            <Container sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10vh",
                marginY: "40px"
            }}>
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "4vw"
                }}>
                    <Box>
                        <Typography sx={{
                            color: "white",
                            fontSize: "28px",
                            fontWeight: "600",
                            lineHeight: "32px"
                        }}>Одна подписка для всей <br />
                            семьи или друзей</Typography>
                        <Typography sx={{
                            fontSize: "14px",
                            color: "rgba(255,255,255,.48)",
                            marginTop: "20px"
                        }}>Создайте персональное пространство для каждого<br />
                            и подключите до пяти устройств. И всё это в одной<br />
                            подписке.</Typography>
                    </Box>
                    <Image
                        src="/subscribe/mobile.png"
                        alt="Logo"
                        width={550}
                        height={450}
                        style={{ background: "transparent" }}
                    />
                </Box>
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "4vw"
                }}>

                    <Image
                        src="/subscribe/tele.png"
                        alt="Logo"
                        width={600}
                        height={450}
                        style={{ background: "transparent" }}
                    />
                    <Box>
                        <Typography sx={{
                            color: "white",
                            fontSize: "28px",
                            fontWeight: "600",
                            lineHeight: "32px"
                        }}>Максимальное качество</Typography>
                        <Typography sx={{
                            fontSize: "14px",
                            color: "rgba(255,255,255,.48)",
                            marginTop: "20px"
                        }}>Проще простого: у нас больше всего фильмов в 4K и своя<br />
                            система, которая обеспечивает быструю загрузку<br />
                            и просмотр без сбоев.</Typography>
                    </Box>
                </Box>
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "4vw"
                }}>
                    <Box>
                        <Typography sx={{
                            color: "white",
                            fontSize: "28px",
                            fontWeight: "600",
                            lineHeight: "32px"
                        }}>Скачать на смартфон</Typography>
                        <Typography sx={{
                            fontSize: "14px",
                            color: "rgba(255,255,255,.48)",
                            marginTop: "20px"
                        }}>Возьмите кино в дорогу. Загружайте на смартфон или<br />
                            планшет и смотрите без интернета.
                        </Typography>
                    </Box>
                    <Image
                        src="/subscribe/thumb.png"
                        alt="Logo"
                        width={500}
                        height={350}
                        style={{ background: "transparent" }}
                    />
                </Box>
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "4vw"
                }}>

                    <Image
                        src="/subscribe/lock.png"
                        alt="Logo"
                        width={550}
                        height={350}
                        style={{ background: "transparent" }}
                    />
                    <Box>
                        <Typography sx={{
                            color: "white",
                            fontSize: "28px",
                            fontWeight: "600",
                            lineHeight: "32px"
                        }}>Без рекламы</Typography>
                        <Typography sx={{
                            fontSize: "14px",
                            color: "rgba(255,255,255,.48)",
                            marginTop: "20px"
                        }}>Цените каждый момент. Ни один рекламный ролик<br />
                            не прервёт ваш просмотр кино. Отсутствие рекламы<br />
                            не распространяется на ТВ-каналы.</Typography>
                    </Box>
                </Box>
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6vw"
                }}>
                    <Typography sx={{
                        color: "white",
                        fontSize: "28px",
                        fontWeight: "600",
                        lineHeight: "32px"
                    }}>Каждый день<br />
                        вы легко найдёте,<br />
                        что посмотреть</Typography>
                    <Image
                        src="/subscribe/other.png"
                        alt="Logo"
                        width={500}
                        height={450}
                        style={{ background: "transparent" }}
                    />
                </Box>
                <Stack direction={"row"} gap={"30px"} alignItems={"center"}>
                    <Link href="https://www.ivi.ru/subscribe?from=top_menu&redirect_url=%2Fprofile" style={{ color: "white", textDecoration: "underline", fontSize: "14px" }}>Есть сертификат или промокод</Link>
                    <Link href="https://www.ivi.ru/subscribe?from=top_menu&redirect_url=%2Fprofile" style={{ color: "white", textDecoration: "underline", fontSize: "14px" }}>Уже есть подписка</Link>
                </Stack>
                <Typography sx={{ color: "gray", fontSize: "12px" }}>16+ © АО «Телекомпания НТВ», 2021 г.; 12+© Централ Партнершип, 2022 г.; 18+© ООО «Иви.ру», 2022 год. Все права защищены</Typography>
            </Container >

        </>
    )
}
export default subscribe;