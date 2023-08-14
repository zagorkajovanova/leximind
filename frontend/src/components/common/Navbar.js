import {
    AppBar,
    Box,
    Button,
    Container,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
} from "@mui/material";
import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import {SearchBar} from "./Search";
import '../style/common.css';
import logo from '../../assets/images/logo.png'
import Cookies from 'js-cookie';

const pages = ['home', 'games', 'info', 'learn'];

export function Navbar() {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        checkUserAuthentication();
    }, [])

    const checkUserAuthentication = () => {
        const cookieNickname = Cookies.get('nickname');
        if(cookieNickname) {
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
                            display: { xs: 'none', md: 'flex' },
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LexiMind
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
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
                                display: { xs: 'block', md: 'none' },
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
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontWeight: 800,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LexiMind
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={() => navigate(`/${page}`)}
                                sx={{ my: 2, color: 'inherit', display: 'block', ml: 2, fontSize: 15 }}
                            >
                                {page === 'home' ? 'Почетна' : (page === 'games' ? 'Игри' : (page === 'learn' ? 'Научи' : 'За нас'))}
                            </Button>
                        ))}
                        {user ?
                            (<Button
                                key={'profile'}
                                onClick={() => navigate(`/profile`)}
                                sx={{ my: 2, color: 'inherit', display: 'block', ml: 2, fontSize: 15 }}
                            >
                                Профил
                            </Button>) :
                            (<div></div>)
                        }
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <SearchBar />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}