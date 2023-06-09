import { Button } from '@mui/material';
import { useRouter } from 'next/router';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const BackButton = () => {
    const router = useRouter();

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
        Назад
    </Button>
    );
};

export default BackButton;