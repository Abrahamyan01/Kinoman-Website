import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import HouseIcon from '@mui/icons-material/House';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { observer } from 'mobx-react-lite';
import navbar from "../../store/MobileNavBar"
import Link from 'next/link';

const MobileNavBar = observer(() => {
    return (
        <BottomNavigation
            sx={{
                position: "fixed",
                display: "none",
                width: "100%",
                bottom: "0",
                background: "rgba(31,27,46,.88)",
                backdropFilter: "blur(8px)",
                ".css-1bjk3jo-MuiButtonBase-root-MuiBottomNavigationAction-root.Mui-selected": {
                    color: "white",
                },
                ".css-1bjk3jo-MuiButtonBase-root-MuiBottomNavigationAction-root": {
                    padding: "0"
                },
                ".css-118p9r0-MuiButtonBase-root-MuiBottomNavigationAction-root": {
                    paddingX: "0",
                },
                "@media (max-width:1200px)": {
                    display: "flex"
                },
            }}
            value={navbar.value}
            onChange={(e, newValue) => navbar.handleChange(e, newValue)}
        >
            <BottomNavigationAction
                label="Домой"
                value="домой"
                icon={<Link href="/" style={{ color: "rgba(255,255,255,.48)" }}><HouseIcon /></Link>}
            />
            <BottomNavigationAction
                label="Каталог"
                value="каталог"
                icon={<Link href="/movies" style={{ color: "rgba(255,255,255,.48)" }}><OndemandVideoIcon /></Link>}
            />
            <BottomNavigationAction
                label="Поиск"
                value="поиск"
                icon={<Link href="/" style={{ color: "rgba(255,255,255,.48)" }}>< SearchIcon /></Link>}
            />
            <BottomNavigationAction
                label="Профиль"
                value="профиль"
                icon={<Link href="/" style={{ color: "rgba(255,255,255,.48)" }}>< PersonOutlineIcon /></Link>}
            />
            <BottomNavigationAction
                label="Ещё"
                value="ещё"
                icon={<Link href="/" style={{ color: "rgba(255,255,255,.48)" }}>< MoreHorizIcon /></Link>}
            />
        </BottomNavigation >
    );
})

export default MobileNavBar