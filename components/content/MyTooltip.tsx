import { Tooltip } from '@mui/material';

interface MyTooltipProps{
    content: React.ReactElement;
    text: string;
}

const MyTooltip = ({content, text}:MyTooltipProps) => {


    return(
        <Tooltip title={text} placement="top-end" disableInteractive  componentsProps={{
            tooltip: {
            sx: {
                bgcolor: '#100e19',
                position:'absolute',
                top:'-1rem',
                whiteSpace:'nowrap'
            },
            },
        }}>
            {content}
        </Tooltip>
    )
}

export default MyTooltip;