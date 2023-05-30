import Image from "next/image";
import MyTitle from "@/components/content/myTitle";
import useRequest from "@/hooks/useRequest";
import { Box, Container, Stack } from "@mui/material";
import { useRouter } from "next/router";
import MyText from "@/components/content/myText";
import Hr from "@/components/content/hr";
import movieName from "@/components/content/translationDynamicData";
import FormattedRating from "@/components/content/formattedRating";
import MyButton from "@/components/buttons/myButton";
import BackButton from "@/components/navigation/backButton";
import Link from "next/link";

const movieCard = () => {

    const router = useRouter()
    const { id } = router.query;

    const url = id ? 'http://localhost:3003/info/person/' + id : undefined;
    const person = useRequest(url); 


    return(
        <Box sx={{mb:'4rem'}}>
            <Container maxWidth={false} sx={{ width: '1340px' }}>
            <BackButton/>
                <Container maxWidth={false} sx={{ width: '596px' }}>
                    {person &&
                    <>
                        <Box sx={{borderRadius:'20px', overflow:'hidden',width:'120px', height:'120px'}}>
                            <Image width={120} height={120} style={{ objectFit: 'cover'}} src={person.person.posterUrl} alt={person.person.nameRu} />
                        </Box>
                        <Box sx={{mt:'1rem'}}>
                            <MyTitle text={person.person.nameRu} size="3.5rem"/>
                        </Box>
                        
                        <Box sx={{mt:'1rem'}}>
                            <MyText text={person.person.nameEn}/>
                        </Box>
                        


                        <Stack direction='row' alignItems='center' gap={1} sx={{mt:'3rem'}}>
                            <MyTitle text={'Полная фильмография'}/>
                            <MyText text={`${person.movies.length} фильма`}/>
                        </Stack>

                        <Box sx={{mt:'3rem'}}>
                            <Hr/>
                        </Box>


                        {person.movies.map(movie=>{
                            return(
                              
                                    <Link
                                        style={{display:'flex', marginTop:'1rem', marginBottom:'1rem', alignItems:'center'}}
                                        key={movie.id}
                                        href={{
                                        pathname: `/moviePage/${movie.id}`,
                                        query: {
                                            id: movie.id,
                                    },
                                    }}>

                                    <Image
                                        src={movie.posterUrl}
                                        width={80}
                                        height={122}
                                        alt={movie.nameRu}
                                    ></Image>
                                    <Box flexGrow={1} sx={{pl:'1rem'}}>
                                        <MyText text={movie.year} align={'left'} color={"#fff"} weight={500}/>
                                        <movieName nameRu={movie.nameRu} nameEn={movie.nameEn} align={'left'} color={'#fff'} weight={500}/>
                                        <Stack direction='row' alignItems={'center'} gap={1}>
                                            <MyText text='Рейтинг Иви:' color="#a5a1b2"/>
                                            <FormattedRating rating={movie.ratingKinopoisk} color={'#a5a1b2'}/>
                                        </Stack>
                                    </Box>
                                    <MyButton text="Подробнее"  hoverColor='#3e3659' width="8.75rem"/>
                                    </Link>
              
                            )
                        })}
                    </>    
                    }
                </Container>
            </Container>
        </Box>
    )
    
}

export default movieCard;