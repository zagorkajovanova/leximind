import {useLocation, useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {Navbar} from '../common/Navbar';
import {Container, Typography, Paper, Button} from "@mui/material";
import {Question} from "../games/Question";
import img from "../../assets/images/wave.png";
import '../style/common.css';
import {checkUserAuthenticaton} from "../../service/AuthenticationService";
import axios from '../../axios/axios';

export function PlayGame() {
    const location = useLocation();
    const navigate = useNavigate();
    const game = location.state.game;
    const [user, setUser] = useState(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [finishButton, setFinishButton] = useState(false);

    useEffect(() => {
        getUser();
    })

    const getUser = () => {
        const nicknameCookie = checkUserAuthenticaton();
        if(nicknameCookie) {
            setUser(nicknameCookie);
        } else {
            navigate('/login');
        }
    }
    const nextQuestion = () => {
        if(currentQuestionIndex === game.questions.length - 1) {
            setFinishButton(true);
        } else {
            //Increment question index
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    }

    const handleFinishedGame = async () => {
        console.log(`Finished game: ${game.title}`)
        try {
            await axios.post(
                '/users/finish-game',
                {
                    game: game,
                    user: user
                }
            )
            console.log("Saved finished game.")
            navigate('/finished-game', { state: {game} })
        } catch (error) {
            console.log("Error saving finished game:", error);
        }
    }

    return <div className="game_page">
        <Navbar/>
        <Container sx={{p: 2}}>
            <Paper elevation={4} sx={{
                p: 2,
                borderRadius: '10px',
                opacity: '0.9',
                display: 'flex',
                alignContent: 'center',
                justifyContent: 'center'
            }}>
                <Typography variant="h4" fontWeight="bold">
                    {game.title}
                </Typography>
            </Paper>
        </Container>
        <Container sx={{p: 2,}}>
            <Question question={game.questions[currentQuestionIndex]} nextQuestion={nextQuestion} />
        </Container>
        {finishButton && <Container sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant="contained"
                    color="success"
                    size="large"
                    sx={{ mr: 3, borderRadius: "15px" }}
                    onClick={handleFinishedGame}
            >
                Заврши ја играта</Button>
        </Container>}
        <img src={img} alt="wave" className="wave-image"/>
    </div>
}