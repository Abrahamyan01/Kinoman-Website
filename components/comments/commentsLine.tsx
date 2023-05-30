import { useState } from "react";
import { Box } from "@mui/material";

interface CommentLineProps {
    content: string;
    onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  }

const CommentsLine = ({content, onClick}:CommentLineProps) => {
    const [isHovered, setIsHovered] = useState(false);


    const makeWhiteColor = (e:React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        setIsHovered(true);
    }
    const removeWhiteColor = (e:React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        setIsHovered(false);
    }
 
    return(
        <Box
            onMouseEnter={(e) => makeWhiteColor(e)}
            onMouseLeave={(e) => removeWhiteColor(e)}
            sx={{
                borderLeft: 1,
                borderColor: isHovered? 'white' : 'rgba(128,128,128,0.2)',
                marginLeft: 2,
                paddingLeft: 2,

            }}
            onClick={(e)=> onClick(e)}
    >
        {content}
    </Box>
    )
}

export default CommentsLine;