import { useState, useEffect} from "react"; 
import {Box, Button, Modal, IconButton, Stack} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MyButton from "../buttons/myButton";
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import IosShareIcon from '@mui/icons-material/IosShare';
import SmallButton from "../buttons/smallButton";

const MovieTrailer = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    }

    const closeModal = () => {
        setModalIsOpen(false);
    }

    useEffect(() => {
        if (modalIsOpen) {
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.documentElement.style.overflow = 'unset';
        }
    }, [modalIsOpen]);

    return(
        <> 
           <Box sx={{height:'404', position:'relative'}}>
                <Box sx={{position:'sticky', top: 0, padding:'2rem 0'}}>
                    <video id="video" width="719" height="404" controls>
                        <source src="/trailer.mp4" type="video/mp4" />
                    </video>
                    <Stack direction='row' gap={1} sx={{mt:'1rem'}}>
                        <MyButton 
                            text={'Трейлер'}
                            icon={<PlayArrowOutlinedIcon/>}
                            func={openModal}
                            color={'rgba(255,255,255,.08)'}
                            hoverColor={'rgba(255,255,255,.18)'}/>
                        <SmallButton backgroundColor="rgba(255,255,255,.08)" hover='rgba(255,255,255,.18)' icon={<BookmarkBorderIcon sx={{color:"#fff"}}/>}/>
                        <SmallButton backgroundColor="rgba(255,255,255,.08)" hover='rgba(255,255,255,.18)' icon={<NotificationsNoneIcon sx={{color:"#fff"}}/>}/>
                        <SmallButton backgroundColor="rgba(255,255,255,.08)" hover='rgba(255,255,255,.18)' icon={<IosShareIcon sx={{color:"#fff"}}/>}/>
                    </Stack>
                </Box>
            </Box>

            <Modal
                open={modalIsOpen}
                onClose={closeModal}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    
                }}
            >
              <Box
                sx={{
                    position: 'relative',
                }}>
                    <IconButton
                        onClick={closeModal}
                        sx={{
                            position: 'absolute',
                            top: '-2rem',
                            right: '-2rem',
                            color:'#fff'
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <Box>
                        <video width="100%" height="auto" controls>
                            <source src="/trailer.mp4" type="video/mp4" />
                        </video>
                    </Box>
                </Box>
            </Modal>
            {modalIsOpen && (
                <Box
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(16, 14, 25, 0.9)',
                    }}
                />
            )}

        </>

    )
}

export default MovieTrailer;

