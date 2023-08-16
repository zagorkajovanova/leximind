import {Typography, Grid, Paper, Container} from "@mui/material";
import {Response} from "./Response";
import '../style/common.css';
import {useState} from "react";
import {AnswerModal} from "../common/AnswerModal";

let count = 0;

export function Question({question, nextQuestion, questionNum, finishGame}) {
    const [correctModalOpen, setCorrectModalOpen] = useState(false);
    const handleCorrectModalOpen = () => setCorrectModalOpen(true);
    const handleCorrectModalClose = () => setCorrectModalOpen(false);

    const [wrongModalOpen, setWrongModalOpen] = useState(false);
    const handleWrongModalOpen = () => setWrongModalOpen(true);
    const handleWrongModalClose = () => setWrongModalOpen(false);

    const [lastQuestionModal, setLastQuestionModal] = useState(false);
    const handleLastQuestionModalOpen = () => setLastQuestionModal(true);
    const handleLastQuestionModalClose = () => setLastQuestionModal(false);

    const checkQuestionAnswer = (answer) => {
        const correctAnswer = question.correct_answer.text;

        if (answer === correctAnswer) {
            if (count === questionNum - 1) {
                count = 0;
                handleLastQuestionModalOpen();
            } else {
                count++;
                handleCorrectModalOpen();
                nextQuestion();
            }
        } else {
            handleWrongModalOpen();
        }
    }

    return (
        <Container>
            <Paper elevation={4} sx={{p: 3, borderRadius: '10px'}}>
                <Grid container>
                    <Grid item sm={question.image ? 6 : 12} xs={12} sx={{display: 'grid'}}>
                        {question.text && (
                            <Typography variant={question.image ? "h4" : "h3"} sx={{justifySelf: 'center', mb: 3}}>
                                {question.text}
                            </Typography>
                        )}
                        {question.image && <img src={question.image} alt="question" width="400px"
                                                style={{justifySelf: 'center', marginBottom: '5px'}}/>}
                    </Grid>
                    <Grid container sm={question.image ? 6 : 12} sx={{alignSelf: 'center'}}>
                        {question.responses.map((response, index) => (
                            <Grid item sm={question.image ? 12 : 6} xs={12} key={index}>
                                <Response response={response} checkAnswer={checkQuestionAnswer}/>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Paper>
            {correctModalOpen &&
                <AnswerModal open={correctModalOpen} handleModalClose={handleCorrectModalClose} title={"Точен одговор!"}
                             description={""} finishGame={null} />}
            {wrongModalOpen &&
                <AnswerModal open={wrongModalOpen} handleModalClose={handleWrongModalClose} title={"Погрешен одговор!"}
                             description={"Обидете се повторно..."} finishGame={null} />}
            {lastQuestionModal &&
                <AnswerModal open={lastQuestionModal} handleModalClose={handleLastQuestionModalClose}
                             title={"Точен одговор!"} description={""} finishGame={finishGame}/>
            }
        </Container>
    );
}
