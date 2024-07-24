import React from "react"
import './App.css'
export default function Manny () {

    const [isCorrect, setIsCorrect] = React.useState(false)

    const yesAnswer = () => {
        setIsCorrect(prev => !prev)
    }

   
    return (
        <div className="heading" >
            <h1>KAYNE</h1>
            <img className="image" src="./IMG_2844.JPG" height="100px"/>
            <h2>I AM SO SORRY FOR EVERYTHING MANNY</h2>
            <h3>Will you forgive me? &#129402;</h3>
            <button onClick={yesAnswer}>yes</button>
            {isCorrect && <p>Thank you very much, I love you and i promise never to hurt you agaim</p>}
        </div>
    )
}