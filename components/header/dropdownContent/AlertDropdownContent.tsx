import { Box, Typography } from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications';
import React from 'react'
import { observer } from 'mobx-react-lite';

const AlertDropdownContent = observer(() => {
    return (
        <Box sx={{
            position: "absolute",
            zIndex: "1000",
            width:'75rem',
            margin: "0 auto",
            height: "280px",
            background: "#1f1b2e",
            top: "84px",
            borderTop: "1px solid rgba(255,255,255,.2)",
            borderRadius: "0px 0px 20px 20px",
            padding: "30px 30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"

        }}
        >
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px"
            }}>
                <NotificationsIcon sx={{ color: "rgba(255,255,255,.48)", fontSize: "60px" }} />
                <Typography sx={{ color: "rgba(255,255,255,.48)", }}>Здесь появляются только важные сообщения</Typography>
            </Box>
        </Box>
    )
})

export default AlertDropdownContent;
