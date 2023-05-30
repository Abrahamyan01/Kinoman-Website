import { Button, Box, Typography } from '@mui/material';
import { ReactElement } from "react";
import MyText from '../content/myText';

interface ButtonProps{
    color?: string;
    hoverColor?: string;
    text: string;
    smallText?: string;
    icon?: ReactElement;
    func?: any;
    width?: string;
    size?: string;
    id?: string;
    fontColor?: string;
    startIcon?: ReactElement;
}


const MyButton = ({id ,color = '#1f1b2e', hoverColor = color, fontColor='#fff', text, smallText, size = '0.93rem', icon, func, width = '12.25rem', startIcon}:ButtonProps) => {

    
    return(
        <Button
            startIcon={startIcon}
            id={id}
            onClick={func}
            variant="contained"
            disableRipple
            disableTouchRipple
                    sx={{
                        textTransform: 'none',
                        backgroundColor: color,
                        borderColor: color,
                        borderWidth: color === 'transparent' ? 0 : '1px',
                        borderRadius: '0.5rem',
                        height:'2.5rem',
                        width,
                        boxShadow: color === 'transparent' ? 0 : undefined,
                        paddingLeft: icon ? '1rem' : 0,
                        paddingRight: icon ? '1rem' : 0,
                        '&:hover':  {
                            backgroundColor: hoverColor,
                            borderColor: hoverColor,
                        },
                    }}>
                       {icon}
                       <Box
                            id={id}
                            sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            marginLeft:'3px'
                        }}>
                        {smallText && (
                        <Typography
                            variant="caption"
                            sx={{
                            color: 'rgba(255,255,255,.72)',
                            fontSize: '0.625rem',
                            marginBottom: '-0.2rem',
                            }}
                        >
                            {smallText}
                        </Typography>
                        )}
                    <MyText id={id} text={text} color={fontColor} size={size} hover={'#fff'}/>
                    </Box>
        </Button> 
    )
}

export default MyButton;