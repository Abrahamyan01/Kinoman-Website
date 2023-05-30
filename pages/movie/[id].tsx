import MovieInfo from "@/components/movie/movieInfo";
import MovieTrailer from "@/components/movie/movieTrailer";
import useRequest from "@/hooks/useRequest";
import { Container, Box } from "@mui/material";
import { useRouter } from "next/router";
import MoviePersons from "@/components/movie/moviePersons";
import MyBreadcrumbs from "@/components/navigation/myBreadcrumbs";
import MovieDevices from "@/components/movie/devices";
import MovieReviews from "@/components/movie/movieReviews";
import MovieModal from "@/components/movie/movieModal";


const movieCard = () => {

    const router = useRouter()
    const id = Array.isArray(router.query.id) ? Number(router.query.id[0]) : Number(router.query.id);
  
    const url = id ? 'http://localhost:3001/movies/' + id : undefined;
    const videoUrl = id ? url + '/videos' : undefined;
    const commentsUrl = id ? 'http://localhost:3004/comments/' + id + '/flat' : undefined;

    const personsUrl = id ? 'http://localhost:3005/persons/' + id : undefined;
  
    const movie = useRequest(url);
    const comments = useRequest(commentsUrl);
    const persons = useRequest(personsUrl);

    console.log(movie)

    return(
      <>
      <Box sx={{
        background: 'linear-gradient(rgb(107, 104, 121) 0%, rgba(107, 104, 121, 0) 70%)',
        height:'20rem',
        width:'100%',
        position:'absolute',
        top:0,
        opacity:'0.4'
        }} >
      </Box>
     
      <Container maxWidth={false} sx={{ width: '77.5rem',
    }}>
        <MyBreadcrumbs/>
     
        <>
      {movie && (
        <>
        <Box sx={{display:'flex', position:"relative"}}>
          <MovieTrailer />
    
          <MovieInfo
            nameRu={movie.nameRu}
            nameEn={movie.nameEn}
            year={movie.year}
            movieLength={movie.filmLength}
            ratingAgeLimits={movie.ratingAgeLimits}
            genres={movie.genres}
            countries={movie.countries}
            type={movie.type}
            description={movie.description}
            rating={movie.ratingKinopoisk}
            ratingVoteCount={movie.ratingKinopoiskVoteCount}
            persons={persons}
            
          /> 
        </Box>
        <MoviePersons
            persons={persons}
            nameRu={movie.nameRu}
            nameEn={movie.nameEn}
            year={movie.year}
            countries={movie.countries}
            comments={comments}
            id={movie.id}
           
          /> 
          <MovieReviews comments={comments}/>
          <MovieDevices 
            nameRu={movie.nameRu}
            nameEn={movie.nameEn}
            poster={movie.posterUrlPreview}

          />
        </>
      )}
    </>
    <MovieModal persons={persons} comments={comments} movieId={id || 0}/>
    </Container>
    
    </>
    )
}

export default movieCard;



