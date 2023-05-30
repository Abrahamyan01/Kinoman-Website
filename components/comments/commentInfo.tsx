import { Typography, Box, Stack } from "@mui/material";
import avatar from '../../public/temporaryFiles/ava.jpg'
import Image from "next/image";
import MyText from "../content/myText";
import Time from "../content/time";

interface CommentInfoProps{
    name:string;
    time:string;
    id:number;
    showChildComments?:boolean;
}

const CommentInfo = ({name,time,showChildComments}:CommentInfoProps) => {

    return(
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            height:'1.5rem',
          }}
        >
  

      <Stack direction={'row'} spacing={1} sx={{height:'100%', width:'100%'}}>
      {showChildComments &&
         <Box sx={{height:'100%'}}>
         <Image height={20} width={20} src={avatar} alt="ававтар автора комментария" />
       </Box>
      }
   
        <MyText text={name} align="left" weight={700}/>

        {showChildComments &&
          <Time time={time}/>
        }
       
      </Stack>
    </Box>
    )
}

export default CommentInfo;

