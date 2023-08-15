import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from '../../axios/axios';
import '../style/common.css';
import wave from '../../assets/images/wave.png';
import {Navbar} from "../common/Navbar";
import {GameCard} from "../games/GameCard";
import {Container, Grid, Typography, Button} from "@mui/material";
import {PuzzleGameCard} from "../games/PuzzleGameCard";
import {MemoryGameCard} from "../games/MemoryGameCard";
import {checkUserAuthenticaton} from "../../service/AuthenticationService";

export function Games() {
    const [games, setGames] = useState([]);
    const [nickname, setNickname] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        checkUser();
        fetchGames();
        // eslint-disable-next-line
    }, [])

    const checkUser = () => {
        const nicknameCookie = checkUserAuthenticaton();
        if(nicknameCookie) {
            setNickname(nicknameCookie);
        } else {
            navigate('/login');
        }
    }

    const fetchGames = async () => {
        try {
            const response = await axios.get('/games');
            setGames(response.data);
        } catch (error) {
            console.error('Error fetching games:', error);
        }
    }

    return <div className="games_page">
        <Navbar />
        <Container>
            <Grid container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Grid item xs={6}>
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        sx={{ mb: 3, mt: 2 }}
                    >
                        Избери игра:
                    </Typography>
                </Grid>
                <Grid item>
                    <Button variant="contained" disabled
                        sx={{ mr: 3, borderRadius: '15px' }}
                    >
                        {nickname}
                    </Button>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                {games.map((game, index) => (
                    <Grid item xs={12} sm={4} key={`game-${index}`}>
                        <GameCard game={game}/>
                    </Grid>
                ))}
                <Grid item xs={12} sm={4}>
                    <PuzzleGameCard />
                </Grid>
                <Grid item xs={12} sm={4}>
                <MemoryGameCard />
                </Grid>
            </Grid>
        </Container>
        <img src={wave} alt="wave" className="wave-image"/>
    </div>
}