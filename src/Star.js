import React from "react"

export default function Star(props) {
    const starIcon = props.isFilled ? "star.PNG" : "paper-emoji.png"
    return (
        <img onClick={props.handleClick}  src={`../${starIcon}`} className="cardFavorite" alt="lol" />
    )
}