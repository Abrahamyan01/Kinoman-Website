import React, { useEffect, useState, useRef } from 'react';
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
  
  const Slider = ({
    containerWidth = 75.99875,
    itemWidth = 17.8,
    content,
    itemsCount,
    showArrows = true,
    transitionDuration = 500,
    itemsToShow = 1,
  }:SliderProps) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const SliderContainer = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handlePrevClick = () => {

      setRemainingCount((prev) => prev + itemsToShow)

      setTranslateXValue(`translateX(-${((currentSlide - 1) * (containerWidth - itemWidth - 1.22))}rem)`)
      setCurrentSlide(currentSlide - 1)
    };

    const [remainingCount, setRemainingCount] = useState(itemsCount);
    const [translateXValue, setTranslateXValue] = useState(`translateX(-${(currentSlide * (containerWidth - itemWidth - 1.22))}rem)`);

    useEffect(()=>{
      console.log(remainingCount)
      setRemainingCount((prev) => prev - itemsToShow)
    },[])

    const handleNextClick = () => {

      setRemainingCount((prev) => prev - itemsToShow)
  

      if((remainingCount + 1) < itemsToShow){
        setTranslateXValue(`translateX(-${((currentSlide ) * (containerWidth - itemWidth - 1.22)) + remainingCount * itemWidth / 2}rem)`)
          setCurrentSlide(currentSlide  + 1);     
      } else {
          setCurrentSlide(currentSlide + 1);
          setTranslateXValue(`translateX(-${((currentSlide + 1) * (containerWidth - itemWidth - 1.22))}rem)`)
      }
  };



    return (

        <Box ref={SliderContainer} sx={{position:'relative'}}>
          {showArrows && (
        <IconButton
          onClick={handlePrevClick}
     /*      disabled={currentSlide === 0} */
          sx={{
            position: 'absolute',
            top: '50%',
            left: '-1.56rem',
            color: 'white',
          }}
        >
          <ArrowBackIos />
        </IconButton>
      )}
          <Container 
          maxWidth={false}
          sx={{
            width: `${containerWidth}rem`,
            mb: '1rem',
            paddingLeft: '0.2rem !important',
            paddingRight: '0.2rem !important',
            paddingTop:'2rem',
            display:'flex',
            alignItems:'center',
            overflowX:'hidden'  
          }}> 
    
            <Box
              style={{
                transform: translateXValue,
                transition: `transform ${transitionDuration}ms`,
                display:'flex',
                
              }}
            >
              {content?.map((item, index) => (
                <Box
                  key={index}
                  style={{
                    display: 'inline-block',
                    width: `${100 / itemsToShow}%`,
                    marginRight: index === content.length - 1 ? 0 : '1.22rem',
                  }}
                >
                  {item}
                </Box>
              ))}
            </Box>
        
          </Container>
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
  
  export default Slider;


