import useRequest from "@/hooks/useRequest";
import { Box, Stack } from "@mui/material";
import MyList from "../../content/myList";
import Hr from "../../content/hr";
import DropdownSlider from "../../navbar/DropdownSlider";
import DropdownSliderToRight from "../../navbar/DropdownSliderToRight";
import { toJS } from "mobx";


const MoviesDropDownContent = () => {
    const genresUrl = 'http://localhost:3001/movies/filters/genres';


    const genres = useRequest(genresUrl);
    const countries = [
        {nameRu: "Русские"},
        {nameRu: "Зарубежные"},
        {nameRu: "Советское кино"},

    ];
    const features = [
        {nameRu: "Подборки"},
        {nameRu:"Рейтинг"},
        {nameRu: "Трейлеры"},
        {nameRu:"Что посмотреть"},
        {nameRu:"Фильмы в HD"},
        {nameRu:"Выбор иви"},
        {nameRu:"Новинки подписки"},
    ]

    const generateContent = (data) => {
        return data?.map((e) => ({
        link: `/movies/${e.nameRu}`,
        content: e.nameRu,
        }));
    }
    /* придумать как обойтись без generate content */

   
       
    const genresContent = generateContent(genres);
    const countriesContent = generateContent(countries);
    const featuresContent = generateContent(features);

    
    return(
        <Box sx={{p:'0 1rem'}}>
            <Box sx={{mt:'0.1rem'}}>
                <Hr/>
            </Box>

            <Stack direction='row' justifyContent='space-between' sx={{mt:'1rem'}}>
                <Box>
                    <MyList title="Жанры" content={genresContent} itemsPerColumn={8} isButton={true}/>
                </Box>
                <Box>
                    <MyList title="Страны" content={countriesContent} itemsPerColumn={8} isButton={true}/>
                </Box>
                <Box>
                    <MyList title="Новинки" content={featuresContent} itemsPerColumn={8}/>
                </Box>
                <Box>
                    <DropdownSlider/>
                    <DropdownSliderToRight/>
                    <DropdownSlider/>    
                </Box>
            </Stack>
        </Box> 
    )
}

export default MoviesDropDownContent;