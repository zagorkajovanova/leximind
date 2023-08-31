import {useNavigate} from 'react-router-dom';
import {IconButton, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import home from '../../assets/images/navbar/icons8-home-page-30.png';
import games from '../../assets/images/navbar/icons8-games-30.png';
import info from '../../assets/images/navbar/icons8-info-30.png';
import learn from '../../assets/images/navbar/icons8-reading-30.png';

export function NavbarPageButton({ page }) {
    const [pageName, setPageName] = useState(null);
    const [icon, setIcon] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const currentPage = page === 'home' ? 'Почетна' : (page === 'games' ? 'Игри' : (page === 'learn' ? 'Научи' : 'За нас'));
        setPageName(currentPage);

        const currentIcon = page === 'home' ? <img src={home} alt="home" /> :
            (page === 'games' ? <img src={games} alt="games" /> : (page === 'learn' ? <img src={learn} alt="learn" /> : <img src={info} alt="info" />));
        setIcon(currentIcon);
    }, [page])

    return <IconButton
                   key={page}
                   onClick={() => navigate(`/${page}`)}
                   sx={{my: 2, color: 'inherit',ml: 2, fontSize: 15}}
    >
        {icon}
        <Typography sx={{ ml: 1 }}>{pageName}</Typography>
    </IconButton>
}