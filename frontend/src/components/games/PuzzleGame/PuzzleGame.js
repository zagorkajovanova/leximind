import { JigsawPuzzle } from 'react-jigsaw-puzzle/lib'
import 'react-jigsaw-puzzle/lib/jigsaw-puzzle.css'
import {useState} from "react";
import {useNavigate} from 'react-router-dom';
import img from "../../../assets/images/puzzle.jpg";
import "../PuzzleGame/PuzzleGame.css"
import {
    Box,
    Button,
    Modal,
    Typography
} from "@mui/material";

export function PuzzleGame() {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const handleSolvedPuzzle = () => {
        setShowModal(true);
    };

    const handleFinishGame = () => {
        const game = {
            id: Math.random(),
            title: "Сложувалка",
            points: 30
        }
        //TODO: save finished game in database
        navigate('/finished-game', {state: {game}})
    }

    const handleRestart = () => {
        window.location.reload();
    }

    return (
        <>
            <JigsawPuzzle
                imageSrc={img}
                rows={3}
                columns={3}
                onSolved={handleSolvedPuzzle}
                className="jigsaw-puzzle"
            />
            <Modal
                open={showModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Играта е завршена!
                    </Typography>
                    <div style={{display: "flex", justifyContent: "flex-end", marginTop: '20px'}}>
                        <Button onClick={handleRestart} color="primary" sx={{ marginRight: 1 }}>
                            Рестарт
                        </Button>
                        <Button variant="contained" onClick={handleFinishGame} color="primary">
                            Заврши
                        </Button>
                    </div>
                </Box>
            </Modal>
        </>
    );
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: '15px'
};