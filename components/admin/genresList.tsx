import React from 'react';
import { List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import MyText from '../content/myText';



const GenresList = ({genres}) => {

    return (
        <List>
          {genres?.map((genre) => (
            <ListItem key={genre.id}>
              <MyText text={genre.nameRu} color='#fff'/>
              <IconButton sx={{color:'#fff'}} onClick={() => console.log(`Change ${genre.nameRu}`)}>
                <EditIcon />
              </IconButton>
              <IconButton sx={{color:'#fff'}} onClick={() => console.log(`Delete ${genre.nameRu}`)}>
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      );
}

export default GenresList;