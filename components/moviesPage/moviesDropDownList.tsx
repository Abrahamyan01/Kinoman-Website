import DropDownItem from "./dropDownItem";
import { moviesStore } from "@/store/moviesStore";
import { useState, useEffect } from "react";
import { dropdownStore } from "@/store/DropdownStore";

const MoviesDropDownList = () => {
    const [isLoading, setIsLoading] = useState(false);

    const [actorsInput, setActorsIpnut] = useState('');
    const [directorsInput, setDirectorsInput] = useState('');


    useEffect(() => {
      if (actorsInput) {
        setIsLoading(true);
        moviesStore.fetchPersons(actorsInput).then(() => {
          setIsLoading(false);
          dropdownStore.setShowDropdown('actors', true)
        });
      } else {
        dropdownStore.setShowDropdown('actors', false)
      }
    }, [actorsInput]);
    useEffect(() => {
      if (directorsInput) {
        setIsLoading(true);
        moviesStore.fetchDirectors(directorsInput).then(() => {
          setIsLoading(false);
          dropdownStore.setShowDropdown('directors', true)
        });
      } else {
        dropdownStore.setShowDropdown('directors', false)
      }
    }, [directorsInput]);
    /* вместо этого здесь будет кастомный хук  для директоров/ актеров*/


    return(
        <>
            <DropDownItem
                button
                id="genresButton"
                text="Жанры"
                name="genres"
                content={moviesStore.genres}
                height='auto'
                padding='1rem'
                margin='0.3rem'
                borderRadius={0}
                backgroundColor="#312b45"
            />
            <DropDownItem
                button
                id="countriesButton"
                text="Страны"
                name="countries"
                content={moviesStore.countries}
                height='auto'
                padding='1rem'
                margin='0.3rem'
                borderRadius={0}
                backgroundColor="#312b45"
            />
            <DropDownItem
                input
                text="фильтр по Актерам"
                name="actors"
                content={moviesStore.actors}
                setState={setActorsIpnut}
                isLoading={isLoading}
            />
            <DropDownItem
                input
                text="фильтр по Режисерам"
                name="directors"
                content={moviesStore.directors}
                setState={setDirectorsInput}
                isLoading={isLoading}
            />
        </>
    )
}


export default MoviesDropDownList;

