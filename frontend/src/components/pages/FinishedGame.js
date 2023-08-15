import {useLocation, useNavigate} from "react-router-dom";
import {Navbar} from "../common/Navbar";
import {Button, Container, Paper, Typography, Divider} from "@mui/material";
import "../style/common.css";
import star from '../../assets/images/star-svgrepo-com.svg';
import wave from '../../assets/images/wave.png';

export function FinishedGame() {
    const location = useLocation();
    const navigate = useNavigate();
    const game = location.state.game;

    const handleButtonClick = () => {
        navigate('/games');
    }

    return <div className="finished_page">
        <Navbar />
        <div style={styles.container}>
            <Container>
                <div style={styles.cardContainer}>
                <Paper elevation={4} style={styles.card}>
                    <Typography variant="h4" letterSpacing={3} gutterBottom>
                        ЧЕСТИТКИ!
                    </Typography>
                    <Container sx={{mb: 3, mt: 2}}>
                        <img src={star} alt="star" width={50} style={{marginRight: '3px'}}/>
                        <img src={star} alt="star" width={50} style={{marginRight: '3px'}}/>
                        <img src={star} alt="star" width={50} style={{marginRight: '3px'}}/>
                    </Container>
                    <Typography variant="h5" gutterBottom>
                        Успешно ја завршивте играта:
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        "{game.title}"
                    </Typography>
                    <Divider variant="middle" sx={{ mt: 3, mb: 3 }} />
                    <Typography variant="h4">
                        Освоени поени:
                    </Typography>
                    <Typography variant="h4" sx={{ color: 'green', fontWeight: 'bold' }}>
                        {game.points}
                    </Typography>
                    <Button variant="contained"
                        color="success"
                        sx={{ borderRadius: '15px', mt: 3 }}
                            onClick={handleButtonClick}
                    >
                        Продолжи
                    </Button>
                </Paper>
                </div>
            </Container>
        </div>
        <img src={wave} alt="wave" className="wave-image"/>
    </div>
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '80vh',
    },
    cardContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    card: {
        padding: '20px',
        textAlign: 'center',
        borderRadius: '10px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        width: '50%', // Adjust the width as needed
    },
};