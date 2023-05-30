import { Box, Stack, Slider } from "@mui/material";
import { moviesStore } from "@/store/moviesStore";
import { useState, useRef } from "react";

import MoviesDropDownList from "./moviesDropDownList";
import MyText from "../content/myText";

const FiltersList = () => {
    const [value, setValue] = useState(0);

    const sliderRef = useRef<HTMLSpanElement>(null);

    const handleSliderChange = (event: Event, newValue: number | number[]) => {
      setValue(newValue as number);
    };

    const sendRequest = () => {
      moviesStore.handleMinRatingChange(value, 'minRating')
    }

  
    return (
        <>
          <Box
            sx={{
              backgroundColor: '#1f1b2e',
              height: '12.18rem',
              width: '100%',
              p: '1rem',
            }}
          >
            <Stack direction="row" gap={2} justifyContent={'space-around'}>
              <MoviesDropDownList/>
            </Stack>
            <Stack direction="row" gap={2} justifyContent={'space-around'} sx={{mt:'2rem'}}>
            <Box sx={{width:'14rem'}}>
              <MyText text={'по рейтингу'} color={'#fff'}/>{/*  #312b45 */}
                  <Slider
                    ref={sliderRef}
                    onMouseUp={sendRequest}
                    aria-label="Small steps"
                    step={0.1}
                    marks
                    min={0}
                    max={10}
                    value={value}
                    onChange={handleSliderChange}
                    valueLabelDisplay="auto"
                    color="secondary"
                  />
                </Box>
                <Box sx={{width:'14em'}}>
                <MyText text={'по количеству голосов'} color={'#fff'}/>
                  <Slider
                    ref={sliderRef}
                    onMouseUp={sendRequest}
                    aria-label="Small steps"
                    step={0.1}
                    marks
                    min={0}
                    max={10}
                    value={value}
                    onChange={handleSliderChange}
                    valueLabelDisplay="auto"
                    color="secondary"
                  />
                </Box>
            </Stack>

          </Box>
        </>
      );
  };

  export default FiltersList;