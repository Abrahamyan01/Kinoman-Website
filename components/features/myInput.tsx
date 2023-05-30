import {TextField} from "@mui/material";
import { Dispatch, SetStateAction } from "react";


interface MyInputProps{
    label:string;
    setState:  Dispatch<SetStateAction<string>> | undefined
}

const MyInput = ({label, setState}:MyInputProps) => {

    return(
        <TextField
        onChange={(e) => setState ? setState(e.target.value) : undefined}
        sx={{
            '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white',
            },
            '&:hover fieldset': {
                borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'yellow',
            },
            },
            '& label': {
            color: 'white',
            },
            '& label.Mui-focused': {
            color: 'yellow',
            },
            '& input::placeholder': {
            color: 'white',
            },
            '& input': {
            color: 'white',
            },
        }}
        label={label}
        />
    )
}

export default MyInput;