import { Box } from '@mui/material';
import styles from "../../styles/DropdownSliderToRight.module.css"
import Image from 'next/image';
import React from 'react'

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
const DropdownSliderToRight = () => {
    return (
        <Box className={styles.slider}>
            <Box className={styles.track}>
                {slides.map((slide, i) => {
                    return <Box className={styles.slide}
                        key={i} >
                        <Image
                            src={slide}
                            alt='Slider'
                            width={250}
                            height={100}
                            className={styles.img}
                        />
                    </Box>
                })}
            </Box>
        </Box>
    )
}
export default DropdownSliderToRight;