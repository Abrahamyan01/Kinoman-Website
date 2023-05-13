import { Box, Button } from '@mui/material';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import React from 'react'
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const Subscribe = () => {
    const { t } = useTranslation();
    return (
        <Box sx={{
            maxWidth: "1176px",
            margin: "20px auto",
            "@media (max-width:1300px)": {
                marginX: "45px"
            },
        }}>
            <Link href="/subscribe">
                <Button
                    startIcon={<ElectricBoltIcon sx={{ color: "yellow" }} />}
                    sx={{
                        width: "100%",
                        backgroundImage: "url(https://solea-parent.dfs.ivi.ru/picture/bypass/teaserTilePattern_a.svg)",
                        backgroundSize: "auto 48px",
                        borderRadius: "8px",
                        height: "48px",
                        textTransform: "capitalize"
                    }}
                >
                    {t('30 дней подписки бесплатно')}
                </Button >
            </Link>
        </Box>
    )
}
export default Subscribe;
