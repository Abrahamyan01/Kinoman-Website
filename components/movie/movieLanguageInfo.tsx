import { Stack, Typography, Box } from "@mui/material";

import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import SubtitlesIcon from '@mui/icons-material/Subtitles';
import MyText from "../content/myText";

const MovieLanguageInfo = () => {
    return (
      <Stack direction='row' spacing={1} justifyContent="center" alignItems="center" sx={{mt:'1rem'}}>
   
        <Box sx={{ padding:'0 0.5rem',backgroundColor: 'rgba(255,255,255,.16)', borderRadius:'0.5rem' }}>
            <MyText text={'FullHD'} align={'center'} color="#fff"/>
        </Box>
        <Stack direction="row" spacing={1} alignItems="center">
          <VolumeUpIcon />
          <Typography>Рус</Typography>
        </Stack>
        <Stack direction="row" spacing={1} alignItems="center">
          <SubtitlesIcon />
          <Typography>Eng</Typography>
        </Stack>
      </Stack>
    );
};

export default MovieLanguageInfo;