import { Stack, Box  } from "@mui/material";
import React from "react";
import MyLink from "../navigation/myLink";
import { GenresAndCountries } from "../interfaces/genresAndCountries";
import MyText from "../content/myText";

interface GenresAndCountriesListProps {
  genres: GenresAndCountries[];
  countries: GenresAndCountries[];
  showOnlyFirst?: boolean;
}



const GenresAndCountriesList = ({
  genres,
  countries,
  showOnlyFirst = false,
}: GenresAndCountriesListProps) => {
  const elements = showOnlyFirst ? [genres[0], countries[0]] : [...genres, ...countries];

  return (
    <Stack
      direction="row"
      flexWrap='wrap'
      sx={{ 
        justifyContent: showOnlyFirst ? "flex-start" : "center",
        mt: showOnlyFirst ? 0 : "0.5rem",
      }}
      spacing={showOnlyFirst ? 0 : 1}
      alignItems="center"
    >
      {elements.map((e: GenresAndCountries, index: number) => (
        <React.Fragment key={e.nameRu}>
          <MyLink
            color={showOnlyFirst ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,.72)"}
            content={e.nameRu.charAt(0).toUpperCase() + e.nameRu.slice(1)}
            link={`/movies/${e.nameRu}`}
            fontSize={showOnlyFirst ? "0.85rem" : "0.93rem"}
            fontWeight={400}
          />
          {index < elements.length - 1 && (
           <>
           {showOnlyFirst ? (
             <MyText color="rgba(255,255,255,0.85)" text={','}/>
           ) : (
             <Box
               sx={{
                 width: "1px",
                 height: "1px",
                 backgroundColor: "rgba(255,255,255,.48)",
                 alignSelf: "center",
               }}
             />
           )}
         </>
          )}
        </React.Fragment>
      ))}
    </Stack>
  );
};

export default GenresAndCountriesList;