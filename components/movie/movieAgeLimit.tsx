import React from 'react';
import MyText from '../content/myText';

interface AgeLimitProps {
  text: string;
}

const AgeLimit = ({ text }:AgeLimitProps) => {

  const numberOnly = text.replace(/\D/g, '');

  return(
    <MyText text={`${numberOnly} +`} align='center' color="rgba(255,255,255,.72)"/>
  ) 
};

export default AgeLimit;