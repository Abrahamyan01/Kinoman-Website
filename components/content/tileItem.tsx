import { Box } from "@mui/material";
import MyText from "./myText";

interface TileItemProps{
    text:string;
    icon: React.ReactElement;
    width?:string;
}

const TileItem = ({text, icon, width = '11.25rem'}:TileItemProps) => {

    return(
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
            padding: "0.93rem 2rem 0.93rem 0.93rem",
            background: "#312b45",
            width,
            height: '7.5rem',
            borderRadius: "10px"
        }}>
            {icon}
            <MyText text={text} size={'1rem'} weight={700} color="#fff"/>
        </Box>
    )
}

export default TileItem;