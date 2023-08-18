import { useEffect, useState, useRef } from "react";
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    Button,
    DialogTitle, Divider, Box
} from "@mui/material";
import {useNavigate} from 'react-router-dom';
import Card from "./MemoryCard";
import "./MemoryGame.css";
import {checkUserAuthentication} from "../../../service/AuthenticationService";
import axios from "../../../axios/axios";

const uniqueCardsArray = [
    {
        type: "Apple",
        image: require(`../../../assets/images/memory/apple.jpg`)
    },
    {
        type: "Banana",
        image: require(`../../../assets/images/memory/banana.jpg`)
    },
    {
        type: "Pear",
        image: require(`../../../assets/images/memory/pear.jpg`)
    },
    {
        type: "Pineapple",
        image: require(`../../../assets/images/memory/pineapple.jpg`)
    },
    {
        type: "Pomegranate",
        image: require(`../../../assets/images/memory/pomegrenate.jpg`)
    },
    {
        type: "Watermelon",
        image: require(`../../../assets/images/memory/watermelon.jpg`)
    }
];

function shuffleCards(array) {
    const length = array.length;
    for (let i = length; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * i);
        const currentIndex = i - 1;
        const temp = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temp;
    }
    return array;
}
export default function MemoryGame() {
    const navigate = useNavigate();
    const [cards, setCards] = useState(() =>
        shuffleCards(uniqueCardsArray.concat(uniqueCardsArray))
    );
    const [openCards, setOpenCards] = useState([]);
    const [clearedCards, setClearedCards] = useState({});
    const [shouldDisableAllCards, setShouldDisableAllCards] = useState(false);
    const [moves, setMoves] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [bestScore, setBestScore] = useState(
        JSON.parse(localStorage.getItem("bestScore")) || Number.POSITIVE_INFINITY
    );
    const [user, setUser] = useState(null);
    const timeout = useRef(null);

    const disable = () => {
        setShouldDisableAllCards(true);
    };
    const enable = () => {
        setShouldDisableAllCards(false);
    };

    const checkCompletion = () => {
        if (Object.keys(clearedCards).length === uniqueCardsArray.length) {
            setShowModal(true);
            const highScore = Math.min(moves, bestScore);
            setBestScore(highScore);
            localStorage.setItem("bestScore", highScore);
        }
    };

    const evaluate = () => {
        const [first, second] = openCards;
        enable();
        if (cards[first].type === cards[second].type) {
            setClearedCards((prev) => ({ ...prev, [cards[first].type]: true }));
            setOpenCards([]);
            return;
        }
        // This is to flip the cards back after 500ms duration
        timeout.current = setTimeout(() => {
            setOpenCards([]);
        }, 500);
    };
    const handleCardClick = (index) => {
        if (openCards.length === 1) {
            setOpenCards((prev) => [...prev, index]);
            setMoves((moves) => moves + 1);
            disable();
        } else {
            clearTimeout(timeout.current);
            setOpenCards([index]);
        }
    };

    const getUser = () => {
        const nicknameCookie = checkUserAuthentication();
        if (nicknameCookie) {
            setUser(nicknameCookie);
        } else {
            navigate('/login');
        }
    }

    useEffect(() => {
        getUser();
    }, [])

    useEffect(() => {
        let timeout = null;
        if (openCards.length === 2) {
            timeout = setTimeout(evaluate, 300);
        }
        return () => {
            clearTimeout(timeout);
        };
        // eslint-disable-next-line
    }, [openCards]);

    useEffect(() => {
        checkCompletion();
        // eslint-disable-next-line
    }, [clearedCards]);
    const checkIsFlipped = (index) => {
        return openCards.includes(index);
    };

    const checkIsInactive = (card) => {
        return Boolean(clearedCards[card.type]);
    };

    const handleRestart = () => {
        setClearedCards({});
        setOpenCards([]);
        setShowModal(false);
        setMoves(0);
        setShouldDisableAllCards(false);
        // set a shuffled deck of cards
        setCards(shuffleCards(uniqueCardsArray.concat(uniqueCardsArray)));
    };

    const handleFinishedGame = async () => {
        const game = {
            id: Math.random(),
            title: "Меморија",
            points: 30
        }
        //TODO: save finished game in database
        navigate('/finished-game', {state: {game}})
    }

    return (
        <div className="App">
            <header>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        width: 'fit-content',
                        color: 'text.secondary',
                        '& svg': {
                            m: 1.5,
                        },
                        '& hr': {
                            mx: 0.5,
                        },
                        p: 1
                    }}
                >
                    <span className="bold" style={{ marginRight: '5px' }}>Чекори: {moves}</span>
                    <Divider orientation="vertical" flexItem />
                    {localStorage.getItem("bestScore") && (
                        <span className="bold" style={{ marginLeft: '5px' }}>Најдобар резултат: {bestScore}</span>
                    )}
                </Box>
            </header>
            <div className="container">
                {cards.map((card, index) => {
                    return (
                        <Card
                            key={index}
                            card={card}
                            index={index}
                            isDisabled={shouldDisableAllCards}
                            isInactive={checkIsInactive(card)}
                            isFlipped={checkIsFlipped(index)}
                            onClick={handleCardClick}
                        />
                    );
                })}
            </div>
            <footer>
                <div className="restart">
                    <Button onClick={handleRestart}
                            color="primary"
                            variant="contained"
                            sx={{ borderRadius: '15px' }}
                    >
                        Рестарт
                    </Button>
                </div>
            </footer>
            <Dialog
                open={showModal}
                disableEscapeKeyDown
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Играта е завршена!
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Ја завршивте играта во {moves} чекори.
                        Вашиот најдобар резултат е{" "}{bestScore} чекори.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleRestart} color="primary">
                        Рестарт
                    </Button>
                    <Button variant="contained" onClick={handleFinishedGame} color="primary">
                        Заврши
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
