import { Box, Link, Stack } from "@mui/material";
import MyText from "../content/myText";
import MyTitle from "../content/myTitle";
import MyButton from "../buttons/myButton";
import Image from "next/image";
import TranslationDynamicData from "../content/translationDynamicData";

interface DevicesProps{
    nameRu:string;
    nameEn:string;
    poster:string;
}

const Devices = ({nameRu,nameEn, poster}:DevicesProps) => {


    return(
        <Box sx={{display:'flex',justifyContent:'space-between', mt:'6rem', mb:'6rem'}}>
            <Box>
                <Stack direction='row' alignItems='center'>
                    <TranslationDynamicData nameRu={`Смотреть «${nameRu}» на всех устройствах`} nameEn={`Смотреть «${nameEn}» на всех устройствах`} color={"#fff"} weight={700} line={"28px"} align={'left'} size={'1.5rem'}/>
                </Stack>
                <Box sx={{mt:'1rem'}}>
                <MyText
                    text={'Приложение доступно для скачивания на iOS, Android, SmartTV и приставках'}
                    align={"left"}/>
                </Box>
 
                    
                <Box sx={{mt:'2rem'}}>
                    <MyButton color={'#c10032'} text="Подключить устройство"/>
                </Box>  
            </Box>
            <Box>
                <Box sx={{position:'relative'}}>
                    <Image
                        src='/images/iviTV.png'
                        width={536}
                        height={272}
                        alt="телевизор"
                        style={{ position: 'relative', top: 0, left: 0 ,zIndex:3}}>
                        
                    </Image>
                    <Image 
                        src={poster}
                        width={337}
                        height={192}
                        
                        alt="постер"
                        style={{ position: 'absolute', top: 0, left: 100 ,zIndex:1}}>     
                    </Image>
                    <Image 
                        src='/images/iviIpad.png'
                        width={200}
                        height={136}
                        
                        alt="постер"
                        style={{ position: 'absolute', bottom: 0, right: 42 ,zIndex:4}}>     
                    </Image>
                    <Image 
                        src={poster}
                        width={188}
                        height={102}
                        
                        alt="постер"
                        style={{ position: 'absolute', bottom: 7, right: 48 ,zIndex:4}}>     
                    </Image>
                </Box>
            </Box>
        </Box>
    )
}

export default Devices;