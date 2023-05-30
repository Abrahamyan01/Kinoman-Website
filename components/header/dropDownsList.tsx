import {Box} from '@mui/material';
import ProfileDropDownContent from './dropdownContent/profileDropDownContent';
import MoviesDropDownContent from './dropdownContent/moviesDropDownContent';
import SubscribeDropdownContent from './dropdownContent/subscribeDropdownContent';
import DropDown from '../features/dropDown';
import { dropdownStore } from '@/store/DropdownStore';
import { observer } from 'mobx-react-lite';
import AlertDropdownContent from './dropdownContent/AlertDropdownContent';

const DropDownsList = observer(() => {
    return(
        <Box sx={{ position: 'absolute', width:'100%',top: 0, zIndex: 1}}>
            <DropDown
                content={<ProfileDropDownContent/>}
                isOpen={dropdownStore.dropdowns.profile}
                setIsOpen={(value) => dropdownStore.setShowDropdown('profile', value)}
                onMouseLeave={true}
                name={'profile'}
            />
            <DropDown
                content={<MoviesDropDownContent/>}
                isOpen={dropdownStore.dropdowns.movies}
                setIsOpen={(value) => dropdownStore.setShowDropdown('movies', value)}
                onMouseLeave={true}
                name={'movies'}
            />
            <DropDown
                content={<SubscribeDropdownContent/>}
                isOpen={dropdownStore.dropdowns.subscribe}
                setIsOpen={(value) => dropdownStore.setShowDropdown('subscribe', value)}
                onMouseLeave={true}
                name={'subscribe'}
                height={'40rem'}
            />
            <DropDown
                content={<AlertDropdownContent/>}
                isOpen={dropdownStore.dropdowns.alert}
                setIsOpen={(value) => dropdownStore.setShowDropdown('alert', value)}
                onMouseLeave={true}
                name={'alert'}
            />
      </Box>
    )
});

export default DropDownsList;