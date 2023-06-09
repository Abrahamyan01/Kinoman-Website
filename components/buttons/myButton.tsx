import { Button, Box, Typography } from '@mui/material';
import { ReactElement } from "react";

interface ButtonProps{
    color?:string;
    hoverColor?:string;
    text:string;
    smallText?:string;
    icon?: ReactElement;
    func?:any;
    width?:string;
}


const MyButton = ({color = '#1f1b2e', hoverColor = color, text, smallText, icon, func, width = '196px'}:ButtonProps) => {

    
    return(
        <Button
            onClick={func}
            variant="contained"
            disableRipple
            disableTouchRipple
                    sx={{
                        textTransform: 'none',
                        backgroundColor: color,
                        borderColor: color,
                        borderWidth: '1px',
                        borderRadius: '0.5rem',
                        height:'40px',
                        width: icon ? undefined : width,
                        paddingLeft: icon ? '1rem' : 0,
                        paddingRight: icon ? '1rem' : 0,
                        '&:hover':  {
                            backgroundColor: hoverColor,
                            borderColor: hoverColor,
                        },
                    }}>
                       {icon}
                       <Box
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
                            fontSize: '10px',
                            marginBottom: '-0.2rem',
                            }}
                        >
                            {smallText}
                        </Typography>
                        )}
                    <Typography variant="body1" >{text}</Typography>
            </Box>
        </Button> 
    )
}

export default MyButton;