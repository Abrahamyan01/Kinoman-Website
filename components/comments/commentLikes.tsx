import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import { Stack } from '@mui/material';
import MyText from '../content/myText';


const CommentLikes = () => {


    return(
        <Stack direction='row' gap={1}>
            <ThumbDownOffAltIcon sx={{color:'rgba(126,121,143,.72)'}}/>
            <MyText text={'15'} color='#73a32f' weight={700}/>
            <ThumbUpOffAltIcon sx={{color:'rgba(126,121,143,.72)'}}/>
        </Stack>
    )
}

export default CommentLikes;