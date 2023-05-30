import { Box, List, ListItem } from '@mui/material'
import MyTitle from "./myTitle"
import MyLink from "../navigation/myLink"


const MyList = ({title, content, itemsPerColumn = 11}) => {
    const splitContent = (data) => {
        if (!data || data.length <= itemsPerColumn) {
            return [data];
        } else {
            const firstColumnContent = data.slice(0, itemsPerColumn);
            const restOfContent = data.slice(itemsPerColumn);
            return [firstColumnContent, ...splitContent(restOfContent)];
        }
    }
   
    const columns = splitContent(content);
   
    return(
    <>
    {title &&  <MyTitle text={title} size="0.9375rem"/>}
   
    <Box style={{display: 'flex'}}>
        {columns?.map((columnContent, index) => (
            <List key={index} sx={{paddingTop: 1, marginRight: index === columns.length - 1 ? 0 : '2rem'}}>
                {columnContent?.map(item => (
                    <ListItem key={item.content} sx={{paddingLeft:'0', paddingTop:'0.3rem'}}>
                        <MyLink
                        link={item.link}
                        
                        content={item.content}
                        fontSize="0.9375rem"
                        fontWeight={400}
                        /> 
                    </ListItem>
                ))}
            </List>
        ))}
    </Box>
    </>
    )
   }
   
   export default MyList;
