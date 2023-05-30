import MyText from "../content/myText";
import MyTitle from "../content/myTitle";
import CommentsList from "../comments/commentsList";
import { countComments } from "../../functions/countComments";
import { Box } from "@mui/material";
import { modalStore } from "@/store/modalStore";

const MovieReviews = ({comments}) => {

    console.log(comments)

    const count = countComments(comments)

    const openModal = () => {
        modalStore.showReviews();
        modalStore.openModal();
    }


    return(
        <>
            <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                <MyTitle text="Отзывы" isButton={true} onClick={openModal}/>
                <Box sx={{ ml: 1, mt: '-4px' }}>
                    <MyText text={count} align="left" />
                </Box>
                </Box>
            <Box sx={{mt:'1rem'}}>
                <MyText text={'О фильме '} align={'left'}/>
            </Box>
            
            <CommentsList showChildComments={false} comments={comments}/>
            
        </>
    )
}

export default MovieReviews;