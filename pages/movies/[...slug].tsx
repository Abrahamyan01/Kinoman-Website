import MoviesList from "@/components/moviesList";
import { Container } from "@mui/material";

import FiltersList from "@/components/moviesPage/filtersList";
import { useEffect} from "react";

import { observer } from "mobx-react-lite";
import { moviesStore } from "@/store/moviesStore";
import { useRouter } from "next/router";

interface Filter {
  id: number;
}

const Movies = observer(() => {
    
  const router = useRouter();
  const genreName  = router.query;

  
useEffect(() => {
  if (genreName.slug) {
    const genre = moviesStore.genres.find(
      (genre) => genre.nameRu === genreName.slug?.toString()
    );

    if (genre) {
      const isSelected = moviesStore.selectedFilters.genres.some(
        (filter: Filter) => filter.id === +genre.id
      );
      if (!isSelected) {
        moviesStore.resetFilters();
        moviesStore.handleButtonClick(genre.nameRu, genre.id, "genres");
      }
    }
  }
}, [genreName]);




    return(
            <Container maxWidth={false} sx={{ width: '77.5rem', mb:'1rem' }}>
                <FiltersList/>
                <MoviesList movies = {moviesStore.movies} title="Все"/> 
            </Container>
        
    )
});

export default Movies;