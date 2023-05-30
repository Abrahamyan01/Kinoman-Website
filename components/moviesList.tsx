import React from "react";
import { Box,  Stack } from '@mui/material';

import Movie from "./movie";
import {Movies} from "./interfaces/movie";
import MyLink from "./navigation/myLink";


interface MoviesListProps {
    movies: Movies;
    title: string;
}

const MoviesList = ({movies, title}:MoviesListProps) => {
 
    //const SliderContent = movies?.rows.map((movie) => <Movie key={movie.id} movie={movie} />);
   
    let SliderContent;
    if(movies){
        SliderContent = movies?.rows.map((movie) => <Movie key={movie.id} movie={movie} />);
    }

    return(

            <Box sx={{  mt: '5rem', mb:'2rem' }}>
                <MyLink link={`/movies/${title}`} content={title} fontSize="1.5rem" fontWeight={700} color="#fff"/>

               <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', mt:'1rem'}}>  
    {/*          <Container maxWidth={false} sx={{ width: '77.5rem', mb: '1rem', paddingLeft: '0 !important', height:'20rem', display:'flex', alignItems:'center', overflowX:'hidden'  }}>  
                   <Slider  content={SliderContent} itemsCount={SliderContent?.length} itemsToShow={6} containerWidth={74.2} itemWidth={9.499}/> 
               </Container>  */}

                <Stack direction='row' flexWrap='wrap' justifyContent='flex-start' gap={2.5} sx={{mt:'1rem'}}>
                    {movies?.rows.map((movie) => (
                        <Movie key={movie.id} movie={movie} />
                    ))}
                </Stack>


                </Box> 
            </Box>

    )
};

export default MoviesList;