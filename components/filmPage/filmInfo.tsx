import { Box, Typography, Stack, Button } from "@mui/material";
import FilmTime from "./filmTime";
import FilmAgeLimit from "./filmAgeLimit";
import ShowMoreText from "../showMoreText";
import MyText from "../content/myText";
import GenresAndCountriesList from "./filmGenresAndCountriesList";
import FilmLanguageInfo from "./filmLanguageInfo";
import FilmName from "../content/filmName";
import Medallion from "../content/medallion";
import MyButton from "../buttons/myButton";


interface FilmInfoProps {
    nameRu: string;
    nameEn: string;
    year: number;
    filmLength: string;
    ratingAgeLimits: string;
    genres: string[];
    countries: string[];
    type: string;
    description: string;
    persons:any;
    rating:number;
  }

const FilmInfo = ({  
    nameRu,
    nameEn,
    year,
    filmLength,
    ratingAgeLimits,
    genres,
    countries,
    type,
    persons,
    description,
    rating}:FilmInfoProps) => {

      
    return(
        <Box sx={{color:'#fff', width:'439px', ml:'auto'}}>
          <Box sx={{mb:'2rem'}}>
            <FilmName nameRu={nameRu} nameEn={nameEn} weight={600} size={60} color={'#fff'} line="40px"/>
          </Box>


        <Stack direction="row" sx={{ justifyContent: "center" }} spacing={1}>
          <MyText text={year} align={'center'} color="rgba(255,255,255,.72)"/>
          <FilmTime minutes={+filmLength} />
          <FilmAgeLimit text={ratingAgeLimits} />
        </Stack>
        <GenresAndCountriesList genres={genres} countries={countries}/>
        <FilmLanguageInfo/>

        <Stack direction="row" sx={{ justifyContent: "center" ,mt:'2rem'}} spacing={2}>
          <Box sx={{height:'3.5rem', width:'3.5rem'}}>
            <Medallion rating={rating}/>
          </Box>
        
        {persons?.filter((e:any) => e.roles.some((el:any) => el.nameRu.includes('Актеры'))).slice(0, 4).map((e:any)=>{
          return(
            <Box key={e.id} sx={{
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
              <MyText text={'Рейтинг Киноман'} color="#fff" align="left" weight={500}/>
              <MyText text={'Интересный сюжет'} color="rgba(255,255,255,.72)" align="left" weight={400}/>
              <MyText text={'26620 оценок'} color="rgba(255,255,255,.72)" align="left" size={13} weight={400}/>
          </Box>
          <Box sx={{ flexGrow: 1, }}>
            <MyButton color={'transparent'} text={'Оценить'} width="3.4rem"/>
          </Box>
        </Box>
      </Box>
    )
}
export default FilmInfo;