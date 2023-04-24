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




export const Header = () => {



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
                <SwiperSlide>
                    <Box
                        className={styles.container}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative"
                        }}>
                        <Image
                            src="/slider/chicago.jpeg"
                            alt='Slider'
                            width={1216}
                            height={370}
                            className={styles.image}
                            style={{
                                borderRadius: "20px",
                            }}
                        />
                        <Button
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
                            <Link href='/films' style={{ color: "white" }}>В Каталог</Link>
                        </Button>
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box
                        className={styles.container}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative"
                        }}>
                        <Image
                            src="/slider/cosmos.jpeg"
                            alt='Slider'
                            width={1216}
                            height={370}
                            className={styles.image}
                            style={{
                                borderRadius: "20px",
                            }}
                        />
                        <Button
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
                            <Link href='/films' style={{ color: "white" }}>В Каталог</Link>
                        </Button>
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box
                        className={styles.container}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative"
                        }}>
                        <Image
                            src="/slider/crush.jpeg"
                            alt='Slider'
                            width={1216}
                            height={370}
                            className={styles.image}
                            style={{
                                borderRadius: "20px",
                            }}
                        />
                        <Button
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
                            <Link href='/films' style={{ color: "white" }}>В Каталог</Link>
                        </Button>
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box
                        className={styles.container}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative"
                        }}>
                        <Image
                            src="/slider/eskort.jpeg"
                            alt='Slider'
                            width={1216}
                            height={370}
                            className={styles.image}
                            style={{
                                borderRadius: "20px",
                            }}
                        />
                        <Button
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
                            <Link href='/films' style={{ color: "white" }}>В Каталог</Link>
                        </Button>
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box
                        className={styles.container}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative"
                        }}>
                        <Image
                            src="/slider/false.jpeg"
                            alt='Slider'
                            width={1216}
                            height={370}
                            className={styles.image}
                            style={{
                                borderRadius: "20px",
                            }}
                        />
                        <Button
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
                            <Link href='/films' style={{ color: "white" }}>В Каталог</Link>
                        </Button>
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box
                        className={styles.container}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative"
                        }}>
                        <Image
                            src="/slider/family.jpeg"
                            alt='Slider'
                            width={1216}
                            height={370}
                            className={styles.image}
                            style={{
                                borderRadius: "20px",
                            }}
                        />
                        <Button
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
                            <Link href='/films' style={{ color: "white" }}>В Каталог</Link>
                        </Button>
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box
                        className={styles.container}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative"
                        }}>
                        <Image
                            src="/slider/fortuna.jpeg"
                            alt='Slider'
                            width={1216}
                            height={370}
                            className={styles.image}
                            style={{
                                borderRadius: "20px",
                            }}
                        />
                        <Button
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
                            <Link href='/films' style={{ color: "white" }}>В Каталог</Link>
                        </Button>
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box
                        className={styles.container}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative"
                        }}>
                        <Image
                            src="/slider/hello.jpeg"
                            alt='Slider'
                            width={1216}
                            height={370}
                            className={styles.image}
                            style={{
                                borderRadius: "20px",
                            }}
                        />
                        <Button
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
                            <Link href='/films' style={{ color: "white" }}>В Каталог</Link>
                        </Button>
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box
                        className={styles.container}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative"
                        }}>
                        <Image
                            src="/slider/human.jpeg"
                            alt='Slider'
                            width={1216}
                            height={370}
                            className={styles.image}
                            style={{
                                borderRadius: "20px",
                            }}
                        />
                        <Button
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
                            <Link href='/films' style={{ color: "white" }}>В Каталог</Link>
                        </Button>
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box
                        className={styles.container}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative"
                        }}>
                        <Image
                            src="/slider/kills.jpeg"
                            alt='Slider'
                            width={1216}
                            height={370}
                            className={styles.image}
                            style={{
                                borderRadius: "20px",
                            }}
                        />
                        <Button
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
                            <Link href='/films' style={{ color: "white" }}>В Каталог</Link>
                        </Button>
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box
                        className={styles.container}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative"
                        }}>
                        <Image
                            src="/slider/listen.jpeg"
                            alt='Slider'
                            width={1216}
                            height={370}
                            className={styles.image}
                            style={{
                                borderRadius: "20px",
                            }}
                        />
                        <Button
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
                            <Link href='/films' style={{ color: "white" }}>В Каталог</Link>
                        </Button>
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box
                        className={styles.container}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative"
                        }}>
                        <Image
                            src="/slider/marlou.jpeg"
                            alt='Slider'
                            width={1216}
                            height={370}
                            className={styles.image}
                            style={{
                                borderRadius: "20px",
                            }}
                        />
                        <Button
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
                            <Link href='/films' style={{ color: "white" }}>В Каталог</Link>
                        </Button>
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box
                        className={styles.container}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative"
                        }}>
                        <Image
                            src="/slider/minute.jpeg"
                            alt='Slider'
                            width={1216}
                            height={370}
                            className={styles.image}
                            style={{
                                borderRadius: "20px",
                            }}
                        />
                        <Button
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
                            <Link href='/films' style={{ color: "white" }}>В Каталог</Link>
                        </Button>
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box
                        className={styles.container}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative"
                        }}>
                        <Image
                            src="/slider/money.jpeg"
                            alt='Slider'
                            width={1216}
                            height={370}
                            className={styles.image}
                            style={{
                                borderRadius: "20px",
                            }}
                        />
                        <Button
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
                            <Link href='/films' style={{ color: "white" }}>В Каталог</Link>
                        </Button>
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box
                        className={styles.container}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative"
                        }}>
                        <Image
                            src="/slider/moris.jpeg"
                            alt='Slider'
                            width={1216}
                            height={370}
                            className={styles.image}
                            style={{
                                borderRadius: "20px",
                            }}
                        />
                        <Button
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
                            <Link href='/films' style={{ color: "white" }}>В Каталог</Link>
                        </Button>
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box
                        className={styles.container}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative"
                        }}>
                        <Image
                            src="/slider/nevskiy.jpeg"
                            alt='Slider'
                            width={1216}
                            height={370}
                            className={styles.image}
                            style={{
                                borderRadius: "20px",
                            }}
                        />
                        <Button
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
                            <Link href='/films' style={{ color: "white" }}>В Каталог</Link>
                        </Button>
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box
                        className={styles.container}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative"
                        }}>
                        <Image
                            src="/slider/nolimit.jpeg"
                            alt='Slider'
                            width={1216}
                            height={370}
                            className={styles.image}
                            style={{
                                borderRadius: "20px",
                            }}
                        />
                        <Button
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
                            <Link href='/films' style={{ color: "white" }}>В Каталог</Link>
                        </Button>
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box
                        className={styles.container}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative"
                        }}>
                        <Image
                            src="/slider/norton.jpeg"
                            alt='Slider'
                            width={1216}
                            height={370}
                            className={styles.image}
                            style={{
                                borderRadius: "20px",
                            }}
                        />
                        <Button
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
                            <Link href='/films' style={{ color: "white" }}>В Каталог</Link>
                        </Button>
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box
                        className={styles.container}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative"
                        }}>
                        <Image
                            src="/slider/prince.jpeg"
                            alt='Slider'
                            width={1216}
                            height={370}
                            className={styles.image}
                            style={{
                                borderRadius: "20px",
                            }}
                        />
                        <Button
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
                            <Link href='/films' style={{ color: "white" }}>В Каталог</Link>
                        </Button>
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box
                        className={styles.container}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative"
                        }}>
                        <Image
                            src="/slider/sabyanin.jpeg"
                            alt='Slider'
                            width={1216}
                            height={370}
                            className={styles.image}
                            style={{
                                borderRadius: "20px",
                            }}
                        />
                        <Button
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
                            <Link href='/films' style={{ color: "white" }}>В Каталог</Link>
                        </Button>
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box
                        className={styles.container}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative"
                        }}>
                        <Image
                            src="/slider/shpion.jpeg"
                            alt='Slider'
                            width={1216}
                            height={370}
                            className={styles.image}
                            style={{
                                borderRadius: "20px",
                            }}
                        />
                        <Button
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
                            <Link href='/films' style={{ color: "white" }}>В Каталог</Link>
                        </Button>
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box
                        className={styles.container}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative"
                        }}>
                        <Image
                            src="/slider/sleeptalk.jpeg"
                            alt='Slider'
                            width={1216}
                            height={370}
                            className={styles.image}
                            style={{
                                borderRadius: "20px",
                            }}
                        />
                        <Button
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
                            <Link href='/films' style={{ color: "white" }}>В Каталог</Link>
                        </Button>
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box
                        className={styles.container}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative"
                        }}>
                        <Image
                            src="/slider/snowrod.jpeg"
                            alt='Slider'
                            width={1216}
                            height={370}
                            className={styles.image}
                            style={{
                                borderRadius: "20px",
                            }}
                        />
                        <Button
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
                            <Link href='/films' style={{ color: "white" }}>В Каталог</Link>
                        </Button>
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box
                        className={styles.container}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative"
                        }}>
                        <Image
                            src="/slider/three.jpeg"
                            alt='Slider'
                            width={1216}
                            height={370}
                            className={styles.image}
                            style={{
                                borderRadius: "20px",
                            }}
                        />
                        <Button
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
                            <Link href='/films' style={{ color: "white" }}>В Каталог</Link>
                        </Button>
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box
                        className={styles.container}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative"
                        }}>
                        <Image
                            src="/slider/universe.jpeg"
                            alt='Slider'
                            width={1216}
                            height={370}
                            className={styles.image}
                            style={{
                                borderRadius: "20px",
                            }}
                        />
                        <Button
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
                            <Link href='/films' style={{ color: "white" }}>В Каталог</Link>
                        </Button>
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box
                        className={styles.container}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative"
                        }}>
                        <Image
                            src="/slider/voin.jpeg"
                            alt='Slider'
                            width={1216}
                            height={370}
                            className={styles.image}
                            style={{
                                borderRadius: "20px",
                            }}
                        />
                        <Button
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
                            <Link href='/films' style={{ color: "white" }}>В Каталог</Link>
                        </Button>
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box
                        className={styles.container}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative"
                        }}>
                        <Image
                            src="/slider/withall.jpeg"
                            alt='Slider'
                            width={1216}
                            height={370}
                            className={styles.image}
                            style={{
                                borderRadius: "20px",
                            }}
                        />
                        <Button
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
                            <Link href='/films' style={{ color: "white" }}>В Каталог</Link>
                        </Button>
                    </Box>
                </SwiperSlide>
            </Swiper>
        </Box >
    )
}

