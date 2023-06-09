import React from 'react';
import { Typography } from '@mui/material';

interface FormattedRatingProps {
  rating: number;
  smallDecimal?: boolean;
  color?: string;
}

const FormattedRating = ({ rating, smallDecimal, color = "#000"}: FormattedRatingProps) => {
  let [whole, decimal] = rating.toString().split('.');
  return (
    <Typography sx={{color}}>
      {whole}
      {decimal && (
        <>
          ,
          {smallDecimal ? (
            <span style={{ fontSize: '0.75em'  }}>{decimal}</span>
          ) : (
            decimal
          )}
        </>
      )}
    </Typography>
  );
};

export default FormattedRating;