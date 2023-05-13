import useRequest from "@/hooks/useRequest";


import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Box, Container, Stack} from '@mui/material';
import FormattedRating from "./content/formattedRating";


import {
    BookmarkBorderOutlined,
    AutoFixHighOutlined,
    StarBorderPurple500Outlined,
    DoNotDisturbAltOutlined,
  } from '@mui/icons-material';
import MyTooltip from "./content/MyTooltip";
import MyTitle from "./content/myTitle";

import FilmName from "./content/filmName";
import { useTranslation } from "react-i18next";

const FilmList = () => {

    const url = 'http://localhost:3003/info';
    console.log('url',url);
    const films:any = useRequest(url);
    const { t } = useTranslation();
    return(
        <Container maxWidth={false} sx={{ width: '1240px' }}>
            <Box sx={{  mt: '10rem', mb:'10rem' }}>
                <MyTitle text={t("Все фильмы")}/>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', mt:'1rem'}}>
                    {films?.rows.map((film:any)=>{
                        return(
                            <Box key={film.id} sx={{width:'10.8rem'}}>
                                <Link
                                    href={{
                                    pathname: `/filmPage/${film.id}`,
                                    query: {
                                        id:film.id,
                                    },
                                    }}>
                                <Box className="hoverImage">
                                    <Image
                                        src={film.posterUrlPreview}
                                        alt="постер фильма"
                                        width={153}
                                        height={235}
                                    />
                                    <Box className="hoverContent" sx={{width:'100%', height:'100%',padding:'1rem'}}>
                                        <FormattedRating rating={film.ratingKinopoisk} smallDecimal={true}/>

                                        <Stack spacing={1} sx={{ right: '2rem', top: '1rem', position: 'absolute' }}>
                                            <MyTooltip content={<BookmarkBorderOutlined />} text={'Смотреть позже'}/>
                                            <MyTooltip content={<AutoFixHighOutlined />} text={'Похожее'}/>
                                            <MyTooltip content={<StarBorderPurple500Outlined />} text={'Уже смотрел, оценить'}/>
                                            <MyTooltip content={<DoNotDisturbAltOutlined />} text={'Не нравится такое'}/>                           
                                        </Stack>
                                        
                                    </Box>
                                </Box>
                                <FilmName nameRu={film.nameRu} nameEn={film.nameEn} align="left"/>
                            </Link>
                        </Box>
                        )
                    })}
            </Box>
        </Box>
    </Container>
    )
};

export default FilmList;