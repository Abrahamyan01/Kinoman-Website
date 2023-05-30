import { Button, Link } from '@mui/material';
import { ReactElement } from "react";
import React from 'react';


interface smallButtonProps{
    icon: ReactElement | (()=>string);
    isCircle?:boolean;
    backgroundColor?:string;
    hover?:string;
}


const SmallButton = ({icon, isCircle, backgroundColor = '#1f1b2e', hover = '#3e3659'}:smallButtonProps) => {


    return(
        <Button variant="contained"
                    sx={{
                        backgroundColor,
                        borderColor: backgroundColor,
                        borderWidth: '1px',
                        borderRadius: isCircle ? "50%" : "8px",
                        height:'2.5rem',
                        width:'2.5rem',
                        minWidth:'2.5rem',
                        padding:0,
                        '&:hover': {
                            backgroundColor: hover,
                            borderColor: hover,
                        },
                    }}>
            <Link href="#"  sx={{ display: "flex", alignItems: "center" }}>
                    {React.isValidElement(icon) ? (
                icon
            ) : typeof icon === 'function' ? (
                icon()
            ) : null}
            </Link>
        </Button> 
    )
}

export default SmallButton;