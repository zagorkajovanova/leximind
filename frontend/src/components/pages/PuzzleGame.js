import React, { useState, useEffect } from 'react';
import '../style/PuzzleGame.css';

const PuzzleGame = () => {
    const [tiles, setTiles] = useState([]);
    const [isGameWon, setIsGameWon] = useState(false);

    useEffect(() => {
        initializeGame();
    }, []);

    const initializeGame = () => {
        const shuffledTiles = generateShuffledTiles();
        setTiles(shuffledTiles);
        setIsGameWon(false);
    };

    const generateShuffledTiles = () => {
        const numbers = Array.from({ length: 9 }, (_, i) => i + 1);
        const shuffledNumbers = numbers.sort(() => Math.random() - 0.5);
        return shuffledNumbers;
    };

    const handleTileClick = (index) => {
        if (!isGameWon) {
            const emptyTileIndex = tiles.indexOf(9);
            const tileToMove = tiles[index];

            if (isValidMove(index, emptyTileIndex)) {
                const updatedTiles = [...tiles];
                updatedTiles[index] = 9;
                updatedTiles[emptyTileIndex] = tileToMove;
                setTiles(updatedTiles);

                if (isGameFinished(updatedTiles)) {
                    setIsGameWon(true);
                }
            }
        }
    };

    const isValidMove = (index, emptyTileIndex) => {
        const row = Math.floor(index / 3);
        const col = index % 3;
        const emptyRow = Math.floor(emptyTileIndex / 3);
        const emptyCol = emptyTileIndex % 3;

        return (
            (Math.abs(row - emptyRow) === 1 && col === emptyCol) ||
            (Math.abs(col - emptyCol) === 1 && row === emptyRow)
        );
    };

    const isGameFinished = (updatedTiles) => {
        for (let i = 0; i < 8; i++) {
            if (updatedTiles[i] !== i + 1) {
                return false;
            }
        }
        return true;
    };

    const renderTiles = () => {
        return tiles.map((tile, index) => (
            <div
                key={tile}
                className={`tile ${tile === 9 ? 'empty' : ''}`}
                onClick={() => handleTileClick(index)}
            >
                {tile}
            </div>
        ));
    };

    const renderWinMessage = () => {
        if (isGameWon) {
            return <div className="win-message">Congratulations! You solved the puzzle!</div>;
        }
        return null;
    };

    return (
        <div className="puzzle-game">
            {renderTiles()}
            {renderWinMessage()}
            <button onClick={initializeGame}>Restart</button>
        </div>
    );
};

export default PuzzleGame;