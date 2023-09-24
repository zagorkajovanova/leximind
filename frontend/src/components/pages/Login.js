import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from '../../service/axios';
import {Navbar} from "../common/Navbar";
import {Button, Container, Grid} from "@mui/material";
import "../style/common.css";
import "../style/login.css";
import img from "../../assets/images/aboutus.png";

export function Login() {
    const [user, setUser] = useState('');
    const [backgroundImg, setBackgroundImg] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        setBackgroundImg(img);
    }, [])

    const handleInputChange = (e) => {
        setUser(e.target.value);
    }

    const handleLogin = () => {
        //Save nickname in cookie
        // const cookieEnc = encodeURIComponent(user);
        const thirtyMinutesFromNow = new Date(new Date().getTime() + 30 * 60 * 1000);
        Cookies.set('nickname', user, {expires: thirtyMinutesFromNow, path: '/'});

        saveUser().then(
            navigate('/games')
        )
    }

    const saveUser = async () => {
        try {
            await axios.post('/users', {nickname: user});
            console.log("User saved");
        } catch (error) {
            console.log("Error saving user:", error);
        }
    }

    return <div>
        { backgroundImg &&
            <>
                <Navbar/>
                <Container
                    sx={{
                        minHeight: '100vh',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Grid
                        container
                        sx={{
                            position: 'absolute',
                            top: '45%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            padding: '20px',
                            zIndex: 1
                        }}
                    >
                        <Grid item xs={12} sm={12}>
                            <form id="log">
                                <h1>Најави се!</h1>
                                <div className="fancy-input">
                                    <input
                                        type="text"
                                        value={user}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <label>Име и презиме</label>
                                </div>
                                <Button onClick={handleLogin}>
                                    Започни
                                </Button>
                            </form>
                        </Grid>
                    </Grid>
                    <img src={img} alt="wave" className="wave-image"/>
                </Container>
            </>
        }

    </div>
}