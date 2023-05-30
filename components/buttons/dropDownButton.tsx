import { Button, Grid, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { observer } from 'mobx-react-lite';
import MyText from '../content/myText';
import  { Filter } from '../interfaces/filter'
import { cutText } from '@/functions/cutText';

interface DropDownButtonProps{
  name:string;
  filters:Filter[];
  isOpen:boolean;
  onClick: any;
}

const DropDownButton = observer(({ name, filters, isOpen, onClick }:DropDownButtonProps) => {

  const filterString = filters.map(e => e.name).join(', ');
  const cutted = cutText(filterString, 18, false);
  
  return (
    <Button id={name} onClick={onClick} 
      sx={{
        height:'3.5rem',
        pl:'1rem',
        width:'14.18rem',
        textTransform:'capitalize',
        backgroundColor:'#312b45'
      }}>
      <Grid container sx={{height: cutted ? 'unset' : '1.4rem'}}>
        <Grid item xs={10}>
          <Grid container direction="column" justifyContent="center">
            <Grid item>
              <MyText color='#fff' text={name} align='left'/>
            </Grid>
            <Grid item>
            <Box>
              <MyText text={cutted} align='left' />
            </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2} >
          {isOpen ? <ExpandLessIcon sx={{color:'#fff'}}/> : <ExpandMoreIcon sx={{color:'#fff'}}/>}
        </Grid>
      </Grid>
    </Button>
  )
});

export default DropDownButton;