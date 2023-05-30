import { Box, Container} from '@mui/material';
import Comment from './comment'
import Slider from '../features/slider';



interface CommentsListProps {
  movieId?: number;
  comments: Comment[];
  showChildComments?: boolean;
}

const CommentsList = ({movieId = 0 ,comments, showChildComments = true}:CommentsListProps) => {
  const topLevelComments = comments?.filter((c) => c.repliedOnComment === null);

 const SliderContent = topLevelComments?.map((comment) => (
    <Comment
     key={comment.id}
     comment={comment}
     allComments={comments}
     showChildComments={false} 
     movieId={comment.movieId}     
    />
  ));
 

    return (
        <Box>

          <Box sx={{
            display: showChildComments ? 'block' : 'flex',
            flexDirection: 'row',
            gap: showChildComments ? 0 : '1rem',    
          }}>
            {!showChildComments ? (
                <Slider itemsCount={SliderContent?.length} itemsToShow={4} content={SliderContent} containerWidth={75.99875} itemWidth={17.8} />      
            ) : (
              topLevelComments?.map((comment) => (
                <Comment
                  movieId={movieId}
                  key={comment.id}
                  comment={comment}
                  allComments={comments}
                  showChildComments={true}
                />
              ))
            )}
          </Box>

        </Box>
    );
}

export default CommentsList;

