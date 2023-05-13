import { Button } from '@mui/material';
import { useRouter } from 'next/router';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useTranslation } from 'react-i18next';

const BackButton = () => {
    const router = useRouter();
    const { t } = useTranslation();
    return (
        <Button
        onClick={() => router.back()}
        sx={{
            backgroundColor: 'transparent',
            color: '#fff',
            textTransform:'none',
            '&:hover': {
                backgroundColor: 'transparent',
                '& .MuiSvgIcon-root': {
                    transform: 'scale(1.1)',
                },
            },
        }}
    >
        <ArrowBackIosIcon />
        {t('Назад')}
    </Button>
    );
};

export default BackButton;