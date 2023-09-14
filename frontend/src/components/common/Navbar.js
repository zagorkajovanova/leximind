import {
    AppBar,
    Box,
    Container,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
} from "@mui/material";
import {useState, useEffect} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import '../style/common.css';
import logo from '../../assets/images/logo.png'
import Cookies from 'js-cookie';
import {UserAvatar} from "./UserAvatar";
import {NavbarPageButton} from "./NavbarPageButton";

const pages = ['home', 'games', 'learn', 'info'];

export function Navbar() {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const currentPage = location.pathname.split('/')[1];

    useEffect(() => {
        checkUserAuthentication();
    }, [])

    const checkUserAuthentication = () => {
        const cookieNickname = Cookies.get('nickname');
        if (cookieNickname) {
            setUser(cookieNickname);
        }
    }

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static" color="default">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <img src={logo} alt="leximind-logo" width={40} className="logo"/>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/home"
                        sx={{
                            mr: 2,
                            display: {xs: 'none', md: 'flex'},
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LexiMind
                    </Typography>

                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: {xs: 'block', md: 'none'},
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={() => navigate(`/${page}`)}>
                                    <Typography textAlign="center">
                                        {page === 'home' ? 'Почетна' : (page === 'games' ? 'Игри' : (page === 'learn' ? 'Научи' : 'За нас'))}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: {xs: 'flex', md: 'none'},
                            flexGrow: 1,
                            fontWeight: 800,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LexiMind
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: {xs: 'none', md: 'flex'}, justifyContent: 'center' }}>
                        {pages.map((page) => (
                            <NavbarPageButton page={page} currentPage={currentPage} />
                        ))}
                    </Box>
                    <Box sx={{flexGrow: 0, display: "flex", justifyContent: "center", alignContent: "center"}}>
                        { user && <UserAvatar user={user} handleClick={() => navigate('/profile')} /> }
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}