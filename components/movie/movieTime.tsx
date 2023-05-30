import { Typography } from '@mui/material';
import MyText from '../content/myText';


interface movieTimeProps {
  minutes: number;
}

const MovieTime = ({ minutes }:movieTimeProps) => {

  console.log(minutes)


  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  return (
    <MyText text={`${hours} ч. ${remainingMinutes} мин.`} align={'center'} color="rgba(255,255,255,.72)"/>
  );
};

export default MovieTime;