import React from "react"
import Memedata from "./Memedata"

export default function Meme() {

    const [memeImage, setMemeImage] = React.useState("")

    function getMemeImage() {
        const memesArray = Memedata.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
        
    }
    return (
        <main>
            <div className="form">
                <input placeholder="Top text" className="formInput" type="text"/>
                <input placeholder="Bottom text" className="formInput" type="text" />
                <button onClick={getMemeImage} className="formButton">Get a new meme image</button>
                <img className="imageMeme" src={memeImage} alt="result" />
            </div>
        </main>
    )
}