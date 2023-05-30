import React, { useEffect, useState } from 'react';
import { Box, IconButton,Container } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

interface SliderProps {
    itemsCount: number;
    content: any;
    showArrows?: boolean;
    transitionDuration?: number;
    itemsToShow?: number;
    containerWidth:number;
    itemWidth: number;
  }
  
  const SliderTest = ({
    containerWidth = 75.99875,
    itemWidth = 17.8,
    content,
    itemsCount,
    showArrows = true,
    transitionDuration = 500,
    itemsToShow = 1,
  }:SliderProps) => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const remainingCount = itemsCount - currentSlide - itemsToShow;
    const visibleItems = content?.slice(currentSlide, currentSlide + itemsToShow);


    const handleNextClick = () => {
        if (remainingCount > 0) {
          setCurrentSlide(currentSlide + itemsToShow);
        }
      };
      
      const handlePrevClick = () => {
        if (currentSlide > 0) {
          setCurrentSlide(currentSlide - itemsToShow);
        }
      };


    return (

        <Box sx={{position:'relative', width:'100%'}}>
          {showArrows && (
        <IconButton
          onClick={handlePrevClick}
         /*  disabled={currentSlide === 0} */
          sx={{
/*             position: 'absolute',
            top: '50%',
            left: '-1.56rem', */
            color: 'white',
          }}
        >
          <ArrowBackIos />
        </IconButton>
      )}

    <Box sx={{ overflow: "hidden", width:containerWidth }}>
        {/* Render all the items and add transition styles to the Box component */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            transition: `transform ${transitionDuration}ms ease-in-out`,
            transform: `translateX(-${currentSlide * (itemWidth + 10)}px)`,
          }}
        >
          {content}
        </Box>
      </Box>

          {showArrows && (
            <IconButton
                onClick={handleNextClick}
                disabled={remainingCount === 0}
                sx={{
                    position: 'absolute',
                    top: '50%',
                    right: '-1.56rem',
                    color: 'white',
                }}
                >
                <ArrowForwardIos />
                </IconButton>
            )}
        </Box>

      );
  };
  
  export default SliderTest;

