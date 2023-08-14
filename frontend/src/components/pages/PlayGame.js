import {useLocation} from 'react-router-dom';
import {useState} from 'react';
import {Navbar} from '../common/Navbar';
import {Container, Typography, Paper} from "@mui/material";
import {Question} from "../games/Question";
import img from "../../assets/images/wave.png";
import '../style/common.css';

export function PlayGame() {
    const location = useLocation();
    const game = location.state.game;
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const nextQuestion = () => {
        if(currentQuestionIndex === game.questions.length - 1) {
            //TODO: show finish game button
            setCurrentQuestionIndex(0);
        } else {
            //Increment question index
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    }

    return <div className="page">
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
        <img src={img} alt="wave" className="wave-image"/>
    </div>
}