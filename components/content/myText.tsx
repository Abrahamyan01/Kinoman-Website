import React from 'react';
import { Typography } from '@mui/material';
import { TextProps } from '../interfaces/textProps';

interface MyTextProps extends TextProps{
  text: string | number | null;
  id?:string;
  hover?:string;
}

const MyText = ({ id,text, align, color = 'rgba(255,255,255,.48)', weight = 400, size = '0.91rem', line = '1.25rem', hover= 'none' }: MyTextProps) => {

  return (
    <Typography
      id={id}
      align={align}
      sx={{
        color,
        fontWeight: weight,
        fontSize: size,
        lineHeight: line,
        fontStyle: 'normal',
        '&:hover':  {
          color:hover
          
      },
    }}
  >
    {text}
  </Typography>
  );
};

export default MyText;