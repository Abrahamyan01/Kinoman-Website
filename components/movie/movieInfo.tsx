import { Box, Stack} from "@mui/material";
import MovieTime from "./movieTime";
import MovieAgeLimit from "./movieAgeLimit";
import ShowMoreText from "../features/showMoreText";
import MyText from "../content/myText";
import GenresAndCountriesList from "./GenresAndCountriesList";
import MovieLanguageInfo from "./movieLanguageInfo";
import MovieName from "../content/translationDynamicData";
import Medallion from "../content/medallion";
import MyButton from "../buttons/myButton";
import { GenresAndCountries } from "../interfaces/genresAndCountries";
import { Person } from "../interfaces/persons";


interface MovieInfoProps {
    nameRu: string;
    nameEn: string;
    year: number;
    movieLength: string;
    ratingAgeLimits: string;
    genres: GenresAndCountries[];
    countries: GenresAndCountries[];
    type: string;
    description: string;
    persons:Person[];
    rating:number;
    ratingVoteCount:number;
  }

const MovieInfo = ({  
    nameRu,
    nameEn,
    year,
    movieLength,
    ratingAgeLimits,
    genres,
    countries,
    ratingVoteCount,
    type,
    persons,
    description,
    rating}:MovieInfoProps) => {

          
    return(
        <Box sx={{color:'#fff', width:'439px', ml:'auto'}}>
          <Box sx={{mb:'2rem'}}>
            <MovieName nameRu={nameRu} nameEn={nameEn} weight={600} size={'3.75rem'} color={'#fff'} line={'2.9rem'}/>
          </Box>


        <Stack direction="row" sx={{ justifyContent: "center" }} spacing={1}>
          <MyText text={year} align={'center'} color="rgba(255,255,255,.72)"/>
          <MovieTime minutes={+movieLength} />
          <MovieAgeLimit text={ratingAgeLimits} />
        </Stack>
        <GenresAndCountriesList genres={genres} countries={countries}/>
        <MovieLanguageInfo/>

        <Stack direction="row" sx={{ justifyContent: "center" ,mt:'2rem'}} spacing={2}>
          <Box sx={{height:'3.5rem', width:'3.5rem'}}>
            <Medallion rating={rating}/>
          </Box>
        
        {persons?.filter((e) => e.roles.some((el) => el.nameRu.includes('Актеры'))).slice(0, 4).map((e)=>{
          return(
            <Box key={e.id} 
              sx={{
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                }}>
              <Box sx={{height:'3.5rem', width:'3.5rem'}}>
                <Medallion image={e.posterUrl}/>
              </Box>
              <Box sx={{width:'77px'}}>
                <MyText  text={e.nameRu} align="center"/>
              </Box>
            </Box>
          )})}
        </Stack>
        
        <Box sx={{mt:'2rem'}}>
          <ShowMoreText text={description} color="rgba(255,255,255,.78)" length={150} buttonText={'Детали о фильме'}/>
        </Box>

        <Box sx={{display:'flex', width:'100%', height:'5.25rem', backgroundColor:'rgba(255,255,255,.08)', alignItems:'center', padding:'0.4rem', mt:'1rem'}}>
          <Box sx={{ flexGrow: 1, height:'100%'}}>
            <Medallion rating={rating}/>
          </Box>
          <Box sx={{ flexGrow: 3, ml:'1rem'}}>
              <MyText text={'Рейтинг иви'} color="#fff" align="left" weight={500}/>
              <MyText text={'Интересный сюжет'} color="rgba(255,255,255,.72)" align="left" weight={400}/>
              <MyText text={`${ratingVoteCount} оценок`} color="rgba(255,255,255,.72)" align="left" size={'0.81rem'} weight={400}/>
          </Box>
          <Box sx={{ flexGrow: 1, }}>
            <MyButton color={'transparent'} text={'Оценить'} width="3.4rem"/>

          </Box>
        </Box>
      </Box>
    )
}
export default MovieInfo;