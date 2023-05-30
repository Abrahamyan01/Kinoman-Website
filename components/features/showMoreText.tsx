import { Button } from '@mui/material';
import { useState } from 'react';
import MyText from '../content/myText';
import { cutText } from '../../functions/cutText';

interface ShowMoreTextProps {
  text: string;
  length: number;
  buttonText?: string;
  color?: string,
  useDangerouslySetInnerHTML?: boolean;
  
}

const ShowMoreText = ({
  text,
  length,
  buttonText,
  color='rgba(255,255,255,.48)',
  useDangerouslySetInnerHTML = false,

}: ShowMoreTextProps) => {
  const [showFullText, setShowFullText] = useState(false);

  const handleShowMore = () => {
    setShowFullText(true);
  };


  const displayedText = cutText(text, length ,showFullText);

  return (
    <>
      {useDangerouslySetInnerHTML ? (
        <div dangerouslySetInnerHTML={{ __html: displayedText }}  style={{ color: 'rgba(255,255,255,.78)', textAlign: 'left',whiteSpace: 'normal'}}/>
      ) : (
        <MyText text={displayedText} align={'left'} color={color}/>
      )}
      {!showFullText && text.length > length &&  buttonText &&(
      <Button sx={{color:'grey'}} onClick={handleShowMore}>{buttonText}</Button>
      )}
    </>
  );
};

export default ShowMoreText;