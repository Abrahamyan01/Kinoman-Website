import { Button, Typography } from "@mui/material";
import { modalStore } from "../../store/modalStore";

interface MyTitleProps {
  isButton?: boolean;
  onClick?:any;
  showRedBorder?:boolean;
  text: string;
  size?: string;
  lineHeight?:string;
  fontWeight?:number;
}

const MyTitle = ({ isButton, text, onClick, showRedBorder, size = '1.5rem', lineHeight=size, fontWeight = 700}: MyTitleProps) => {

  const isSelected = modalStore.content === text;
  
  const styles = {
    position: 'relative',
    fontSize: size,
    lineHeight,
    fontWeight,
    fontStyle: "normal",
    color: "#fff",

    backgroundColor: "transparent",
    textTransform: "none",
    textDecoration: "none",
    padding: isButton ? "0 4px" : 0,
    "&:after": {
      content: '""',
      position: 'absolute',
      bottom: isButton ? (/* isSelected && */ showRedBorder ? '-14px': '-4px'): 'none',
      left: 0,
      right: 0,
      height: isButton ? (isSelected && showRedBorder ? '6px': '1px'): 'none',
      backgroundColor: isButton ? (isSelected && showRedBorder ? "red" : "rgba(255,255,255,0.1)") : "none",
    },
    "&:hover": {
      backgroundColor: "transparent",
      "&:after": {
        backgroundColor: isButton && !isSelected ? "#fff" : undefined,
      },
    },
  };



  if (isButton) {
    return (
      <Button onClick={onClick} variant="text" sx={styles}>
        {text}
      </Button>
    );
  } else {
    return (
      <Typography variant="h2" sx={styles}>
        {text}
      </Typography>
    );
  }
};

export default MyTitle;
