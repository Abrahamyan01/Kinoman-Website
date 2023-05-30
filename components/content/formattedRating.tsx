import React from 'react';
import { Typography } from '@mui/material';

interface FormattedRatingProps {
  rating: number | undefined;
  smallDecimal?: boolean;
  color?: string;
}

const FormattedRating = ({ rating, smallDecimal, color = "#000"}: FormattedRatingProps) => {
  if (rating === undefined) {
    return null;
  }

  let [whole, decimal] = rating.toString().split(".");
  return (
    <Typography sx={{ color, fontSize:'1.5rem' }}>
      {whole}
      {decimal && (
        <>
          ,
          {smallDecimal ? (
            <span style={{ fontSize: "0.75em" }}>{decimal}</span>
          ) : (
            decimal
          )}
        </>
      )}
    </Typography>
  );
};

export default FormattedRating;