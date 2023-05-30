import React, {useRef} from 'react';
import { Box, Divider, Stack } from '@mui/material';
import CommentInfo from './commentInfo';
import ShowMoreText from '../features/showMoreText';
import CommentAddForm from './commentAddForm';
import Time from '../content/time';
import { modalStore } from '@/store/modalStore';
import { Comment } from '../interfaces/comment';
import CommentLikes from './commentLikes';

interface CommentProps {
    movieId: number;
    comment: Comment;
    allComments: Comment[]
    depth?: number;
    showChildComments?: boolean;
  }

const MAX_DEPTH = 15;

const Comment = ({ movieId,comment, allComments, depth = 1, showChildComments = true}: CommentProps) => {
    
    const childComments = allComments.filter(
        (c) => c.repliedOnComment === comment.id
    );

    const commentRef = useRef<HTMLElement | null>(null);

    const moveToComment = (e) => {
        e.stopPropagation();
        if (commentRef.current) {
            (commentRef.current).scrollIntoView({ behavior: 'smooth' });
        }
    };

    const openModal = () => {
        if (!showChildComments) {
            modalStore.openModal();
            modalStore.showReviews();
        }
       
    }


    return (
        
        <Box onClick={()=>openModal()} ref={commentRef} 
            sx={{  
                padding: showChildComments? 'unset' : '1rem',
                width: showChildComments ? 'auto' : '17.8rem',
                height: showChildComments ? 'auto' : '10.1rem',
                backgroundColor: showChildComments ? 'transparent' : '#1f1b2e',
                borderRadius: showChildComments ? 'unset' : '0.8rem',
                marginTop: showChildComments ? 'unset' : '0',
                cursor: showChildComments ? 'unset' : 'pointer',
                transition: 'all 0.3s ease-in-out',
              
                '&:hover': {
                    backgroundColor: showChildComments ? 'unset':'#3e3659',
                  },
                }}>
            <Box sx={{display:'flex', flexDirection:'column', height:'100%'}}>
                <CommentInfo
                    name={comment.author}
                    time={comment.createdAt}
                    id={comment.id}
                    showChildComments={showChildComments}
                />

                <Box sx={{ mt: '0.7rem', mb: '1rem' }}>
                {showChildComments ? (
                    <ShowMoreText
                        text={comment.description}
                        length={400}
                        buttonText={'показать полностью'}
                        useDangerouslySetInnerHTML={true}
                    />
                ) : (
                    
                    <ShowMoreText text={comment.description} length={70} useDangerouslySetInnerHTML={true} />
                )}
                </Box>
                <Stack direction='row' width='100%' justifyContent='space-between' marginTop='auto'>
                    <Time time={comment.createdAt}/>
                    <CommentLikes/>
                </Stack>


                {showChildComments && 
                    <CommentAddForm id={comment.id} movieId={movieId}/>
                }
                
            </Box>
            {showChildComments && childComments.length > 0 && (
                <>
                    <Box
                        sx={{
                            position:'relative',
                            marginLeft: depth >= MAX_DEPTH ? 0 : '1rem',
                            '&.shifted': {
                                marginLeft: 0,
                            },
                        }}
                        className={depth >= MAX_DEPTH ? 'shifted' : ''}>
                          
                        <Divider
                            onClick={moveToComment}
                            sx={{
                            position: 'absolute',
                            top: 0,
                            bottom: 0,
                            left: '-1rem',
                            width: `1px`,
                            border: 'none',
                            backgroundColor: 'rgba(128,128,128,0.2)',
                            cursor:'pointer',
                            padding:'2px',
                            '&:hover': {
                                backgroundColor: '#fff',
                            },
                            }}/>
                            
                          
                            {childComments.map((childComment:Comment) => (
                                <Comment
                                    key={childComment.id}
                                    comment={childComment}
                                    allComments={allComments}
                                    depth={depth + 1} movieId={childComment.movieId} 
                                />
                            ))}
                        </Box>
                </>
            )}
        </Box>
    );
};

export default Comment;