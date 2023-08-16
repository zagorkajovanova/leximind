import {useLocation, useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {Navbar} from '../common/Navbar';
import {Container, Typography, Paper} from "@mui/material";
import {Question} from "../games/Question";
import img from "../../assets/images/wave.png";
import '../style/common.css';
import {checkUserAuthentication} from "../../service/AuthenticationService";
import axios from '../../axios/axios';

export function PlayGame() {
    const location = useLocation();
    const navigate = useNavigate();
    const game = location.state.game;
    const [user, setUser] = useState(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    useEffect(() => {
        getUser();
    })

    const getUser = () => {
        const nicknameCookie = checkUserAuthentication();
        if (nicknameCookie) {
            setUser(nicknameCookie);
        } else {
            navigate('/login');
        }
    }
    const nextQuestion = () => {
        //Increment question index
        setCurrentQuestionIndex(currentQuestionIndex + 1);
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
            navigate('/finished-game', {state: {game}})
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
            <Question question={game.questions[currentQuestionIndex]} nextQuestion={nextQuestion}
                      questionNum={game.questions.length} finishGame={handleFinishedGame}/>
        </Container>
        <img src={img} alt="wave" className="wave-image"/>
    </div>
}