import { Box, Fade } from "@mui/material";

import { useEffect, useRef } from "react";
import { dropdownStore } from '@/store/DropdownStore';
import { observer } from "mobx-react-lite";

interface DropDownProps{
  content:React.ReactElement;
  type?:string;
  setIsOpen: any;
  height?:string;
  padding?:string | number;
  margin?:string | number;
  borderRadius?:string | number;
  backgroundColor?: string;
  onMouseLeave?:boolean;
  isOpen?:boolean;
  name:string;
}

const DropDown = observer(({ 
  name,
  content,
  height='28rem',
  padding='5rem 1rem',
  margin=0,
  borderRadius='1rem',
  backgroundColor="#1f1b2e",
  onMouseLeave = true
}:DropDownProps) => {
  
  const dropDownRef = useRef<HTMLDivElement>(null);

  const close:any = () => {
    dropdownStore.setShowDropdown(name, false);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(event.target) &&
        !event.target.closest('#Жанры') &&
        !event.target.closest('#Страны')
      ) {
        close();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropDownRef]);
  
  return (
    <Fade in={dropdownStore.dropdowns[name]}>
      <Box
        onMouseLeave={onMouseLeave ? close : null}
        ref={dropDownRef}
        sx={{
          borderRadius,
          margin,
          padding,
          backgroundColor,
          width:'103%',
          position:'absolute',
          left:'50%',
          transform: 'translateX(-50%)',
          height,
          zIndex:100
        }}
      >
        {content}
      </Box>
    </Fade>
  );
});

export default DropDown;