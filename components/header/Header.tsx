import { Box, Button } from '@mui/material'
import WidgetsIcon from '@mui/icons-material/Widgets';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import React from 'react'
import Image from 'next/image';
import { Autoplay, EffectCoverflow, Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from "../../styles/Header.module.css"
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const slides: string[] = [
    "/slider/chicago.jpeg", "/slider/cosmos.jpeg", "/slider/crush.jpeg",
    "/slider/eskort.jpeg", "/slider/false.jpeg", "/slider/family.jpeg",
    "/slider/fortuna.jpeg", "/slider/hello.jpeg", "/slider/human.jpeg",
    "/slider/kills.jpeg", "/slider/listen.jpeg", "/slider/marlou.jpeg",
    "/slider/minute.jpeg", "/slider/money.jpeg", "/slider/moris.jpeg",
    "/slider/nevskiy.jpeg", "/slider/nolimit.jpeg", "/slider/norton.jpeg",
    "/slider/prince.jpeg", "/slider/sabyanin.jpeg", "/slider/shpion.jpeg",
    "/slider/sleeptalk.jpeg", "/slider/snowrod.jpeg", "/slider/three.jpeg",
    "/slider/universe.jpeg", "/slider/voin.jpeg", "/slider/withall.jpeg"
]


export const Header = () => {
    const { t } = useTranslation();
    return (
        <Box >
            <Swiper
                className={styles.swiper}
                modules={[Autoplay, EffectCoverflow, Navigation, A11y]}
                spaceBetween={80}
                initialSlide={2}
                centeredSlides={true}
                loop={true}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                effect="coverflow"
                coverflowEffect={{
                    rotate: 15,
                    scale: 1,
                    stretch: 0,
                    depth: 100,
                    modifier: 3,
                    slideShadows: true
                }}
                slidesPerView={1}
                navigation={true}              
            >
                {slides.map((slide, i) => {
                    return <SwiperSlide key={i}>
                        <Box
                            className={styles.container}
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                position: "relative"
                            }}>
                            <Image
                                src={slide}
                                alt='Slider'
                                width={1216}
                                height={370}
                                className={styles.image}
                                style={{
                                    borderRadius: "20px",
                                }}
                            />
                            <Link href='/films' style={{ color: "white" }}> <Button
                                variant='contained'
                                endIcon={<WidgetsIcon />}
                                sx={{
                                    position: "absolute",
                                    width: "200px",
                                    height: "40px",
                                    background: "#00b0ff",
                                    borderRadius: "10px",
                                    color: "white",
                                    bottom: "20px",
                                    left: "100px",
                                    "@media (max-width:786px)": {
                                        display: "none"
                                    }
                                }}
                            >
                                {t('В Каталог')}
                            </Button>
                            </Link>
                        </Box>
                    </SwiperSlide>
                })}               
            </Swiper>
        </Box >
    )
}


