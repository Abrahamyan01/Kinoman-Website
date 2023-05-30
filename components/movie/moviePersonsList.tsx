import { Typography, Box } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { Person } from '../interfaces/persons';


interface Role {
    nameRu: string;
  }
interface PersonsListProps {
    persons: Person[];
}
  
const MoviePersonsList = ({persons}: PersonsListProps) => {

    const rolesOrder = ['Режиссеры', 'Актеры', 'Операторы', 'Сценаристы', 'Композитор'];
    return (
      <Box>
        {rolesOrder.map(role => (
          <Box key={role}>
            <Typography variant="h2" style={{ color: 'white' }}>{role}</Typography>
            <Box display='flex' flexWrap='wrap' gap='1rem'>
              {persons.filter((person) => person.roles.some((r) => r.nameRu === role)).map((person) => (
                <Box key={person.id}>
                  <Box style={{ position: 'relative', borderRadius: '50%', overflow: 'hidden' }}>
                    <Image width={150} height={160} style={{ objectFit: 'cover'}}   src={person.posterUrl} alt={person.nameRu} />
                  </Box>
                  <Typography style={{ color: 'white' }}>
                    {person.nameRu.split(' ').map((name:string, index:number) => (
                      <React.Fragment key={index}>
                        {name}
                        {index === 0 && <br />}
                      </React.Fragment>
                    ))}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    );
  };
  
  export default MoviePersonsList;