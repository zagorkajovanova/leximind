import {useEffect, useState} from "react";
import axios from '../../axios/axios';
import '../style/common.css';
import wave from '../../assets/images/wave.png';
import {Navbar} from "../Navbar";
import {GameCard} from "../games/GameCard";
import {Container, Grid, Typography} from "@mui/material";
import {PuzzleGameCard} from "../games/PuzzleGameCard";
import {MemoryGameCard} from "../games/MemoryGameCard";

export function Games() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        fetchGames();
    }, [])

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
            <Typography
                variant="h4"
                fontWeight="bold"
                sx={{ mb: 3, mt: 2 }}
            >
                Игри
            </Typography>
            <Grid container spacing={2}>
                {games.map((game, index) => (
                    <Grid item xs={12} sm={4} key={`game-${index}`}>
                        <GameCard game={game} />
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
        {/*<img src="https://png.pngtree.com/png-vector/20221108/ourmid/pngtree-cartoon-house-illustration-png-image_6434928.png" />*/}
        <img src={wave} alt="wave" className="wave-image"/>
    </div>
}