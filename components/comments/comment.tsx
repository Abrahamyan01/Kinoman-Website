import React, {useRef, useState} from 'react';
import { Box, Button, Divider } from '@mui/material';
import CommentInfo from './commentInfo';
import ShowMoreText from '../showMoreText';
import CommentAddForm from './commentAddForm';
import { cutText } from '../../functions/cutText';
import MyText from '../content/myText';
import Time from '../content/time';
import { modalStore } from '@/store/modalStore';
import CommentsLine from './commentsLine';


const MAX_DEPTH = 15;

const Comment = ({ comment, allComments, depth = 1, showChildComments}: any) => {
    const childComments = allComments.filter(
        (c: any) => c.repliedOnComment === comment.id
    );

    const commentRef = useRef(null);

    const handleClick = (e:any) => {
        e.stopPropagation();
        if (commentRef.current) {
            (commentRef.current as any).scrollIntoView({ behavior: 'smooth' });
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
                width: showChildComments ? 'auto' : '255.74px',
                height: showChildComments ? 'auto' : '161.97px',
                backgroundColor: showChildComments ? 'transparent' : '#1f1b2e',
                borderRadius: showChildComments ? 'unset' : '0.8rem',
                marginTop: showChildComments ? 'unset' : '2rem',
                cursor: showChildComments ? 'unset' : 'pointer',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                    backgroundColor: showChildComments ? 'unset':'#3e3659',
                  },
                }}>
            <Box>
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
                    <MyText text={cutText(comment.description, 80, false)} align="left" color='#fff'/>
                )}
                </Box>
                <Time time={comment.createdAt}/>

                {showChildComments && 
                    <CommentAddForm />
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
                            className={depth >= MAX_DEPTH ? 'shifted' : ''}
                        >
                          
                                <Divider
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
                                }}
                            />
                            
                          
                            {childComments.map((childComment: any) => (
                                <Comment
                                    key={childComment.id}
                                    comment={childComment}
                                    allComments={allComments}
                                    depth={depth + 1}
                                    showChildComments={showChildComments}
                                />
                            ))}
                        </Box>
                  
                </>
            )}
        </Box>
    );
};

export default Comment;