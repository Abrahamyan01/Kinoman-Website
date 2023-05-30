import { Box } from "@mui/material";
import Image from "next/image";
import FormattedRating from "./formattedRating";


interface MedallionProps{
    image?:string;
    rating?:number | undefined;
}

const Medallion = ({image, rating}:MedallionProps) => {


  let backgroundColor;

  if(rating){
    if (rating > 7) {
      backgroundColor = 'green';
    } else if (rating > 5) {
      backgroundColor = 'grey';
    } else {
      backgroundColor = 'red';
    }
  }

  

    const Content = () => {
        if(image){

            return(
                <Image 
                width={44}
                height={44}
                alt="фото актера"
                src={image}
                className="borderRadiusImage"
                >
                </Image>
            )
        }
        return(
            <Box sx={{
                backgroundColor,
                width:'100%',
                height:'100%',
                display:'flex',
                alignItems:'center',
                justifyContent:'center'
            }}>
                <FormattedRating rating={rating}/>
            </Box>
        )
    }


    return(
        <Box sx={{
            width:'100%',
            height:'100%',
            borderRadius:'12px',
            border:'8px solid rgba(255,255,255,.08)',
            display:'flex',
            alignItems:'center',
            transition: 'all 0.3s ease-in-out',

          }}>
            <Content/>
          </Box>
    )
}

export default Medallion;