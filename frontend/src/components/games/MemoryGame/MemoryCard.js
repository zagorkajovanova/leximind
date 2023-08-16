import React from "react";
import cardImage from "../../../assets/images/memory/card.jpg";
import "./MemoryCard.css";

const MemoryCard = ({ onClick, card, index, isInactive, isFlipped, isDisabled }) => {
    const handleClick = () => {
        !isFlipped && !isDisabled && onClick(index);
    };

    return (
        <div
            className={`card ${isFlipped ? "is-flipped" : ""} ${isInactive ? "is-inactive" : ""}`}
            onClick={handleClick}
        >
            <div className="card-face card-font-face">
                <img src={cardImage} alt="pokeball" />
            </div>
            <div className="card-face card-back-face">
                <img src={card.image} alt="pokeball" />
            </div>
        </div>
    );
};

export default MemoryCard;